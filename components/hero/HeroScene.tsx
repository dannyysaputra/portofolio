"use client";

// Signature hero scene. Scattered blocks ("manual chaos") assemble, driven by
// scroll progress, into an ordered pipeline: an input queue feeding one lead
// node that dispatches to worker nodes, with accent pulses travelling along
// the connections. Loaded only on the client, after first paint (HeroVisual).

import { createRoot, extend, useFrame, useThree, type ReconcilerRoot } from "@react-three/fiber";
import { useEffect, useMemo, useRef, type RefObject } from "react";
import * as THREE from "three";

export type SceneQuality = "full" | "lite";

type Props = {
  quality: SceneQuality;
  running: boolean;
  trackRef: RefObject<HTMLElement | null>;
  onReady: () => void;
};

function readToken(name: string, fallback: string) {
  if (typeof window === "undefined") return fallback;
  const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  return v || fallback;
}

// Deterministic PRNG so the layout is identical on every visit.
function mulberry32(seed: number) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const smooth = (x: number) => x * x * (3 - 2 * x);
const clamp01 = (x: number) => Math.min(1, Math.max(0, x));

// Per-frame scratch objects. Module scope: one scene per page, never read by React.
const dummy = new THREE.Object3D();
const identityQ = new THREE.Quaternion();
const fromQ = new THREE.Quaternion();

const LEAD = new THREE.Vector3(-0.15, 0, 0);
const LEAD_SIZE = 1.05;
const WORKER_X = 2.15;

type Block = {
  from: THREE.Vector3;
  fromRot: THREE.Euler;
  fromScale: number;
  to: THREE.Vector3;
  toScale: number;
  delay: number;
  drift: number;
};

function buildLayout(quality: SceneQuality) {
  const rand = mulberry32(7);
  const workerCount = quality === "full" ? 5 : 4;
  const queueCols = quality === "full" ? 4 : 3;
  const queueRows = quality === "full" ? 6 : 4;

  const workerYs = Array.from({ length: workerCount }, (_, i) => (i - (workerCount - 1) / 2) * 1.1);
  const blocks: Block[] = [];

  const scatter = () => ({
    from: new THREE.Vector3((rand() - 0.5) * 5, (rand() - 0.5) * 4.8, (rand() - 0.65) * 2.2),
    fromRot: new THREE.Euler(rand() * Math.PI, rand() * Math.PI, rand() * Math.PI),
    fromScale: 0.14 + rand() * 0.24,
    delay: rand() * 0.35,
    drift: rand() * Math.PI * 2,
  });

  // Input queue: an ordered grid to the left of the lead node.
  const cell = 0.3;
  const qx0 = -2.95;
  const qy0 = ((queueRows - 1) * cell) / 2;
  for (let r = 0; r < queueRows; r++) {
    for (let c = 0; c < queueCols; c++) {
      blocks.push({ ...scatter(), to: new THREE.Vector3(qx0 + c * cell, qy0 - r * cell, 0), toScale: 0.2 });
    }
  }
  const queueCount = blocks.length;

  // Worker nodes.
  for (const y of workerYs) {
    blocks.push({ ...scatter(), to: new THREE.Vector3(WORKER_X, y, 0), toScale: 0.5 });
  }

  const queueRight = new THREE.Vector3(qx0 + (queueCols - 1) * cell + 0.2, 0, 0);
  const leadLeft = LEAD.clone().setX(LEAD.x - LEAD_SIZE / 2);
  const leadRight = LEAD.clone().setX(LEAD.x + LEAD_SIZE / 2);
  const curves: THREE.Curve<THREE.Vector3>[] = [
    new THREE.LineCurve3(queueRight, leadLeft),
    ...workerYs.map(
      (y) =>
        new THREE.CubicBezierCurve3(
          leadRight,
          new THREE.Vector3(LEAD.x + 1.2, 0, 0),
          new THREE.Vector3(WORKER_X - 1.0, y, 0),
          new THREE.Vector3(WORKER_X - 0.25, y, 0),
        ),
    ),
  ];

  return { blocks, queueCount, curves };
}

