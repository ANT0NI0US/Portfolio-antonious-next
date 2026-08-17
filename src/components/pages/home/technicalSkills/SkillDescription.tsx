interface SkillDescriptionProps {
  description: string[];
}

export default function SkillDescription({
  description,
}: SkillDescriptionProps) {
  return (
    <ul className="flex flex-wrap font-mono text-sm xl:text-base">
      {description?.map((desc, idx) => (
        <li key={idx} className="text-light/80">
          <span className="text-light/30">&quot;</span>
          {desc}
          <span className="text-light/30">&quot;</span>
          {idx < description.length - 1 && (
            <span className="text-light/30">,</span>
          )}
        </li>
      ))}
    </ul>
  );
}
