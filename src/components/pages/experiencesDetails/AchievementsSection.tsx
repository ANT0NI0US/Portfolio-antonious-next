import SectionDetailsHead from "@/components/common/SectionDetailsHead";
import { ICON_COLORS, IMPACT_COLORS } from "@/constants/colors";

interface AchievementsSectionProps {
  items: string[];
}

export default function AchievementsSection({
  items,
}: AchievementsSectionProps) {
  return (
    <section className="py-5 sm:py-10">
      <div className="container">
        <SectionDetailsHead
          subTitle="01 - Impact"
          mainTitle="Key Achievements"
          description="Measurable results delivered across projects and teams."
        />

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => {
            const colorClass = IMPACT_COLORS[index % IMPACT_COLORS.length];
            const iconColor = ICON_COLORS[index % ICON_COLORS.length];
            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-xl border bg-linear-to-br to-transparent p-5 transition-transform duration-300 hover:-translate-y-0.5 ${colorClass}`}
              >
                {/* Number */}
                <span
                  className={`mb-3 block text-3xl font-black tabular-nums opacity-20 transition-opacity duration-300 group-hover:opacity-40 ${iconColor}`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-light/85 text-sm leading-6">{item}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
