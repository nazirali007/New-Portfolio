import CardSection from "@/components/sections/CardSection";
import Reveal from "@/components/ui/Reveal";

export default function ProjectsSection() {
  return (
    <section id="projects" aria-label="Selected projects" className="relative">
      <div className="section-container !pt-0">
        <Reveal className="section-heading flex items-end justify-between flex-wrap gap-4">
          <div>
            <p className="eyebrow mb-3">03 — Selected Work</p>
            <h2 className="display-section">
              Recent <em>projects.</em>
            </h2>
          </div>
          <p className="text-sm text-[var(--ink-muted)] font-mono max-w-xs hidden md:block">
            Client work plus my own products — personal builds open live.
          </p>
        </Reveal>
        <CardSection />
      </div>
    </section>
  );
}
