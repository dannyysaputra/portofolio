import { Project } from "@/data/projects";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Link from "next/link";

interface ProjectHeroProps {
  project: Project;
}

export default function ProjectHero({ project }: ProjectHeroProps) {
  const facts = [
    { label: "Client", value: project.context },
    { label: "Role", value: project.role },
    { label: "Year", value: project.year },
    { label: "Team", value: project.teamType },
  ].filter((f): f is { label: string; value: string } => Boolean(f.value));

  return (
    <section className="pt-20 md:pt-28 pb-12 flex flex-col gap-8 border-b border-[var(--color-border)]">
      <Link href="/#work" className="inline-flex items-center gap-2 text-sm text-[var(--color-muted)]">
        <ArrowLeft className="h-4 w-4" aria-hidden="true" /> All case studies
      </Link>

      <div className="flex flex-col gap-4">
        <p className="mono text-xs uppercase text-[var(--color-muted)]">{project.category}</p>
        <h1 className="heading-hero">{project.title}</h1>
        <p className="text-2xl font-semibold text-[var(--color-accent)]">{project.resultHeadline}</p>
        <p className="subheading max-w-3xl">{project.summary}</p>
      </div>

      {(project.demo || project.repo) && (
        <div className="flex flex-wrap gap-4">
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-[var(--color-border)] px-5 py-2.5 rounded-md text-sm">
              Live demo <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          )}
          {project.repo && (
            <a href={project.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-[var(--color-border)] px-5 py-2.5 rounded-md text-sm">
              View code <Github className="h-4 w-4" aria-hidden="true" />
            </a>
          )}
        </div>
      )}

      <dl className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-[var(--color-border)]">
        {facts.map((f) => (
          <div key={f.label} className="flex flex-col gap-1">
            <dt className="mono text-xs uppercase text-[var(--color-muted)]">{f.label}</dt>
            <dd className="font-medium">{f.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