function Pipeline({ quality, trackRef }: { quality: SceneQuality; trackRef: RefObject<HTMLElement | null> }) {
  const colors = useMemo(
    () => ({
      queue: new THREE.Color(readToken("--color-line-strong", "#4a453d")),
      worker: new THREE.Color(readToken("--color-muted", "#a59e91")),
      lead: new THREE.Color(readToken("--color-surface-2", "#1f1d19")),
      edge: new THREE.Color(readToken("--color-fg", "#ece6da")),
      line: new THREE.Color(readToken("--color-line-strong", "#4a453d")),
      accent: new THREE.Color(readToken("--color-accent", "#ff5b1f")),
    }),
    [],
  );

  const { blocks, queueCount, curves } = useMemo(() => buildLayout(quality), [quality]);
  const pulsesPerCurve = 2;
  const pulseCount = curves.length * pulsesPerCurve;

  const blockMesh = useRef<THREE.InstancedMesh>(null);
  const pulseMesh = useRef<THREE.InstancedMesh>(null);
  const group = useRef<THREE.Group>(null);
  const lead = useRef<THREE.Group>(null);

  // Connections share one material so a single opacity write fades them all.
  const lineMaterial = useMemo(
    () => new THREE.LineBasicMaterial({ color: colors.line, transparent: true, opacity: 0 }),
    [colors],
  );
  const lines = useMemo(
    () => curves.map((curve) => new THREE.Line(new THREE.BufferGeometry().setFromPoints(curve.getPoints(40)), lineMaterial)),
    [curves, lineMaterial],
  );
  const leadEdges = useMemo(() => new THREE.EdgesGeometry(new THREE.BoxGeometry(LEAD_SIZE, LEAD_SIZE, LEAD_SIZE)), []);
  const innerEdges = useMemo(() => new THREE.EdgesGeometry(new THREE.PlaneGeometry(0.55, 0.55)), []);

  useEffect(() => {
    const mesh = blockMesh.current;
    if (!mesh) return;
    blocks.forEach((_, i) => mesh.setColorAt(i, i < queueCount ? colors.queue : colors.worker));
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  }, [blocks, queueCount, colors]);

  useEffect(
    () => () => {
      lines.forEach((l) => l.geometry.dispose());
      lineMaterial.dispose();
      leadEdges.dispose();
      innerEdges.dispose();
    },
    [lines, lineMaterial, leadEdges, innerEdges],
  );

  const pointer = useRef({ x: 0, y: 0 });
  useEffect(() => {
    if (quality !== "full") return;
    const onMove = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [quality]);

  const linesGroup = useRef<THREE.Group>(null);
  const progress = useRef(-1);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;

    // Scroll progress: 0 while the scene's centre is below 55% of the viewport
    // height, 1 once it reaches 30%, so the assembled pipeline is reached while
    // the scene is still fully on screen.
    const el = trackRef.current;
    let target = 0;
    if (el) {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      target = clamp01((vh * 0.55 - (r.top + r.height / 2)) / (vh * 0.25));
    }
    progress.current = progress.current < 0 ? target : progress.current + (target - progress.current) * Math.min(1, delta * 6);
    const p = progress.current;
    const ep = smooth(p);

    const mesh = blockMesh.current;
    if (mesh) {
      for (let i = 0; i < blocks.length; i++) {
        const b = blocks[i];
        const local = smooth(clamp01((p - b.delay) / 0.65));
        const drift = (1 - local) * 0.18 + 0.015;
        dummy.position.lerpVectors(b.from, b.to, local);
        dummy.position.x += Math.sin(t * 0.35 + b.drift) * drift;
        dummy.position.y += Math.cos(t * 0.3 + b.drift * 1.3) * drift;
        fromQ.setFromEuler(b.fromRot);
        dummy.quaternion.slerpQuaternions(fromQ, identityQ, local);
        dummy.rotateY((1 - local) * t * 0.15);
        dummy.scale.setScalar(b.fromScale + (b.toScale - b.fromScale) * local);
        dummy.updateMatrix();
        mesh.setMatrixAt(i, dummy.matrix);
      }
      mesh.instanceMatrix.needsUpdate = true;
    }

    if (lead.current) {
      lead.current.scale.setScalar(0.55 + 0.45 * ep);
      lead.current.rotation.set((1 - ep) * 0.7, (1 - ep) * 0.9 + Math.sin(t * 0.25) * 0.04, (1 - ep) * 0.4);
    }

    // All connection lines share one material; fade it through the group ref.
    const firstLine = linesGroup.current?.children[0] as THREE.Line | undefined;
    if (firstLine) (firstLine.material as THREE.LineBasicMaterial).opacity = ep * 0.9;

    const pm = pulseMesh.current;
    if (pm) {
      const pulseScale = 0.055 * clamp01((ep - 0.6) / 0.4);
      let k = 0;
      for (let ci = 0; ci < curves.length; ci++) {
        for (let j = 0; j < pulsesPerCurve; j++) {
          const u = (t * 0.28 + j / pulsesPerCurve + ci * 0.17) % 1;
          curves[ci].getPoint(u, dummy.position);
          dummy.quaternion.identity();
          dummy.scale.setScalar(pulseScale);
          dummy.updateMatrix();
          pm.setMatrixAt(k++, dummy.matrix);
        }
      }
      pm.instanceMatrix.needsUpdate = true;
    }

    if (group.current) {
      const tx = quality === "full" ? pointer.current.y * 0.08 : 0;
      const ty = quality === "full" ? pointer.current.x * 0.14 : 0;
      const k = Math.min(1, delta * 3);
      group.current.rotation.x += (tx - group.current.rotation.x) * k;
      group.current.rotation.y += (ty - 0.12 - group.current.rotation.y) * k;
    }
  });

  return (
    <group ref={group}>
      <ambientLight intensity={0.55} />
      <directionalLight position={[-3, 4, 5]} intensity={1.6} color={colors.edge} />

      <instancedMesh ref={blockMesh} args={[undefined, undefined, blocks.length]} frustumCulled={false}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial roughness={0.85} metalness={0} />
      </instancedMesh>

      <group ref={lead} position={LEAD}>
        <mesh>
          <boxGeometry args={[LEAD_SIZE, LEAD_SIZE, LEAD_SIZE]} />
          <meshStandardMaterial color={colors.lead} roughness={0.9} />
        </mesh>
        <lineSegments geometry={leadEdges}>
          <lineBasicMaterial color={colors.edge} />
        </lineSegments>
        <lineSegments geometry={innerEdges} position={[0, 0, LEAD_SIZE / 2 + 0.01]}>
          <lineBasicMaterial color={colors.line} />
        </lineSegments>
      </group>

      <group ref={linesGroup}>
        {lines.map((line, i) => (
          <primitive key={i} object={line} />
        ))}
      </group>

      <instancedMesh ref={pulseMesh} args={[undefined, undefined, pulseCount]} frustumCulled={false}>
        <sphereGeometry args={[1, 12, 12]} />
        <meshBasicMaterial color={colors.accent} toneMapped={false} />
      </instancedMesh>
    </group>
  );
}

