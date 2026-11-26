import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import Section from "@/components/ui/Section";
import Tilt from "@/components/ui/Tilt";

export default function CaseStudies() {
  return (
    <Section
      id="work"
      index="02"
      eyebrow="Case studies"
      title="Results, not just code"
      intro="Each project in three parts: the problem, what I built, and what changed. The technical details are there if you want them."
    >
      <ul className="flex flex-col gap-6">
        {projects.map((project) => (
          <li key={project.slug}>
            <Tilt>
              <ProjectCard project={project} />
            </Tilt>
          </li>
        ))}
      </ul>
    </Section>
  );
}
