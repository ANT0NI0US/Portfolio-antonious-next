"use client";

import Button from "@/components/ui/Button";
import GridContainer from "@/components/ui/GridContainer";
import TextHead from "@/components/ui/TextHead";
import { techSkills } from "@/data/techSkills";
import { useState } from "react";
import SkillDetails from "./SkillDetails";

export default function TechnicalSkills() {
  const [showAll, setShowAll] = useState(false);

  const visibleSkills = showAll ? techSkills : techSkills.slice(0, 4);

  return (
    <section className="container py-5 sm:py-10" id="tech-skills">
      <TextHead
        text="Technical Skills"
        title="The Technologies I Work With"
        position="start"
      >
        <Button
          onClick={() => setShowAll((prev) => !prev)}
          aria_label="Toggle to show all technical skills or show less"
          font="w-fit! sm:w-[200px]! ms-auto!"
          variation="secondary"
        >
          {showAll ? "Show Less" : "Show All Skills"}
        </Button>
      </TextHead>

      {/* TECHNICAL SKILLS */}
      <div className="bg-main border-light/10 overflow-hidden rounded-xl border py-2.5">
        <div className="text-light/40 border-b-light/10 border-b px-4 py-2.5 font-mono text-[11px]">
          package.json
        </div>

        <div className="text-light/40 px-4 py-4 font-mono text-sm">{"{"}</div>

        <GridContainer styles="md:grid md:grid-cols-2 gap-4! px-4">
          {visibleSkills?.map((skill, index) => (
            <SkillDetails skill={skill} key={skill.title} index={index} />
          ))}
        </GridContainer>

        <div className="text-light/40 px-4 pt-4 pb-2.5 font-mono text-sm">
          {"}"}
        </div>
      </div>
    </section>
  );
}
