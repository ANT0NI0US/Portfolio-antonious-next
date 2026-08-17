import SectionDetailsHead from "@/components/common/SectionDetailsHead";
import { ICON_COLORS, IMPACT_COLORS } from "@/constants/colors";

interface KeyObjectivesProps {
  objectivesData?: string[];
  subTitle: string;
  mainTitle?: string;
}

export default function KeyObjectives({
  objectivesData,
  subTitle,
  mainTitle = "Key Objectives",
}: KeyObjectivesProps) {
  return (
    <section className="from-secondary to-main border-t-light/5 border-t bg-linear-to-t pt-5 sm:pt-10">
      <div className="container">
        <SectionDetailsHead subTitle={subTitle} mainTitle={mainTitle} />
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {objectivesData?.map((item, index) => {
          const colorClass = IMPACT_COLORS[index % IMPACT_COLORS.length];
          const iconColor = ICON_COLORS[index % ICON_COLORS.length];
          return (
            <li
              key={index}
              className={`group relative flex min-h-37.5 flex-col gap-2.5 overflow-hidden border bg-linear-to-br to-transparent p-4 sm:gap-2 ${colorClass}`}
            >
              <span
                className={`block self-end text-3xl font-black tabular-nums opacity-20 transition-opacity duration-300 select-none group-hover:opacity-40 ${iconColor}`}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-light/85 text-sm leading-6">{item}</p>

              {/* top line on hover */}
              <div className="bg-primary absolute top-0 right-0 left-0 h-0.5 origin-left scale-x-0 transition-transform duration-400 group-hover:scale-x-100" />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
