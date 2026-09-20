import { Hero } from "@/components/sections/hero";
import { ClientsMarquee } from "@/components/sections/clients-marquee";
import { AboutIntro } from "@/components/sections/about-intro";
import { ServicesGrid } from "@/components/sections/services-grid";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { ProjectMapSection } from "@/components/sections/project-map-section";
import { Testimonials } from "@/components/sections/testimonials";
import { ContactSection } from "@/components/sections/contact-section";
import { CtaBand } from "@/components/sections/cta-band";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClientsMarquee />
      <AboutIntro />
      <ServicesGrid />
      <FeaturedProjects />
      <ProcessTimeline />
      <ProjectMapSection />
      <Testimonials />
      <CtaBand />
      <ContactSection />
    </>
  );
}
