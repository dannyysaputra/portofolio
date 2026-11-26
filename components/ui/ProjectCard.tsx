import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/data/projects";
import Tag from "./Tag";

export default function ProjectCard({ project }: { project: Project }) {
  const rows = [
    { label: "Problem", text: project.card.problem },
    { label: "Solution", text: project.card.solution },
    { label: "Result", text: project.card.result },
  ];

  return (
    <article className="group relative grid gap-8 rounded-[var(--radius-card)] border border-line bg-surface p-5 transition-colors duration-200 hover:border-line-strong md:p-8 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <div className="relative aspect-[16/10] overflow-hidden rounded-[var(--radius-control)] border border-line bg-bg">
          <Image
            src={project.imageUrl}
            alt={project.imageAlt}
            fill
            sizes="(min-width: 1024px) 420px, 100vw"
            unoptimized={project.imageUrl.endsWith(".svg")}
            className={project.imageIsPlaceholder ? "object-cover" : "object-contain bg-white"}
          />
        </div>
      </div>
      <div className="flex flex-col gap-5 lg:col-span-7">
        <div className="flex flex-wrap items-center gap-2">
          <Tag>{project.category}</Tag>
          <span className="type-small text-subtle">{project.context}</span>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="type-heading">
            <Link href={`/projects/${project.slug}`} className="after:absolute after:inset-0 after:content-['']">
              {project.title}
            </Link>
          </h3>
          <p className="font-mono text-lg text-accent">{project.resultHeadline}</p>
        </div>
        <dl className="flex flex-col gap-3">
          {rows.map((row) => (
            <div key={row.label} className="grid gap-1 sm:grid-cols-[5.5rem_1fr] sm:gap-4">
              <dt className="type-label pt-1 text-subtle">{row.label}</dt>
              <dd className={row.label === "Result" ? "text-fg" : "text-muted"}>{row.text}</dd>
            </div>
          ))}
        </dl>
        <p className="type-small mt-auto inline-flex items-center gap-1 text-fg" aria-hidden="true">
          Read the case study
          <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </p>
      </div>
    </article>
  );
}
