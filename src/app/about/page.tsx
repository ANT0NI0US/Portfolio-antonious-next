import type { Crumb } from "@/components/common/Breadcrumbs";
import CTA from "@/components/common/CTA";
import PageHero from "@/components/common/PageHero";
import { buildMetadata } from "@/components/common/Seo";
import Highlights from "@/components/pages/about/Highlights";
import IntroTerminal from "@/components/pages/about/IntroTerminal";
import JourneyPitch from "@/components/pages/about/JourneyPitch";
import WhyMe from "@/components/pages/about/WhyMe";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  title: "Antonious Nasr | About",
  description:
    "Frontend Developer based in Alexandria, Egypt — why clients and teams pick me, and the path that led here.",
  path: "/about",
  keywords: [
    "Antonious Nasr",
    "Frontend Developer About",
    "React Developer",
    "Next.js Developer",
    "Frontend Developer Egypt",
  ],
});

const CRUMBS: Crumb[] = [{ label: "Home", path: "/" }, { label: "About" }];

export default function About() {
  return (
    <section className="min-h-screen">
      <PageHero
        eyebrow="about"
        title="Why I'm Worth The Hire"
        description="The story, the numbers, and the honest pitch for why you're here."
        crumbs={CRUMBS}
      />

      <IntroTerminal />
      <Highlights />
      <WhyMe />
      <JourneyPitch />

      <CTA />
    </section>
  );
}
