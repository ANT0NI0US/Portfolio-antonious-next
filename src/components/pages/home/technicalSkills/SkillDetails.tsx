import { motion } from "framer-motion";
import SkillTitle from "./SkillTitle";
import SkillDescription from "./SkillDescription";

interface SkillDetailsProps {
  index: number;
  skill: {
    title: string;
    description: string[];
  };
}

export default function SkillDetails({ skill, index }: SkillDetailsProps) {
  const { title, description } = skill;

  return (
    <motion.div
      className="bg-secondary flex flex-col rounded-md p-5"
      variants={{
        hidden: { opacity: 0, x: -60 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
    >
      <SkillTitle title={title} />
      <SkillDescription description={description} />
      <span className="text-light/40 font-mono text-sm xl:text-base">],</span>
    </motion.div>
  );
}
