import Hero from "@/components/sections/Hero";
import ProofBar from "@/components/sections/ProofBar";
import Services from "@/components/sections/Services";
import CaseStudies from "@/components/sections/CaseStudies";
import HowIWork from "@/components/sections/HowIWork";
import Credibility from "@/components/sections/Credibility";
import Faq from "@/components/sections/Faq";
import FinalCta from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <ProofBar />
      <Services />
      <CaseStudies />
      <HowIWork />
      <Credibility />
      <Faq />
      <FinalCta />
    </>
  );
}
