interface TagPillProps {
  label: string;
  pillStyle: string;
}

export default function TagPill({ label, pillStyle }: TagPillProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-all duration-200 ${pillStyle}`}
    >
      {label}
    </span>
  );
}
