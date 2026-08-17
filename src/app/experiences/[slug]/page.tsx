import type { Crumb } from "@/components/common/Breadcrumbs";
import PageHero from "@/components/common/PageHero";
import { buildMetadata } from "@/components/common/Seo";
import AchievementsSection from "@/components/pages/experiencesDetails/AchievementsSection";
import CompanyProjects from "@/components/pages/experiencesDetails/CompanyProjects";
import HeaderSection from "@/components/pages/experiencesDetails/HeaderSection";
import ResponsibilitiesSection from "@/components/pages/experiencesDetails/ResponsibilitiesSection";
import TagsGrid from "@/components/pages/experiencesDetails/TagsGrid";
import { experiences } from "@/data/experiences";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return experiences.map((experience) => ({ slug: String(experience.id) }));
}

export async function generateMetadata({
  params,
}: PageProps<"/experiences/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const experience = experiences.find((p) => p.id === Number(slug));

  if (!experience) return {};

  return buildMetadata({
    title: `Antonious Nasr | ${experience.title}`,
    description: experience.summary,
    path: `/experiences/${experience.id}`,
    keywords: [experience.title, experience.jobTitle, "Work Experience"],
  });
}

export default async function ExperiencesDetails({
  params,
}: PageProps<"/experiences/[slug]">) {
  const { slug } = await params;
  const experience = experiences.find((p) => p.id === Number(slug));

  if (!experience) notFound();

  const crumbs: Crumb[] = [
    { label: "Home", path: "/" },
    { label: "Experience" },
    { label: experience.title },
  ];

  return (
    <>
      <PageHero
        eyebrow="experience"
        title={experience.title}
        description={experience.jobTitle}
        crumbs={crumbs}
      />
      <HeaderSection experience={experience} />

      {experience.keyAchievements?.length > 0 && (
        <AchievementsSection items={experience.keyAchievements} />
      )}

      {experience.coreResponsibilities?.length > 0 && (
        <ResponsibilitiesSection items={experience.coreResponsibilities} />
      )}

      <TagsGrid experience={experience} />

      {experience.projects.length > 0 && (
        <CompanyProjects projects={experience.projects} />
      )}
    </>
  );
}
