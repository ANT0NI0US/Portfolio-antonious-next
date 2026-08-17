import ListIndicator from "./ListIndicator";

interface ProjectSectionListItemProps {
  item: string;
  index: number;
  variant?: "number" | "bullet";
}

export default function ProjectSectionListItem({
  item,
  index,
  variant,
}: ProjectSectionListItemProps) {
  return (
    <li className="flex gap-2.5 sm:gap-2">
      <ListIndicator index={index} variant={variant} />

      <p className="text-light">{item}</p>
    </li>
  );
}
