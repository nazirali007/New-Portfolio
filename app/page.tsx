import TopNavbar from "@/components/layout/TopNavbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import MarqueeSection from "@/components/sections/MarqueeSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ToolkitSection from "@/components/sections/ToolkitSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <TopNavbar />

      <main id="main" className="relative">
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <ExperienceSection />
        <ToolkitSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
