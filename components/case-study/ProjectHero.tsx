import { Project } from "@/data/projects";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Link from "next/link";

interface ProjectHeroProps {
  project: Project;
}

export default function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <section className="pt-20 md:pt-32 pb-12 flex flex-col gap-8 border-b border-[var(--color-border)]">
      <Link href="/#projects" className="inline-flex items-center gap-2 text-sm text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors">
        <ArrowLeft className="h-4 w-4" /> Back to Projects
      </Link>
      
      <div className="flex flex-col gap-4">
        <h1 className="heading-hero text-[var(--color-foreground)]">{project.title}</h1>
        <p className="subheading max-w-3xl text-[var(--color-muted)]">
          {project.summary}
        </p>
      </div>

      <div className="flex flex-wrap gap-4 mt-4">
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[var(--color-foreground)] text-[var(--color-background)] px-5 py-2.5 rounded-md font-medium text-sm hover:opacity-90 transition-opacity">
            Live Demo <ExternalLink className="h-4 w-4" />
          </a>
        )}
        {project.repo && (
          <a href={project.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-foreground)] px-5 py-2.5 rounded-md font-medium text-sm hover:bg-[var(--color-accent-subtle)] transition-colors">
            View Code <Github className="h-4 w-4" />
          </a>
        )}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8 py-8 border-t border-[var(--color-border)]">
        <div className="flex flex-col gap-1">
          <span className="mono text-xs text-[var(--color-muted)] uppercase">Role</span>
          <span className="font-medium text-[var(--color-foreground)]">{project.role}</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="mono text-xs text-[var(--color-muted)] uppercase">Year</span>
          <span className="font-medium text-[var(--color-foreground)]">{project.year}</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="mono text-xs text-[var(--color-muted)] uppercase">Type</span>
          <span className="font-medium text-[var(--color-foreground)]">{project.type}</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="mono text-xs text-[var(--color-muted)] uppercase">Team</span>
          <span className="font-medium text-[var(--color-foreground)]">{project.teamType}</span>
        </div>
      </div>
    </section>
  );
}
