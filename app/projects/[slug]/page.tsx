import { projects } from "@/data/projects";
import ProjectHero from "@/components/case-study/ProjectHero";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { MessageCircle, Plus } from "lucide-react";
import { whatsappHref } from "@/data/contact";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Tag from "@/components/ui/Tag";

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
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: { title, description: project.summary, type: "article", url: `/projects/${project.slug}` },
  };
}

function Block({ id, label, title, children }: { id: string; label: string; title: string; children: React.ReactNode }) {
  return (
    <section aria-labelledby={id} className="grid gap-4 border-t border-line py-12 md:grid-cols-12 md:gap-8">
      <p className="type-label text-subtle md:col-span-3 md:pt-2">{label}</p>
      <div className="flex flex-col gap-4 md:col-span-9">
        <h2 id={id} className="type-title">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}

function TechList({ title, items }: { title: string; items?: string[] }) {
  if (!items || items.length === 0) return null;
  return (
    <div className="flex flex-col gap-3">
      <h3 className="type-label text-subtle">{title}</h3>
      <ul className="flex flex-col gap-2">
        {items.map((item) => (
          <li key={item} className="type-small border-l border-line-strong pl-3 text-muted">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const t = project.technical;

  return (
    <article className="container-page pb-24">
      <ProjectHero project={project} />

      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[var(--radius-card)] border border-line bg-bg">
        <Image
          src={project.imageUrl}
          alt={project.imageAlt}
          fill
          sizes="(min-width: 1152px) 1088px, 100vw"
          unoptimized={project.imageUrl.endsWith(".svg")}
          className={project.imageIsPlaceholder ? "object-cover" : "object-contain bg-white"}
          priority
        />
      </div>

      <div className="mt-16">
        <Block id="problem" label="01 / Problem" title="The problem">
          <p className="measure text-muted">{project.problem}</p>
        </Block>

        <Block id="solution" label="02 / Solution" title="What I built">
          <p className="measure text-muted">{project.solution}</p>
        </Block>

        <Block id="result" label="03 / Result" title="The result">
          <ul className="measure flex flex-col gap-3">
            {project.results.map((r) => (
              <li key={r} className="border-l-2 border-line-strong pl-4 text-fg">
                {r}
              </li>
            ))}
          </ul>
        </Block>

        <div className="grid border-t border-line py-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-9 md:col-start-4">
            <Card as="details" className="group">
              <summary className="flex min-h-11 cursor-pointer items-center justify-between gap-6 text-lg">
                Technical details
                <Plus
                  className="h-5 w-5 shrink-0 text-subtle transition-transform duration-200 group-open:rotate-45"
                  aria-hidden="true"
                />
              </summary>
              <div className="mt-8 flex flex-col gap-8">
                <div className="flex flex-col gap-3">
                  <h3 className="type-label text-subtle">Stack</h3>
                  <ul className="flex flex-wrap gap-2">
                    {t.stack.map((s) => (
                      <li key={s}>
                        <Tag>{s}</Tag>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="type-label text-subtle">How it&apos;s built</h3>
                  <p className="measure type-small text-muted">{t.howItsBuilt}</p>
                </div>
                <TechList title="Key decisions" items={t.decisions} />
                <TechList title="Trade-offs" items={t.tradeOffs} />
                {t.lessons && (
                  <div className="flex flex-col gap-3">
                    <h3 className="type-label text-subtle">Lesson learned</h3>
                    <p className="measure type-small text-muted">{t.lessons}</p>
                  </div>
                )}
                <TechList title="What I'd do next" items={t.nextSteps} />
              </div>
            </Card>
          </div>
        </div>

        <section aria-labelledby="cta" className="grid gap-6 border-t border-line pt-12 md:grid-cols-12 md:gap-8">
          <p className="type-label text-subtle md:col-span-3 md:pt-2">Next step</p>
          <div className="flex flex-col gap-6 md:col-span-9">
            <h2 id="cta" className="type-title">
              Need something like this?
            </h2>
            <div>
              <Button href={whatsappHref} external>
                <MessageCircle className="h-4 w-4" aria-hidden="true" /> Chat on WhatsApp
              </Button>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}
