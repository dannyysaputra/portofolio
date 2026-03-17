import { profile } from "@/data/profile";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-12 mt-20">
      <div className="mx-auto max-w-5xl px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="font-semibold text-[var(--color-foreground)]">{profile.name}</span>
          <span className="text-sm text-[var(--color-muted)]">{profile.openToRoles}</span>
        </div>
        <div className="flex gap-6">
          <a href={`mailto:${profile.email}`} className="text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors">
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-[var(--color-muted)] hover:text-[#0a66c2] transition-colors">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
