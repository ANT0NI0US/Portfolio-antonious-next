import ProjectSectionImage from "./ProjectSectionImage";
import ProjectSectionList from "./ProjectSectionList";

interface SectionContentProps {
  image: { src: string; alt: string };
  data?: string[];
  startIndex?: number;
  listVariant?: "number" | "bullet";
  imageOrder?: "left" | "right";
}

export default function SectionContent({
  image,
  data,
  startIndex = 0,
  listVariant,
  imageOrder,
}: SectionContentProps) {
  const isImageRight = imageOrder === "right";

  return (
    <div className="container grid grid-cols-1 items-center gap-6 sm:grid-cols-2">
      <div className={`${isImageRight ? "order-1 sm:order-2" : ""}`}>
        <ProjectSectionImage {...image} />
      </div>

      <div className={`${isImageRight ? "order-2 sm:order-1" : ""}`}>
        <ProjectSectionList
          items={data}
          startIndex={startIndex}
          variant={listVariant}
        />
      </div>
    </div>
  );
}
