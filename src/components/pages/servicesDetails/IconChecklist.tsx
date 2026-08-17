import SectionDetailsHead from "@/components/common/SectionDetailsHead";
import { CheckIcon } from "@/icons";
import { IconProps } from "@/icons/types";
import { ComponentType } from "react";

interface IconChecklistProps {
  items: string[];
  subTitle: string;
  mainTitle: string;
  icon?: ComponentType<IconProps>;
}

export default function IconChecklist({
  items,
  subTitle,
  mainTitle,
  icon: Icon = CheckIcon,
}: IconChecklistProps) {
  return (
    <section className="py-5 sm:py-10">
      <div className="container">
        <SectionDetailsHead subTitle={subTitle} mainTitle={mainTitle} />

        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {items?.map((item, index) => (
            <li
              key={index}
              className="bg-secondary/40 border-light/10 hover:border-primary/30 flex items-start gap-3 rounded-lg border p-4 transition-colors"
            >
              <Icon className="text-primary mt-0.5 size-5 shrink-0" />
              <span className="text-light/75 text-sm leading-relaxed">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
