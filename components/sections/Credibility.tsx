import Image from "next/image";
import { awards, certifications, experience, profile } from "@/data/profile";
import Section from "@/components/ui/Section";
import Testimonials from "./Testimonials";

export default function Credibility() {
  return (
    <Section
      id="about"
      index="04"
      eyebrow="About"
      title="Who you'll be working with"
      intro={`I'm ${profile.name}, an AI automation and backend engineer based in ${profile.location}. I currently build product and automation at Solve Education! and backend systems at Studyo.io.`}
    >
      <div className="grid gap-12 md:grid-cols-12 md:gap-8">
        <figure className="flex flex-col gap-4 md:col-span-4">
          <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[var(--radius-card)] border border-line">
            <Image
              src={profile.profileImageUrl}
              alt={`Portrait of ${profile.name}`}
              fill
              sizes="(min-width: 768px) 30vw, 100vw"
              className="object-cover grayscale"
            />
          </div>
          <figcaption className="type-small text-muted">
            {profile.education.degree}, {profile.education.school}. {profile.education.note}.
          </figcaption>
        </figure>

        <div className="grid gap-12 sm:grid-cols-2 md:col-span-8 md:gap-8">
          <div className="flex flex-col gap-6">
            <h3 className="type-label text-subtle">Awards &amp; certification</h3>
            <ul className="flex flex-col">
              {[...awards, ...certifications].map((a) => (
                <li key={a.title} className="flex flex-col gap-1 border-t border-line py-4">
                  <p className="text-fg">{a.title}</p>
                  <p className="type-small text-muted">
                    {a.issuer}, {a.date}
                    {a.detail ? `. ${a.detail}` : ""}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="type-label text-subtle">Experience</h3>
            <ul className="flex flex-col">
              {experience.map((e) => (
                <li key={`${e.company}-${e.title}`} className="flex flex-col gap-1 border-t border-line py-4">
                  <p className="text-fg">
                    {e.title}, {e.company}
                  </p>
                  <p className="font-mono text-xs text-subtle">{e.date}</p>
                  <p className="type-small text-muted">{e.notes}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Testimonials />
    </Section>
  );
}
