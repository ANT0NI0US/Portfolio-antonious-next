import type { Crumb } from "@/components/common/Breadcrumbs";
import CTA from "@/components/common/CTA";
import PageHero from "@/components/common/PageHero";
import SectionDetailsHead from "@/components/common/SectionDetailsHead";
import Service from "@/components/common/service";
import { buildMetadata } from "@/components/common/Seo";
import Technologies from "@/components/common/Technologies";
import BenefitsGrid from "@/components/pages/servicesDetails/BenefitsGrid";
import IconChecklist from "@/components/pages/servicesDetails/IconChecklist";
import ProcessSteps from "@/components/pages/servicesDetails/ProcessSteps";
import ProofProject from "@/components/pages/servicesDetails/ProofProject";
import ServiceHead from "@/components/pages/servicesDetails/ServiceHead";
import GridContainer from "@/components/ui/GridContainer";
import { allServices } from "@/data/allServices";
import { creationProjects } from "@/data/creationProjects";
import { personalProjects } from "@/data/projects";
import { smartGateProjects } from "@/data/smartGateProjects";
import { AwardIcon } from "@/icons";
import { createNumberedSections } from "@/components/utils/numberedSections";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const allProjects = [
  ...smartGateProjects,
  ...creationProjects,
  ...personalProjects,
];

export function generateStaticParams() {
  return allServices.map((service) => ({ slug: String(service.id) }));
}

export async function generateMetadata({
  params,
}: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = allServices.find((s) => s.id === Number(slug));

  if (!service) return {};

  return buildMetadata({
    title: `Antonious Nasr | ${service.title}`,
    description: service.description,
    path: `/services/${service.id}`,
    keywords: [service.title, service.category, "Frontend Development Service"],
  });
}

export default async function ServiceDetails({
  params,
}: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = allServices.find((s) => s.id === Number(slug));

  if (!service) notFound();

  const numbered = createNumberedSections();

  const relatedServices = allServices.filter(
    (s) => s.category === service.category && s.id !== service.id,
  );
  const proofProject = service.proofProjectId
    ? allProjects.find((p) => p.id === service.proofProjectId)
    : null;

  const crumbs: Crumb[] = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: service.title },
  ];

  return (
    <>
      <PageHero
        eyebrow="service details"
        title={service.title}
        crumbs={crumbs}
      />
      {/* SERVICE HEAD CONTENT */}
      <ServiceHead
        subTitle={numbered("About the service")}
        mainTitle="What I Do"
        description={service.description}
        category={service.category}
        tools={service.toolkit?.map((tool) => tool.alt)}
        icon={service.icon}
      />
      {/* WHAT'S INCLUDED */}
      <IconChecklist
        items={service.whatsIncluded}
        subTitle={numbered("What's Included")}
        mainTitle="Inside the Service"
      />
      {/* HOW I WORK */}
      <ProcessSteps
        steps={service.process}
        subTitle={numbered("How I Work")}
        mainTitle="My Process"
      />
      {/* PROOF — A REAL PROJECT THAT USED THIS SERVICE */}
      <ProofProject
        project={proofProject}
        subTitle={numbered("Proof")}
        mainTitle="See It In Action"
      />
      {/* KEY BENEFITS */}
      <BenefitsGrid
        benefits={service.keyFeatures}
        subTitle={numbered("Benefits")}
        mainTitle="Key Benefits"
      />
      {/* TOOLS & TECHNOLOGIES */}
      {service.toolkit && service.toolkit.length > 0 && (
        <Technologies
          toolkitData={service.toolkit}
          subTitle={numbered("Tools")}
          mainTitle="Tools & Technologies"
          blurb="Technologies I rely on to deliver this service to a production-grade standard."
        />
      )}
      {/* WHAT YOU GET */}
      <IconChecklist
        items={service.outcomes}
        subTitle={numbered("Outcomes")}
        mainTitle="What You Get"
        icon={AwardIcon}
      />
      {/* RELATED SERVICES */}
      {relatedServices.length > 0 && (
        <section className="py-5 sm:py-10">
          <div className="container">
            <SectionDetailsHead
              subTitle={numbered("Related")}
              mainTitle="Related Services"
            />
            <GridContainer>
              {relatedServices.map((relatedService) => (
                <Service key={relatedService.id} {...relatedService} />
              ))}
            </GridContainer>
          </div>
        </section>
      )}
      {/* CALL TO ACTION */}
      <CTA />
    </>
  );
}
