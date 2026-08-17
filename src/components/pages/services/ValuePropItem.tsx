import { IconProps } from "@/icons/types";
import { ComponentType } from "react";

interface ValuePropItemProps {
  icon: ComponentType<IconProps>;
  title: string;
  description: string;
}

export default function ValuePropItem({
  icon: Icon,
  title,
  description,
}: ValuePropItemProps) {
  return (
    <li className="relative h-45">
      <div className="bg-main border-secondary flex h-full flex-col gap-3 overflow-hidden rounded-xl border-2 p-4">
        <span className="bg-primary/10 text-primary flex size-12 items-center justify-center rounded-xl">
          <Icon className="size-6" />
        </span>
        <p className="text-light text-sm font-semibold">{title}</p>
        <p className="text-light/50 text-xs leading-[1.65]">{description}</p>
      </div>
      <span className="bg-primary absolute top-2 -left-1 -z-1 h-8 w-4 rounded-xl" />
    </li>
  );
}
