import { ArrowDown, MessageCircle } from "lucide-react";
import { profile } from "@/data/profile";
import { whatsappHref } from "@/data/contact";
import Button from "@/components/ui/Button";
import HeroVisual from "@/components/hero/HeroVisual";

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="pb-18 pt-12 md:pb-28 md:pt-20">
      <div className="container-page grid items-center gap-12 md:grid-cols-12 md:gap-8">
        <div className="flex flex-col gap-7 md:col-span-7">
          <p className="type-label text-subtle">
            {profile.name} <span aria-hidden="true">/</span> {profile.role}
          </p>
          <h1 id="hero-title" className="type-display">
            {profile.headline}
          </h1>
          <p className="measure text-lg text-muted">{profile.subheadline}</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-4 pt-2">
            <Button href={whatsappHref} external>
              <MessageCircle className="h-4 w-4" aria-hidden="true" /> Chat on WhatsApp
            </Button>
            <Button href="#work" variant="secondary">
              See results <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
          <p className="type-small flex items-center gap-2 text-muted">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-fg" aria-hidden="true" />
            {profile.availability}
          </p>
        </div>
        <div className="md:col-span-5">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
