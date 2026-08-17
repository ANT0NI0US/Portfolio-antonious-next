import SectionDetailsHead from "@/components/common/SectionDetailsHead";
import { ExperienceData } from "@/data/experiences";
import TagCard from "./TagCard";

interface TagsGridProps {
  experience: ExperienceData;
}

export default function TagsGrid({ experience }: TagsGridProps) {
  const { workingWith, techHighlights, deploymentTools, softSkills, tools } =
    experience;

  return (
    <section className="pt-5 sm:pt-10">
      <div className="container">
        <SectionDetailsHead
          subTitle="03 - Context"
          mainTitle="Skills & Collaboration"
          description="The stack, people, and practices that shaped this role."
        />
      </div>

      {/* Top 3 equal columns */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        {workingWith?.length > 0 && (
          <TagCard configKey="teamCollaboration" items={workingWith} />
        )}
        {techHighlights?.length > 0 && (
          <TagCard configKey="techHighlights" items={techHighlights} />
        )}
        {deploymentTools?.length > 0 && (
          <TagCard configKey="deploymentTools" items={deploymentTools} />
        )}
      </div>

      {/* Bottom 2 unequal columns: soft skills narrow, full toolkit wide */}
      <div className="grid grid-cols-1 md:grid-cols-8">
        {softSkills?.length > 0 && (
          <div className="flex md:col-span-3">
            <TagCard configKey="softSkills" items={softSkills} />
          </div>
        )}
        {tools?.length > 0 && (
          <div className="flex md:col-span-5">
            <TagCard configKey="tools" items={tools} />
          </div>
        )}
      </div>
    </section>
  );
}
