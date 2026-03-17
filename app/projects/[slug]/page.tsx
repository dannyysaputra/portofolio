import { projects } from "@/data/projects";
import ProjectHero from "@/components/case-study/ProjectHero";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { CheckCircle2, ChevronRight } from "lucide-react";
import Image from "next/image";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);
  
  if (!project) {
    return { title: "Project Not Found" };
  }
  
  return {
    title: `${project.title} — Case Study`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="flex flex-col gap-16 pb-24">
      <ScrollProgress />
      <ProjectHero project={project} />

      <div className="grid md:grid-cols-12 gap-12">
        <div className="md:col-span-8 flex flex-col gap-16">
          
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]">
            {project.imageUrl ? (
              <Image 
                src={project.imageUrl} 
                alt={project.title}
                fill
                className="object-cover"
              />
            ) : (
              <div className="flex items-center justify-center h-full text-[var(--color-muted)] mono text-sm uppercase">
                System Visualization
              </div>
            )}
          </div>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold text-[var(--color-foreground)] border-b border-[var(--color-border)] pb-4">The Problem</h2>
            <p className="text-[var(--color-muted)] leading-relaxed">{project.problem}</p>
            <div className="mt-4 bg-[var(--color-accent-subtle)] p-6 rounded-lg border border-[var(--color-border)]">
              <h3 className="font-medium text-[var(--color-foreground)] mb-2 flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-[var(--color-accent)]" /> Why It Mattered
              </h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">{project.whyItMattered}</p>
            </div>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold text-[var(--color-foreground)] border-b border-[var(--color-border)] pb-4">Solution Overview</h2>
            <p className="text-[var(--color-muted)] leading-relaxed">{project.solution}</p>
          </section>

          <section className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-[var(--color-foreground)] border-b border-[var(--color-border)] pb-4">Architecture & Implementation</h2>
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <p className="text-[var(--color-muted)] leading-relaxed">{project.architectureImplementation}</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mt-6">
              <div className="flex flex-col gap-4">
                <h3 className="text-lg font-medium text-[var(--color-foreground)]">Technical Decisions</h3>
                <ul className="flex flex-col gap-3">
                  {project.technicalDecisions.map((decision, idx) => (
                    <li key={idx} className="text-sm text-[var(--color-muted)] flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full shrink-0 mt-1.5"></span>
                      <span>{decision}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-lg font-medium text-[var(--color-foreground)]">Trade-offs</h3>
                <ul className="flex flex-col gap-3">
                  {project.tradeOffs.map((tradeoff, idx) => (
                    <li key={idx} className="text-sm text-[var(--color-muted)] flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[var(--color-border)] rounded-full shrink-0 mt-1.5"></span>
                      <span>{tradeoff}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold text-[var(--color-foreground)] border-b border-[var(--color-border)] pb-4">Impact & Outcomes</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {project.impactOutcomes.map((outcome, idx) => (
                <div key={idx} className="bg-[var(--color-surface)] border border-[var(--color-border)] p-5 rounded-lg flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[var(--color-accent)] shrink-0" />
                  <span className="text-sm text-[var(--color-foreground)] leading-relaxed">{outcome}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="flex flex-col gap-6">
            <div className="bg-[var(--color-surface)] border border-[var(--color-border)] p-8 rounded-xl flex flex-col gap-4">
              <h2 className="text-xl font-semibold text-[var(--color-foreground)]">Lessons Learned</h2>
              <p className="text-[var(--color-muted)] leading-relaxed italic border-l-4 border-[var(--color-accent)] pl-4">
                "{project.lessonsLearned}"
              </p>
            </div>
          </section>

        </div>

        <aside className="md:col-span-4 flex flex-col gap-8">
          <div className="sticky top-24 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="mono text-xs text-[var(--color-muted)] uppercase tracking-wider">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-foreground)] text-xs px-3 py-1.5 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="mono text-xs text-[var(--color-muted)] uppercase tracking-wider">Context & Constraints</h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                {project.constraints}
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="mono text-xs text-[var(--color-muted)] uppercase tracking-wider">My Role</h3>
              <p className="text-sm text-[var(--color-foreground)] leading-relaxed bg-[var(--color-accent-subtle)] p-4 rounded-md border border-[var(--color-border)]">
                {project.myRole}
              </p>
            </div>

            <div className="flex flex-col gap-4 border-t border-[var(--color-border)] pt-8">
              <h3 className="mono text-xs text-[var(--color-muted)] uppercase tracking-wider">Future Improvements</h3>
              <ul className="flex flex-col gap-3">
                {project.futureImprovements.map((improvement, idx) => (
                  <li key={idx} className="text-sm text-[var(--color-muted)] flex items-start gap-2">
                    <span className="text-[var(--color-accent)] mt-0.5">›</span>
                    <span>{improvement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
}
