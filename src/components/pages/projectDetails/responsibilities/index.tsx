import ProjectDetailsSplitSection from "../ProjectDetailsSplitSection";

interface ResponsibilitiesProps {
  responsibilitiesData?: string[];
  subTitle: string;
}

export default function Responsibilities({
  responsibilitiesData,
  subTitle,
}: ResponsibilitiesProps) {
  return (
    <ProjectDetailsSplitSection
      sectionClassName="border-y-light/5 border-y pt-5 sm:pt-10"
      header={{
        subTitle,
        mainTitle: "Responsibilities",
      }}
      data={responsibilitiesData}
      firstImage={{
        src: "https://i.ibb.co/bR64MC8J/responsibilities-01.webp",
        alt: "Responsibilities illustration",
      }}
      secondImage={{
        src: "https://i.ibb.co/ccN7T46f/responsibilities-02.webp",
        alt: "Responsibilities illustration",
      }}
      secondSectionImageOrder="right"
      listVariant="bullet"
      gradientPosition="left"
    />
  );
}
