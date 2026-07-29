import SteperVertical from "@/components/sections/SteperVertical";
import Reveal from "@/components/ui/Reveal";

export default function ExperienceSection() {
  return (
    <section id="experience" aria-label="Experience" className="relative">
      <div className="section-container !pt-0">
        <Reveal className="section-heading flex items-end justify-between flex-wrap gap-4">
          <div>
            <p className="eyebrow mb-3">01 — Experience</p>
            <h2 className="display-section">
              Where I&apos;ve <em>worked.</em>
            </h2>
          </div>
          <p className="text-sm text-[var(--ink-muted)] font-mono max-w-xs hidden md:block">
            Three years across travel, marketplace and real-estate products.
          </p>
        </Reveal>
        <SteperVertical />
      </div>
    </section>
  );
}
