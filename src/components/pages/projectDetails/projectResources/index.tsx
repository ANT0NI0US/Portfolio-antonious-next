import SectionDetailsHead from "@/components/common/SectionDetailsHead";
import { ProjectData } from "@/data/projects";
import ResourceLinks from "./ResourceLinks";
import DemoAccounts from "./DemoAccounts";

const LINK_KEYS = ["url", "githubLink", "video", "documentation"] as const;

interface ProjectResourcesProps {
  project: ProjectData;
  subTitle: string;
  mainTitle?: string;
}

export default function ProjectResources({
  project,
  subTitle,
  mainTitle = "Resources",
}: ProjectResourcesProps) {
  if (!project) return null;

  const hasLinks = LINK_KEYS.some((key) => project[key]);
  const hasAccounts = (project.accounts?.length ?? 0) > 0;

  if (!hasLinks && !hasAccounts) return null;

  return (
    <section className="border-t-light/5 border-t py-5 sm:py-10">
      <div className="container">
        <SectionDetailsHead subTitle={subTitle} mainTitle={mainTitle} />

        <div className="flex flex-col gap-5">
          <ResourceLinks project={project} />
          <DemoAccounts accounts={project.accounts} />
        </div>
      </div>
    </section>
  );
}
