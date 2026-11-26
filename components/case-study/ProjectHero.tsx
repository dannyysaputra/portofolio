import { Project } from "@/data/projects";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Tag from "@/components/ui/Tag";

export default function ProjectHero({ project }: { project: Project }) {
  const facts = [
    { label: "Context", value: project.context },
    { label: "Role", value: project.role },
    { label: "Year", value: project.year },
    { label: "Team", value: project.teamType },
  ].filter((f): f is { label: string; value: string } => Boolean(f.value));

  return (
    <header className="flex flex-col gap-10 pb-12 pt-10 md:pt-16">
      <Link
        href="/#work"
        className="type-small inline-flex min-h-11 w-fit items-center gap-2 text-muted transition-colors hover:text-fg"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" /> All case studies
      </Link>

      <div className="flex flex-col gap-6">
        <div>
          <Tag>{project.category}</Tag>
        </div>
        <h1 className="type-display measure">{project.title}</h1>
        <p className="type-number text-accent">{project.resultHeadline}</p>
        <p className="measure text-lg text-muted">{project.summary}</p>
      </div>

      {(project.demo || project.repo) && (
        <div className="flex flex-wrap gap-4">
          {project.demo && (
            <Button href={project.demo} variant="secondary" external>
              Live demo <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </Button>
          )}
          {project.repo && (
            <Button href={project.repo} variant="secondary" external>
              View code <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </Button>
          )}
        </div>
      )}

      <dl className="grid grid-cols-2 gap-px bg-line md:grid-cols-4">
        {facts.map((f) => (
          <div
            key={f.label}
            className="flex flex-col gap-1 bg-bg py-5 pl-4 pr-4 odd:pl-0 md:odd:pl-4 md:first:pl-0"
          >
            <dt className="type-label text-subtle">{f.label}</dt>
            <dd className="text-fg">{f.value}</dd>
          </div>
        ))}
      </dl>
    </header>
  );
}