function FirstFrame({ onReady }: { onReady: () => void }) {
  const done = useRef(false);
  useFrame(() => {
    if (done.current) return;
    done.current = true;
    // One more frame so the first real image is on screen before the poster fades.
    requestAnimationFrame(() => onReady());
  });
  return null;
}

function Loop({ running }: { running: boolean }) {
  const setFrameloop = useThree((s) => s.setFrameloop);
  useEffect(() => setFrameloop(running ? "always" : "never"), [running, setFrameloop]);
  return null;
}

// Register only the three.js classes this scene uses. R3F's <Canvas> registers the
// whole three namespace (extend(THREE)), which defeats tree-shaking and pushes the
// chunk past budget, so the root is created manually with createRoot instead.
extend({
  Group: THREE.Group,
  Mesh: THREE.Mesh,
  InstancedMesh: THREE.InstancedMesh,
  LineSegments: THREE.LineSegments,
  BoxGeometry: THREE.BoxGeometry,
  SphereGeometry: THREE.SphereGeometry,
  MeshStandardMaterial: THREE.MeshStandardMaterial,
  MeshBasicMaterial: THREE.MeshBasicMaterial,
  LineBasicMaterial: THREE.LineBasicMaterial,
  AmbientLight: THREE.AmbientLight,
  DirectionalLight: THREE.DirectionalLight,
});

export default function HeroScene({ quality, running, trackRef, onReady }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rootRef = useRef<ReconcilerRoot<HTMLCanvasElement> | null>(null);
  const sizeRef = useRef<{ width: number; height: number } | null>(null);
  const configuredRef = useRef(false);

  const scene = (
    <>
      <Pipeline quality={quality} trackRef={trackRef} />
      <FirstFrame onReady={onReady} />
      <Loop running={running} />
    </>
  );
  const sceneRef = useRef(scene);
  useEffect(() => {
    sceneRef.current = scene;
  });

  // Create the root once, keep it sized to the canvas, tear it down on unmount.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const root = createRoot(canvas);
    rootRef.current = root;
    let disposed = false;

    const apply = async () => {
      const size = sizeRef.current;
      if (!size || disposed) return;
      await root.configure({
        size: { width: size.width, height: size.height, top: 0, left: 0 },
        dpr: [1, 1.5],
        camera: { position: [0, 0, 10], fov: 35 },
        gl: { antialias: true, alpha: true, powerPreference: "low-power" },
        frameloop: "never",
      });
      if (disposed) return;
      configuredRef.current = true;
      root.render(sceneRef.current);
    };

    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      if (width === 0 || height === 0) return;
      sizeRef.current = { width, height };
      void apply();
    });
    ro.observe(canvas);

    return () => {
      disposed = true;
      ro.disconnect();
      configuredRef.current = false;
      root.unmount();
      rootRef.current = null;
    };
  }, []);

  // Push prop changes (running state) into the existing root.
  useEffect(() => {
    if (rootRef.current && configuredRef.current) rootRef.current.render(scene);
  });

  return <canvas ref={canvasRef} aria-hidden="true" className="block h-full w-full" />;
}
