import { IconProps } from "@/icons/types";
import { motion } from "framer-motion";
import { ComponentType } from "react";

interface SkillDetailsProps {
  skill: {
    title: string;
    description: string;
    icon: ComponentType<IconProps>;
  };
}

export default function SkillDetails({ skill }: SkillDetailsProps) {
  const { title, description, icon: Icon } = skill;
  return (
    <motion.div
      className="bg-secondary group relative flex min-h-75 flex-col items-center justify-center gap-1.5 overflow-hidden rounded-xl p-4 text-center"
      initial={{ rotate: 180, opacity: 0, scale: 0.5 }}
      whileInView={{ rotate: 0, opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
      }}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="group-hover:animate-rotate bg-primary absolute h-[200%] w-25" />
      <div className="bg-main absolute inset-1 z-10 flex flex-col items-center justify-center gap-2 rounded-md px-3 py-4 text-center shadow-md">
        <span className="text-light/55 self-start font-mono text-[11px]">
          {"/**"}
        </span>
        <Icon className="size-14 xl:size-16" />
        <h3 className="text-primary text-lg font-semibold xl:text-xl">
          {title}
        </h3>
        <p>{description}</p>

        <span className="text-light/55 self-end font-mono text-[11px]">
          {"*/"}
        </span>
      </div>
    </motion.div>
  );
}
