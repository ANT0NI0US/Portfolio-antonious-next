import SectionDetailsHead from "@/components/common/SectionDetailsHead";
import { splitContent } from "./splitContent";
import SectionContent from "./SectionContent";

// Below this many items, splitting into two stacked halves (each with its
// own image) looks sparse and unbalanced — show one unified block instead.
const SPLIT_THRESHOLD = 6;

interface ProjectDetailsSplitSectionProps {
  header: { subTitle: string; mainTitle: string };
  data?: string[];
  firstImage: { src: string; alt: string };
  secondImage: { src: string; alt: string };
  listVariant?: "number" | "bullet";
  sectionClassName?: string;
  firstSectionImageOrder?: "left" | "right";
  secondSectionImageOrder?: "left" | "right";
  gradientPosition?: "left" | "right";
}

export default function ProjectDetailsSplitSection({
  header,
  data,
  firstImage,
  secondImage,
  listVariant = "number",
  sectionClassName,
  firstSectionImageOrder = "left",
  secondSectionImageOrder = "left",
  gradientPosition,
}: ProjectDetailsSplitSectionProps) {
  const { firstPart, secondPart, secondPartStartIndex } = splitContent(
    data ?? [],
  );
  const shouldSplit = (data?.length ?? 0) >= SPLIT_THRESHOLD;

  return (
    <section className={sectionClassName}>
      <div className="container">
        <SectionDetailsHead
          subTitle={header.subTitle}
          mainTitle={header.mainTitle}
        />
      </div>

      <div
        className={`${gradientPosition === "right" ? "bg-gradient-to-r" : "bg-gradient-to-l"} from-secondary to-main to-95% py-5 sm:py-10`}
      >
        <SectionContent
          image={firstImage}
          data={shouldSplit ? firstPart : data}
          listVariant={listVariant}
          imageOrder={firstSectionImageOrder}
        />
      </div>

      {shouldSplit && secondPart.length > 0 && (
        <div className="container py-5 sm:py-10">
          <SectionContent
            image={secondImage}
            data={secondPart}
            startIndex={secondPartStartIndex}
            listVariant={listVariant}
            imageOrder={secondSectionImageOrder}
          />
        </div>
      )}
    </section>
  );
}
