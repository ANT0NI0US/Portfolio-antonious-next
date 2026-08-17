import ProjectSectionListItem from "./ProjectSectionListItem";

interface ProjectSectionListProps {
  items?: string[];
  startIndex?: number;
  variant?: "number" | "bullet";
}

export default function ProjectSectionList({
  items = [],
  startIndex = 0,
  variant = "number",
}: ProjectSectionListProps) {
  if (!items.length) return null;

  return (
    <ul className="flex flex-col gap-4">
      {items.map((item, i) => (
        <ProjectSectionListItem
          key={item}
          item={item}
          index={startIndex + i}
          variant={variant}
        />
      ))}
    </ul>
  );
}
