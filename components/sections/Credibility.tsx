import Image from "next/image";
import { awards, certifications, experience, profile } from "@/data/profile";
import Testimonials from "./Testimonials";

export default function Credibility() {
  return (
    <section id="about" className="flex flex-col gap-12">
      <h2 className="heading-section mb-0">Who you&apos;ll be working with</h2>
      <div className="grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4 flex flex-col gap-4">
          <div className="relative aspect-square w-full max-w-xs overflow-hidden rounded-xl border border-[var(--color-border)]">
            <Image src={profile.profileImageUrl} alt={`Portrait of ${profile.name}`} fill sizes="(min-width: 768px) 320px, 100vw" className="object-cover" />
          </div>
          <p className="text-sm text-[var(--color-muted)]">
            {profile.name}, based in {profile.location}. {profile.education.degree}, {profile.education.school} ({profile.education.note}).
          </p>
        </div>
        <div className="md:col-span-8 grid sm:grid-cols-2 gap-10">
          <div className="flex flex-col gap-4">
            <h3 className="mono text-xs uppercase text-[var(--color-muted)]">Awards & certification</h3>
            <ul className="flex flex-col gap-4">
              {[...awards, ...certifications].map((a) => (
                <li key={a.title}>
                  <p className="font-medium">{a.title}</p>
                  <p className="text-sm text-[var(--color-muted)]">
                    {a.issuer} · {a.date}
                    {a.detail ? ` · ${a.detail}` : ""}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="mono text-xs uppercase text-[var(--color-muted)]">Experience</h3>
            <ul className="flex flex-col gap-4">
              {experience.map((e) => (
                <li key={`${e.company}-${e.title}`}>
                  <p className="font-medium">
                    {e.title}, {e.company}
                  </p>
                  <p className="mono text-xs text-[var(--color-muted)]">{e.date}</p>
                  <p className="text-sm text-[var(--color-muted)]">{e.notes}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Testimonials />
    </section>
  );
}
