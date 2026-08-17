import type { IconProps } from "@/icons/types";
import Link from "next/link";
import type { ComponentType } from "react";
import ServiceBody from "./ServiceBody";

interface ServiceProps {
  id: number;
  title: string;
  description: string;
  icon: ComponentType<IconProps>;
}

export default function Service({
  id,
  title,
  description,
  icon: Icon,
}: ServiceProps) {
  const lines = 4 + Math.ceil(description.length / 20) + 2;

  return (
    <Link
      href={`/services/${id}`}
      aria-label={`View details about ${title}`}
      title={`View details about ${title}`}
      className="border-secondary group relative flex rounded-xl border-2"
    >
      <div className="text-light bg-main group-hover:bg-primary border-t-primary border-r-primary border-l-primary group-hover:text-secondary group-hover:border-primary border-b-main absolute -top-2 left-1/2 z-10 -translate-x-1/2 rounded-full border border-t-5 border-r-2 border-l-2 p-3 transition-all duration-300 sm:-top-4">
        <Icon className="size-4 xl:size-6" />
      </div>

      {/* GUTTER — LINE NUMBERS */}
      <div className="text-primary/40 group-hover:text-primary/70 mt-6 flex flex-col items-end gap-0.5 px-2.5 py-4 font-mono text-[11px] transition-colors duration-300">
        {Array.from({ length: lines }, (_, i) => (
          <span key={i}>{String(i + 1).padStart(2, "0")}</span>
        ))}
      </div>

      {/* BODY */}
      <ServiceBody title={title} description={description} />
    </Link>
  );
}
