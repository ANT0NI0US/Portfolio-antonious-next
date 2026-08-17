import SectionDetailsHead from "@/components/common/SectionDetailsHead";

export interface ToolkitItem {
  src: string;
  url?: string;
  alt: string;
}

interface TechnologiesProps {
  toolkitData: ToolkitItem[];
  subTitle?: string;
  mainTitle?: string;
  blurb?: string;
}

export default function Technologies({
  toolkitData,
  subTitle,
  mainTitle = "Toolkit",
  blurb = "A modern, production-grade stack chosen for performance, type safety, and developer experience.",
}: TechnologiesProps) {
  return (
    <section className="bg-secondary py-5 sm:py-10">
      <div className="container grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <SectionDetailsHead subTitle={subTitle} mainTitle={mainTitle} />
          <p className="text-light/55 -mt-4 w-full leading-[1.8] sm:w-2/3">
            {blurb}
          </p>
        </div>

        <ul className="flex flex-wrap gap-2.5">
          {toolkitData?.map((el, index) => (
            <a
              key={index}
              href={el?.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Learn more about ${el.alt}`}
              title={`Learn more about ${el.alt}`}
              className="hover:bg-primary/10 hover:border-primary/50 bg-light/5 border-primary/20 flex w-fit cursor-pointer items-center gap-1.5 rounded-full border px-4 py-1.5 transition-colors duration-300"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                loading="lazy"
                title={el.alt}
                src={el.src}
                alt={el.alt}
                className="size-6 object-contain object-center"
              />
              <span className="text-light/80 text-xs font-medium whitespace-nowrap">
                {el.alt}
              </span>
            </a>
          ))}
        </ul>
      </div>
    </section>
  );
}
