import TextHead from "@/components/ui/TextHead";
import { ICON_COLORS, IMPACT_COLORS } from "@/constants/colors";

const pitches = [
  {
    tag: "01",
    title: "I ship fast — and it stays fast.",
    description:
      "Next.js App Router, SSG, and a real performance budget cut initial load time by 40% on my last project. Speed isn't a checkbox here, it's a metric I get graded on.",
  },
  {
    tag: "02",
    title: "I speak fluent RTL.",
    description:
      "Full bilingual Arabic/English builds with automatic RTL/LTR switching for 150+ clients — a skill most frontend devs never actually get tested on.",
  },
  {
    tag: "03",
    title: "SEO is baked in, not bolted on.",
    description:
      "Structured metadata, OpenGraph, and 60+ targeted keywords drove a 25% lift in organic visibility — a number that showed up in real analytics, not a slide deck.",
  },
  {
    tag: "04",
    title: "I clean up the mess other devs avoid.",
    description:
      "Refactored ~20% of a live legacy codebase without breaking production — the unglamorous work that quietly saves a team months later.",
  },
];

export default function WhyMe() {
  return (
    <section className="container py-8 sm:py-14">
      <TextHead
        text="The Pitch"
        title="Why You Should Pick Me"
        position="start"
      />

      <div className="flex flex-col gap-10 sm:gap-14">
        {pitches.map(({ tag, title, description }, index) => {
          const colorClass = IMPACT_COLORS[index % IMPACT_COLORS.length];
          const iconColor = ICON_COLORS[index % ICON_COLORS.length];
          const reversed = index % 2 === 1;

          return (
            <div
              key={tag}
              className={`flex flex-col items-start gap-5 sm:gap-8 lg:items-center ${
                reversed ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
            >
              <div
                className={`flex shrink-0 items-center justify-center rounded-2xl border bg-linear-to-br to-transparent p-6 sm:p-8 ${colorClass}`}
              >
                <span
                  className={`font-mono text-4xl font-black sm:text-5xl ${iconColor}`}
                >
                  {tag}
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-2">
                <h3 className="text-light text-xl font-bold sm:text-2xl">
                  {title}
                </h3>
                <p className="text-light/65 max-w-3xl text-sm leading-6 sm:text-base">
                  {description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
