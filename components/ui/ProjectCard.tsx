import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-t border-[var(--color-border)] py-12">
      <div className="md:col-span-5 flex flex-col gap-4">
        <div className="relative aspect-video mb-4 overflow-hidden rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)]">
          {project.imageUrl ? (
            <Image 
              src={project.imageUrl} 
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="flex items-center justify-center h-full text-[var(--color-muted)] mono text-xs uppercase">
              Visual Case Study
            </div>
          )}
        </div>
        <h3 className="text-2xl font-semibold leading-tight group-hover:text-[var(--color-accent)] transition-colors">
          <Link href={`/projects/${project.slug}`} className="focus:outline-none">
            <span className="absolute inset-0 z-10" aria-hidden="true" />
            {project.title}
          </Link>
        </h3>
        <div className="flex flex-wrap gap-2">
          {project.stack.slice(0, 3).map((tech) => (
            <span key={tech} className="mono text-xs px-2 py-1 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-sm text-[var(--color-muted)]">
              {tech}
            </span>
          ))}
        </div>
        <p className="text-[var(--color-muted)] leading-relaxed mt-2">
          {project.summary}
        </p>
      </div>

      <div className="md:col-span-7 flex flex-col gap-6 md:pl-8 md:pt-4">
        <div className="bg-[var(--color-accent-subtle)] border border-[var(--color-border)] p-6 rounded-lg text-[var(--color-foreground)] flex items-center justify-between">
          <div className="flex flex-col">
            <span className="mono text-xs text-[var(--color-muted)] uppercase tracking-wider mb-1">Key Outcome</span>
            <span className="font-semibold text-lg">{project.outcomeChip}</span>
          </div>
          <ArrowUpRight className="h-6 w-6 text-[var(--color-muted)] group-hover:text-[var(--color-accent)] transition-colors" />
        </div>
        
        <div>
          <span className="mono text-xs text-[var(--color-muted)] uppercase tracking-wider block mb-2">Architecture Hint</span>
          <p className="text-sm leading-relaxed text-[var(--color-foreground)]">
            {project.architectureImplementation.substring(0, 200)}...
          </p>
        </div>
      </div>
    </div>
  );
}
