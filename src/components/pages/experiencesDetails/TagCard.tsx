import { TAG_CONFIGS } from "@/data/experiences";
import TagPill from "./TagPill";

interface TagCardProps {
  configKey: keyof typeof TAG_CONFIGS;
  items: string[];
}

export default function TagCard({ configKey, items }: TagCardProps) {
  const config = TAG_CONFIGS[configKey];
  return (
    <div className="from-secondary/50 to-secondary/20 flex h-full flex-col gap-4 border border-white/5 bg-gradient-to-br p-5">
      <div>
        <span
          className={`text-light/40 mb-0.5 block text-[10px] font-semibold tracking-widest uppercase`}
        >
          {config.label}
        </span>
        <h3 className="text-base font-semibold text-white">{config.title}</h3>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {items.map((item) => (
          <TagPill key={item} label={item} pillStyle={config.pillStyle} />
        ))}
      </div>
    </div>
  );
}
