import { profile } from "@/data/profile";

const links = [
  { href: `mailto:${profile.email}`, label: "Email", external: false },
  { href: profile.linkedin, label: "LinkedIn", external: true },
  { href: profile.github, label: "GitHub", external: true },
];

export default function Footer() {
  return (
    <footer className="border-t border-line py-12">
      <div className="container-page flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="flex flex-col gap-2">
          <p className="font-serif text-2xl leading-none">{profile.name}</p>
          <p className="type-small text-muted">
            {profile.availability}. Based in {profile.location}.
          </p>
        </div>
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 type-small">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="inline-flex min-h-11 items-center text-muted transition-colors hover:text-fg"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={profile.cvLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center text-subtle underline decoration-line-strong underline-offset-4 transition-colors hover:text-fg"
            >
              Download CV (PDF)
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
