import { projects } from "@/data/projects";
import ProjectHero from "@/components/case-study/ProjectHero";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { whatsappHref } from "@/data/contact";

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Case study not found" };

  const title = `${project.title}: ${project.resultHeadline}`;
  return {
    title,
    description: project.summary,
    openGraph: { title, description: project.summary, type: "article" },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const t = project.technical;

  return (
    <article className="flex flex-col gap-16 pb-24">
      <ProjectHero project={project} />

      <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-[var(--color-border)]">
        <Image
          src={project.imageUrl}
          alt={project.imageAlt}
          fill
          sizes="(min-width: 1024px) 1024px, 100vw"
          unoptimized={project.imageUrl.endsWith(".svg")}
          className="object-cover"
          priority
        />
      </div>

      <section aria-labelledby="problem" className="flex flex-col gap-4 max-w-3xl">
        <h2 id="problem" className="text-2xl font-semibold">The problem</h2>
        <p className="text-[var(--color-muted)] leading-relaxed">{project.problem}</p>
      </section>

      <section aria-labelledby="solution" className="flex flex-col gap-4 max-w-3xl">
        <h2 id="solution" className="text-2xl font-semibold">What I built</h2>
        <p className="text-[var(--color-muted)] leading-relaxed">{project.solution}</p>
      </section>

      <section aria-labelledby="result" className="flex flex-col gap-4 max-w-3xl">
        <h2 id="result" className="text-2xl font-semibold">The result</h2>
        <ul className="flex flex-col gap-3">
          {project.results.map((r) => (
            <li key={r} className="border-l-2 border-[var(--color-accent)] pl-4">{r}</li>
          ))}
        </ul>
      </section>

      <details className="max-w-3xl border border-[var(--color-border)] rounded-xl p-6">
        <summary className="cursor-pointer font-medium">Technical details</summary>
        <div className="mt-6 flex flex-col gap-6 text-sm">
          <div>
            <h3 className="mono text-xs uppercase text-[var(--color-muted)] mb-2">Stack</h3>
            <p>{t.stack.join(" · ")}</p>
          </div>
          <div>
            <h3 className="mono text-xs uppercase text-[var(--color-muted)] mb-2">How it&apos;s built</h3>
            <p className="leading-relaxed">{t.howItsBuilt}</p>
          </div>
          {t.decisions && t.decisions.length > 0 && (
            <div>
              <h3 className="mono text-xs uppercase text-[var(--color-muted)] mb-2">Key decisions</h3>
              <ul className="list-disc pl-5 flex flex-col gap-1">
                {t.decisions.map((d) => <li key={d}>{d}</li>)}
              </ul>
            </div>
          )}
          {t.tradeOffs && t.tradeOffs.length > 0 && (
            <div>
              <h3 className="mono text-xs uppercase text-[var(--color-muted)] mb-2">Trade-offs</h3>
              <ul className="list-disc pl-5 flex flex-col gap-1">
                {t.tradeOffs.map((d) => <li key={d}>{d}</li>)}
              </ul>
            </div>
          )}
          {t.lessons && (
            <div>
              <h3 className="mono text-xs uppercase text-[var(--color-muted)] mb-2">Lesson learned</h3>
              <p className="leading-relaxed">{t.lessons}</p>
            </div>
          )}
          {t.nextSteps && t.nextSteps.length > 0 && (
            <div>
              <h3 className="mono text-xs uppercase text-[var(--color-muted)] mb-2">What I&apos;d do next</h3>
              <ul className="list-disc pl-5 flex flex-col gap-1">
                {t.nextSteps.map((d) => <li key={d}>{d}</li>)}
              </ul>
            </div>
          )}
        </div>
      </details>

      <section aria-labelledby="cta" className="flex flex-col gap-4 border-t border-[var(--color-border)] pt-12">
        <h2 id="cta" className="text-2xl font-semibold">Need something like this?</h2>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-fit items-center gap-2 bg-[var(--color-accent)] text-white px-6 py-3 rounded-md font-medium"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" /> Chat on WhatsApp
        </a>
      </section>
    </article>
  );
}
