import type { Crumb } from "@/components/common/Breadcrumbs";
import CTA from "@/components/common/CTA";
import PageHero from "@/components/common/PageHero";
import { buildMetadata } from "@/components/common/Seo";
import ServicesGrid from "@/components/pages/services/ServicesGrid";
import ServicesTicker from "@/components/pages/services/ServicesTicker";
import WhyWorkWithMe from "@/components/pages/services/WhyWorkWithMe";
import TextHead from "@/components/ui/TextHead";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  title: "Antonious Nasr | Services",
  description:
    "Frontend development services — web app development, SEO, UI/UX implementation, performance optimization, and more.",
  path: "/services",
  keywords: [
    "Frontend Development Services",
    "Web Application Development",
    "React Developer for Hire",
    "Next.js Developer",
    "UI/UX Implementation",
    "SEO Optimization",
    "Performance Optimization",
    "Antonious Nasr",
  ],
});

const CRUMBS: Crumb[] = [{ label: "Home", path: "/" }, { label: "Services" }];

export default function Services() {
  return (
    <section className="min-h-screen">
      <PageHero
        eyebrow="services"
        title="The Ease-Service Process"
        description="Frontend development services designed around your product — from first line of code to post-launch support."
        crumbs={CRUMBS}
      />

      <WhyWorkWithMe />

      <div className="container space-y-5 py-8 sm:py-12 xl:space-y-8">
        <TextHead text="our services" title="discover our capabilities" />
        <ServicesGrid />
      </div>

      <ServicesTicker />

      <CTA />
    </section>
  );
}
