import SectionDetailsHead from "@/components/common/SectionDetailsHead";

interface ResponsibilitiesSectionProps {
  items: string[];
}

export default function ResponsibilitiesSection({
  items,
}: ResponsibilitiesSectionProps) {
  return (
    <section className="container pt-5 sm:pt-10">
      <SectionDetailsHead
        subTitle="02 - Role"
        mainTitle="Core Responsibilities"
        description="Day-to-day ownership across the full frontend lifecycle."
      />

      <div className="from-secondary/60 to-secondary/30 rounded-xl border border-white/5 bg-gradient-to-br p-6">
        <ul className="relative flex flex-col gap-0">
          {/* Vertical connecting line */}
          <div className="from-primary/40 absolute top-2 bottom-2 left-[9px] w-[1px] bg-gradient-to-b to-transparent" />

          {items.map((item, index) => (
            <li
              key={index}
              className="group relative flex items-start gap-4 py-3"
            >
              {/* Dot */}
              <div className="bg-primary ring-main relative z-10 ms-1 mt-1 size-[10px] shrink-0 rounded-full ring-4 transition-transform duration-200 group-hover:scale-125" />

              <p className="text-light/75 group-hover:text-light/95 text-sm leading-6 transition-colors duration-200">
                {item}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
