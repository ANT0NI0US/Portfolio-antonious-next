import { IconProps } from "@/icons/types";
import { ComponentType } from "react";

interface ContactInfoCardProps {
  icon: ComponentType<IconProps>;
  label: string;
  value: string;
  href?: string;
}

export default function ContactInfoCard({
  icon: Icon,
  label,
  value,
  href,
}: ContactInfoCardProps) {
  const Wrapper = href ? "a" : "div";
  const description = `${label}: ${value}`;

  return (
    <Wrapper
      {...(href && {
        href,
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": description,
        title: description,
      })}
      className="bg-secondary/40 border-light/10 hover:border-primary/40 group flex items-center gap-3 rounded-xl border p-6 transition-colors"
    >
      <div className="bg-primary/10 text-primary group-hover:bg-primary group-hover:text-secondary shrink-0 rounded-xl p-3 transition-colors">
        <Icon className="size-5 sm:size-6" />
      </div>
      <div className="min-w-0">
        <p className="text-light/55 text-xs tracking-wider uppercase">
          {label}
        </p>
        <p className="text-light truncate text-xl font-semibold">{value}</p>
      </div>
    </Wrapper>
  );
}
