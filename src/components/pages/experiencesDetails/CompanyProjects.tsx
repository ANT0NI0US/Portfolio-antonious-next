import ProjectsCarousel from "@/components/common/ProjectsCarousel";
import SectionDetailsHead from "@/components/common/SectionDetailsHead";
import { ProjectData } from "@/data/projects";

interface CompanyProjectsProps {
  projects: ProjectData[];
}

export default function CompanyProjects({ projects }: CompanyProjectsProps) {
  return (
    <section className="mb-25 py-5 sm:py-10">
      <div className="container">
        <SectionDetailsHead
          subTitle="04 - Projects Delivered"
          mainTitle="Company Projects"
        />
        <ProjectsCarousel
          projects={projects.map(({ id, title, imgUrl, description }) => ({
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
