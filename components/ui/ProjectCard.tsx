import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const rows = [
    { label: "Problem", text: project.card.problem },
    { label: "Solution", text: project.card.solution },
    { label: "Result", text: project.card.result },
  ];

  return (
    <article className="group relative grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-t border-[var(--color-border)] py-12">
      <div className="md:col-span-5">
        <div className="relative aspect-video overflow-hidden rounded-lg border border-[var(--color-border)]">
          <Image
            src={project.imageUrl}
            alt={project.imageAlt}
            fill
            sizes="(min-width: 768px) 40vw, 100vw"
            unoptimized={project.imageUrl.endsWith(".svg")}
            className="object-cover"
          />
        </div>
      </div>
      <div className="md:col-span-7 flex flex-col gap-4">
        <p className="mono text-xs uppercase text-[var(--color-muted)]">
          {project.category} · {project.context}
        </p>
        <h3 className="text-2xl font-semibold">
          <Link href={`/projects/${project.slug}`}>
            <span className="absolute inset-0" aria-hidden="true" />
            {project.title}
          </Link>
        </h3>
        <p className="text-xl font-semibold text-[var(--color-accent)]">{project.resultHeadline}</p>
        <dl className="flex flex-col gap-3">
          {rows.map((row) => (
            <div key={row.label} className="grid grid-cols-[6rem_1fr] gap-4">
              <dt className="mono text-xs uppercase text-[var(--color-muted)] pt-1">{row.label}</dt>
              <dd>{row.text}</dd>
            </div>
          ))}
        </dl>
        <span className="inline-flex items-center gap-1 text-sm font-medium">
          Read the case study <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </span>
      </div>
    </article>
  );
}
