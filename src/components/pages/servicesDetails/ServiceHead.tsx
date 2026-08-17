import SectionDetailsHead from "@/components/common/SectionDetailsHead";
import InfoBlock from "@/components/ui/InfoBlock";
import InlineList from "@/components/ui/InlineList";
import { IconProps } from "@/icons/types";
import { ComponentType } from "react";

interface ServiceHeadProps {
  subTitle: string;
  mainTitle: string;
  description: string;
  category: string;
  tools?: string[];
  icon?: ComponentType<IconProps>;
}

export default function ServiceHead({
  subTitle,
  mainTitle,
  description,
  category,
  tools = [],
  icon: Icon,
}: ServiceHeadProps) {
  return (
    <section className="from-main via-secondary/80 to-main bg-linear-to-t py-5 sm:py-10">
      <div className="container flex flex-col items-center gap-10 md:flex-row md:gap-20">
        <div className="flex w-full flex-col gap-4 md:w-[60%]">
          <SectionDetailsHead subTitle={subTitle} mainTitle={mainTitle} />

          <p className="text-light/65 text-sm sm:text-lg">{description}</p>

          <div className="flex flex-wrap items-center gap-8">
            <InfoBlock label="Category">
              <span className="text-light/65">{category}</span>
            </InfoBlock>

            {tools.length ? (
              <InfoBlock label="Tools">
                <InlineList items={tools} />
              </InfoBlock>
            ) : (
              <></>
            )}
          </div>
        </div>

        {Icon && (
          <div className="border-primary/20 bg-secondary/40 flex aspect-square w-full max-w-[280px] items-center justify-center rounded-2xl border md:w-[35%]">
            <Icon className="text-primary size-20 sm:size-28" />
          </div>
        )}
      </div>
    </section>
  );
}
