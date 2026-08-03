import { Hero } from "@/components/sections/hero";
import { ClientsMarquee } from "@/components/sections/clients-marquee";
import { AboutIntro } from "@/components/sections/about-intro";
import { ServicesGrid } from "@/components/sections/services-grid";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { ProjectMapSection } from "@/components/sections/project-map-section";
import { SafetyQuality } from "@/components/sections/safety-quality";
import { EquipmentSlider } from "@/components/sections/equipment-slider";
import { Testimonials } from "@/components/sections/testimonials";
import { NewsPreview } from "@/components/sections/news-preview";
import { CareersPreview } from "@/components/sections/careers-preview";
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
      <SafetyQuality />
      <EquipmentSlider />
      <Testimonials />
      <NewsPreview />
      <CareersPreview />
      <CtaBand />
      <ContactSection />
    </>
  );
}
