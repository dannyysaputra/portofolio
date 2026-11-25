import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";

export default function CaseStudies() {
  return (
    <section id="work" className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <h2 className="heading-section mb-0">Results for real teams</h2>
        <p className="subheading max-w-2xl">Each project: the problem, what I built, and what changed.</p>
      </div>
      <div className="flex flex-col">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
