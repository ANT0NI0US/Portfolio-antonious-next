import ProjectsCarousel from "@/components/common/ProjectsCarousel";
import SectionDetailsHead from "@/components/common/SectionDetailsHead";
import { ProjectData } from "@/data/projects";

interface OtherProjectsProps {
  subTitle: string;
  otherProjects: ProjectData[];
}

export default function OtherProjects({
  subTitle,
  otherProjects,
}: OtherProjectsProps) {
  return (
    <section className="border-y-light/5 border-y py-5 sm:py-10">
      <div className="container">
        <SectionDetailsHead subTitle={subTitle} mainTitle="Other Projects" />
        <ProjectsCarousel
          projects={otherProjects.map(({ id, title, imgUrl, description }) => ({
            id,
            title,
            imgUrl,
            description,
          }))}
        />
      </div>
    </section>
  );
}
