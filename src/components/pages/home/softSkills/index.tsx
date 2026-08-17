"use client";

import Button from "@/components/ui/Button";
import GridContainer from "@/components/ui/GridContainer";
import TextHead from "@/components/ui/TextHead";
import { softSkills } from "@/data/SoftSkills";
import { useState } from "react";
import SkillDetails from "./SkillDetails";

export default function SoftSkills() {
  const [showAll, setShowAll] = useState(false);

  const visibleSkills = showAll ? softSkills : softSkills.slice(0, 6);
  return (
    <section className="container py-5 sm:py-10" id="soft-skills">
      <TextHead
        text="Soft Skills"
        title="The Skills That Drive Collaboration"
        position="start"
      >
        <Button
          onClick={() => setShowAll((prev) => !prev)}
          aria_label="Toggle to show all soft skills or show less"
          font="w-fit! sm:w-[200px]! ms-auto!"
          variation="secondary"
        >
          {showAll ? "Show Less" : "Show All Skills"}
        </Button>
      </TextHead>

      {/* SOFT SKILLS */}
      <GridContainer>
        {visibleSkills?.map((skill) => (
          <SkillDetails skill={skill} key={skill.title} />
        ))}
      </GridContainer>
    </section>
  );
}
