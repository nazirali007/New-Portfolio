import SkillSection from "@/components/sections/SkillSection";
import Reveal from "@/components/ui/Reveal";

export default function ToolkitSection() {
  return (
    <section id="skills" aria-label="Skills" className="relative">
      <div className="section-container !pt-0">
        <Reveal className="section-heading flex items-end justify-between flex-wrap gap-4">
          <div>
            <p className="eyebrow mb-3">02 — Toolkit</p>
            <h2 className="display-section">
              Tools of the <em>craft.</em>
            </h2>
          </div>
          <p className="text-sm text-[var(--ink-muted)] font-mono max-w-xs hidden md:block">
            A stack refined across 3+ years and dozens of shipped features.
          </p>
        </Reveal>
        <SkillSection />
      </div>
    </section>
  );
}
