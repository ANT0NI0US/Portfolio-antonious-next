interface SkillTitleProps {
  title: string;
}

export default function SkillTitle({ title }: SkillTitleProps) {
  return (
    <div className="font-mono text-sm xl:text-base">
      <span className="text-primary">&quot;{title}&quot;</span>
      <span className="text-light/40">: [</span>
    </div>
  );
}
