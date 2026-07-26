import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { AboutPreviewSection } from "@/components/sections/about-preview-section";
import { ContactCtaSection } from "@/components/sections/contact-cta-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { GrowthPhilosophySection } from "@/components/sections/growth-philosophy-section";
import { IntroSection } from "@/components/sections/intro-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <SiteHeader />
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10 lg:px-8">
        <IntroSection />
        <GrowthPhilosophySection />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <AboutPreviewSection />
        <ContactCtaSection />
      </div>
      <SiteFooter />
    </main>
  );
}
