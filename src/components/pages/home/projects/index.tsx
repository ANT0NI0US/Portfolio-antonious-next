import ProjectCard from "@/components/common/ProjectCard";
import Button from "@/components/ui/Button";
import GridContainer from "@/components/ui/GridContainer";
import TextHead from "@/components/ui/TextHead";
import { creationProjects } from "@/data/creationProjects";
import { personalProjects } from "@/data/projects";
import { smartGateProjects } from "@/data/smartGateProjects";

const FEATURED_IDS = [1, 101, 202, 100];

const allProjects = [
  ...smartGateProjects,
  ...creationProjects,
  ...personalProjects,
];

const featuredProjects = FEATURED_IDS.map((id) =>
  allProjects.find((project) => project.id === id),
).filter((project): project is NonNullable<typeof project> => Boolean(project));

export default function Projects() {
  return (
    <section className="py-5 sm:py-10" id="projects">
      <div className="container space-y-5 xl:space-y-8">
        <TextHead text="Projects" title="Featured Portfolio" position="start">
          <Button
            href="/projects"
            aria_label="View all projects"
            font="w-fit! sm:w-[200px]! ms-auto!"
            variation="secondary"
          >
            View All Projects
          </Button>
        </TextHead>

        <GridContainer>
          {featuredProjects.map(({ id, title, imgUrl, category, ...rest }) => (
            <ProjectCard
              key={id}
              project={{
                id,
                title,
                imgUrl,
                category,
                type: "type" in rest ? rest.type : undefined,
              }}
            />
          ))}
        </GridContainer>
      </div>
    </section>
  );
}
