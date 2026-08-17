import CTA from "@/components/common/CTA";
import PageHero from "@/components/common/PageHero";
import { buildMetadata } from "@/components/common/Seo";
import ProjectsGrid from "@/components/pages/projects/ProjectsGrid";
import TextHead from "@/components/ui/TextHead";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  title: "Antonious Nasr | Projects",
  description:
    "A catalog of shipped projects — client work at Smart Gate and Création, alongside personal builds — spanning React, Next.js, and vanilla JavaScript.",
  path: "/projects",
  keywords: [
    "Portfolio Projects",
    "React Projects",
    "Next.js Projects",
    "Web Development Portfolio",
    "Frontend Developer Projects",
    "Antonious Nasr",
  ],
});

const CRUMBS = [{ label: "Home", path: "/" }, { label: "Projects" }];

export default function Projects() {
  return (
    <section className="min-h-screen">
      <PageHero
        eyebrow="projects"
        title="Full Project Catalog"
        description="Every project I've shipped — client work at Smart Gate and Création, alongside personal builds — filterable by source."
        crumbs={CRUMBS}
      />

      <div className="container space-y-5 py-8 pb-10 sm:py-12 xl:space-y-8">
        <TextHead
          text="my projects"
          title="featured portfolio"
          position="start"
        />
        <ProjectsGrid />
      </div>

      <CTA />
    </section>
  );
}
