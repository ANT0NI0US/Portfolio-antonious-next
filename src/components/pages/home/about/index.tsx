import TextHead from "@/components/ui/TextHead";
import Identity from "./Identity";
import StatsPanel from "./StatsPanel";

export default function About() {
  return (
    <section id="about" className="container py-5 sm:py-10">
      <TextHead text="About us" title="Who Am I ?" />

      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        {/* LEFT — IDENTITY */}
        <Identity />
        {/* RIGHT — SIGNATURE STATS PANEL */}
        <StatsPanel />
      </div>
    </section>
  );
}
