import { profile } from "@/data/profile";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-12 mt-20">
      <div className="mx-auto max-w-5xl px-6 flex flex-col md:flex-row justify-between md:items-center gap-6">
        <div className="flex flex-col gap-1">
          <span className="font-semibold">{profile.name}</span>
          <span className="text-sm text-[var(--color-muted)]">{profile.availability}</span>
          <a href={profile.cvLink} target="_blank" rel="noreferrer" className="text-sm text-[var(--color-muted)] underline underline-offset-4 w-fit">
            Download CV (PDF)
          </a>
        </div>
        <div className="flex gap-6">
          <a href={`mailto:${profile.email}`} className="text-[var(--color-muted)]">
            <Mail className="h-5 w-5" aria-hidden="true" />
            <span className="sr-only">Email</span>
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="text-[var(--color-muted)]">
            <Github className="h-5 w-5" aria-hidden="true" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-[var(--color-muted)]">
            <Linkedin className="h-5 w-5" aria-hidden="true" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
