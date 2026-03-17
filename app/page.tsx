import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import MetricCard from "@/components/ui/MetricCard";
import ProjectCard from "@/components/ui/ProjectCard";
import CapabilityGroup from "@/components/ui/CapabilityGroup";
import TrustItem from "@/components/ui/TrustItem";
import { ArrowRight, FileText, Database, Cpu, Layout, Globe } from "lucide-react";
import Image from "next/image";
import { CopyEmailButton } from "@/components/ui/CopyEmailButton";
import { Reveal } from "@/components/ui/Reveal";

export default function Home() {
  return (
    <div className="flex flex-col gap-12 md:gap-24 pb-20">
      {/* Hero Section */}
      <Reveal width="100%">
        <section className="pt-20 md:pt-32 pb-12 relative">
          <div className="hero-gradient" />
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-8 flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <p className="mono text-[var(--color-accent)] font-medium tracking-wide text-sm uppercase">
                  {profile.displayName} — Software Engineer
                </p>
                <h1 className="heading-hero text-[var(--color-foreground)] max-w-4xl">
                  {profile.headline}
                </h1>
              </div>
              
              <p className="subheading max-w-2xl">
                {profile.subheadline}
              </p>

              <div className="flex flex-wrap items-center gap-4 mt-4">
                <a 
                  href="#projects" 
                  className="inline-flex items-center gap-2 bg-[var(--color-foreground)] text-[var(--color-background)] px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity"
                >
                  View Case Studies <ArrowRight className="h-4 w-4" />
                </a>
                <a 
                  href={profile.cvLink} 
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-foreground)] px-6 py-3 rounded-md font-medium hover:bg-[var(--color-accent-subtle)] transition-colors"
                >
                  Download CV <FileText className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="md:col-span-4 flex justify-center md:justify-end">
              <div className="relative w-64 h-64 md:w-80 md:h-80 grayscale hover:grayscale-0 transition-all duration-700">
                <div className="absolute inset-0 border-2 border-[var(--color-accent)] translate-x-4 translate-y-4 rounded-2xl z-0"></div>
                <div className="relative w-full h-full rounded-2xl overflow-hidden border border-[var(--color-border)] z-10 bg-[var(--color-surface)]">
                  {profile.profileImageUrl && (
                    <Image 
                      src={profile.profileImageUrl}
                      alt={profile.name}
                      fill
                      className="object-cover"
                      priority
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Proof Strip */}
      <Reveal width="100%">
        <section className="py-8 border-y border-[var(--color-border)] bg-[var(--color-surface)]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <MetricCard label="Relevance Scoring" value="90%" />
            <MetricCard label="Manual Work Reduction" value="80%" />
            <MetricCard label="Data Accuracy" value="~100%" />
            <MetricCard label="Global Recognition" value="Top 100" />
          </div>
        </section>
      </Reveal>

      {/* Selected Case Studies */}
      <section id="projects" className="flex flex-col gap-12">
        <Reveal width="100%">
          <div className="flex flex-col gap-2">
            <h2 className="heading-section">Selected Projects</h2>
            <p className="subheading max-w-2xl">
              Real systems built to solve actual problems, balancing speed, scale, and technical depth.
            </p>
          </div>
        </Reveal>
        
        <div className="flex flex-col">
          {projects.map((project) => (
            <Reveal key={project.slug} width="100%">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Production Experience Highlights */}
      <Reveal width="100%">
        <section id="experience" className="flex flex-col gap-12 glass p-8 md:p-12 rounded-2xl">
          <h2 className="text-2xl font-semibold text-[var(--color-foreground)]">Production Experience</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {profile.experienceHighlights.map((exp, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                <span className="mono text-xs text-[var(--color-muted)]">{exp.date}</span>
                <h3 className="font-semibold text-lg text-[var(--color-foreground)]">{exp.title}</h3>
                <span className="text-sm font-medium text-[var(--color-accent)]">{exp.company}</span>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-2">
                  {exp.notes}
                </p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* About & Strengths */}
      <Reveal width="100%">
        <section className="grid md:grid-cols-2 gap-16 items-start">
          <div className="flex flex-col gap-6">
            <h2 className="heading-section mb-0">Technical Strengths</h2>
            <p className="text-[var(--color-muted)] leading-relaxed">
              I specialize in architecting the foundational layers of applications. My approach focuses on deterministic workflows, clean API boundaries, and pragmatic AI integration that solves problems without adding unnecessary complexity.
            </p>
            <div className="grid grid-cols-2 gap-8 mt-4">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2 text-[var(--color-accent)] mb-1">
                  <Database className="h-5 w-5" />
                  <h4 className="font-semibold text-[var(--color-foreground)]">Backend Systems</h4>
                </div>
                <CapabilityGroup title="" items={profile.technicalStrengths.backend} />
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2 text-[var(--color-accent)] mb-1">
                  <Cpu className="h-5 w-5" />
                  <h4 className="font-semibold text-[var(--color-foreground)]">Applied AI</h4>
                </div>
                <CapabilityGroup title="" items={profile.technicalStrengths.appliedAI} />
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2 text-[var(--color-accent)] mb-1">
                  <Layout className="h-5 w-5" />
                  <h4 className="font-semibold text-[var(--color-foreground)]">Frontend Delivery</h4>
                </div>
                <CapabilityGroup title="" items={profile.technicalStrengths.frontend} />
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2 text-[var(--color-accent)] mb-1">
                  <Globe className="h-5 w-5" />
                  <h4 className="font-semibold text-[var(--color-foreground)]">Deployment & Ops</h4>
                </div>
                <CapabilityGroup title="" items={profile.technicalStrengths.deploymentOps} />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="heading-section mb-0">Credibility</h2>
            <div className="flex flex-col gap-4 glass rounded-xl p-6 md:p-8">
              {profile.trustSignals.map((signal, idx) => (
                <TrustItem key={idx} text={signal} />
              ))}
            </div>
          </div>

        </section>
      </Reveal>

      {/* Contact CTA */}
      <Reveal width="100%">
        <section id="contact" className="flex flex-col items-center text-center gap-6 py-12 md:py-24 bg-[var(--color-accent-subtle)] rounded-3xl border border-[var(--color-border)]">
          <h2 className="heading-section mb-0 max-w-2xl">{profile.contactCtaLine}</h2>
          <p className="text-[var(--color-muted)] max-w-md">
            Currently open to roles focusing on {profile.openToRoles}. If you are building something ambitious, let's talk.
          </p>
          <div className="flex gap-4 mt-4">
            <CopyEmailButton email={profile.email} />
          </div>
        </section>
      </Reveal>
    </div>
  );
}
