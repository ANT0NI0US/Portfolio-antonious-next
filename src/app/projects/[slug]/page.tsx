import type { Crumb } from "@/components/common/Breadcrumbs";
import CTA from "@/components/common/CTA";
import PageHero from "@/components/common/PageHero";
import { buildMetadata } from "@/components/common/Seo";
import Technologies from "@/components/common/Technologies";
import Challenges from "@/components/pages/projectDetails/challenges";
import FullBleedQuote from "@/components/pages/projectDetails/fullBleedQuote";
import KeyFeatures from "@/components/pages/projectDetails/keyFeatures";
import KeyObjectives from "@/components/pages/projectDetails/keyObjectives";
import KeyOutcomes from "@/components/pages/projectDetails/keyOutcomes";
import OtherProjects from "@/components/pages/projectDetails/otherProjects";
import ProjectHead from "@/components/pages/projectDetails/projectHead";
import ProjectImages from "@/components/pages/projectDetails/projectImages";
import ProjectResources from "@/components/pages/projectDetails/projectResources";
import Responsibilities from "@/components/pages/projectDetails/responsibilities";
import { creationProjects } from "@/data/creationProjects";
import { personalProjects } from "@/data/projects";
import { smartGateProjects } from "@/data/smartGateProjects";
import { createNumberedSections } from "@/components/utils/numberedSections";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const allProjects = [
  ...smartGateProjects,
  ...creationProjects,
  ...personalProjects,
];

const RESOURCE_KEYS = ["url", "githubLink", "video", "documentation"] as const;

export function generateStaticParams() {
  return allProjects.map((project) => ({ slug: String(project.id) }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = allProjects.find((p) => p.id === Number(slug));

  if (!project) return {};

  return buildMetadata({
    title: `Antonious Nasr | ${project.title}`,
    description: project.description,
    path: `/projects/${project.id}`,
    image: project.imgUrl,
    keywords: [project.title, project.category, ...(project.stack ?? [])],
  });
}

export default async function ProjectDetails({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = allProjects.find((p) => p.id === Number(slug));

  if (!project) notFound();

  const numbered = createNumberedSections();

  // Personal projects share one broad "personal" category, so also match on
  // `type` (React / Html & CSS & JS / Games) to keep "Other Projects" relevant.
  const otherProjects = allProjects.filter(
    (p) =>
      p.category === project.category &&
      p.id !== project.id &&
      (project.category !== "personal" || p.type === project.type),
  );

  const hasResources =
    RESOURCE_KEYS.some((key) => project[key]) ||
    (project.accounts?.length ?? 0) > 0;

  const crumbs: Crumb[] = [
    { label: "Home", path: "/" },
    { label: "Projects", path: "/projects" },
    { label: project.title },
  ];

  return (
    <>
      <PageHero
        eyebrow="project details"
        title={project.title}
        crumbs={crumbs}
      />
      {/* PROJECT HEAD CONTENT */}
      <ProjectHead
        subTitle={numbered("About the project")}
        mainTitle="Project Overview"
        title={project.title}
        description={project.description}
        imgUrl={project.imgUrl}
        category={project.category}
        stack={project.stack}
        languages={project.languages}
      />
      {/* LIVE DEMO / CODE / VIDEO / DOCS / DEMO ACCOUNTS (OPTIONAL) */}
      {hasResources && (
        <ProjectResources project={project} subTitle={numbered("Resources")} />
      )}
      {/* KEY OBJECTIVES */}
      <KeyObjectives
        objectivesData={project.keyObjectives}
        subTitle={numbered("objectives")}
      />
      {/* CHALLENGES SOLVED */}
      <Challenges
        challengesData={project.challengesSolved}
        subTitle={numbered("problem solving")}
      />
      {/* FULL BLEED QUOTE */}
      <FullBleedQuote />
      {/* RESPONSIBILITIES */}
      <Responsibilities
        responsibilitiesData={project.responsibilities}
        subTitle={numbered("My Role")}
      />
      {/* KEY FEATURES */}
      <KeyFeatures
        featuresData={project.keyFeatures}
        subTitle={numbered("Features")}
      />
      {/*  TECHNOLOGIES */}
      {project.toolkit && project.toolkit.length > 0 && (
        <Technologies
          toolkitData={project.toolkit}
          subTitle={numbered("Technology")}
        />
      )}
      {/*  KEY OUTCOMES */}
      <KeyOutcomes
        outcomesData={project.keyOutcomes}
        subTitle={numbered("Results")}
      />
      {/* IMAGE COLLAGE */}
      {project.imageColleges && project.imageColleges.length > 0 && (
        <ProjectImages
          project={{ imageColleges: project.imageColleges }}
          subTitle={numbered("Images")}
        />
      )}

      {/* OTHER PROJECTS IN THE SAME CATEGORY */}
      <OtherProjects
        subTitle={numbered("others")}
        otherProjects={otherProjects}
      />
      {/* CALL TO ACTION */}
      <CTA />
    </>
  );
}
