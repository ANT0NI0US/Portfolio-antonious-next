import ProjectDetailsSplitSection from "../ProjectDetailsSplitSection";

interface ChallengesProps {
  challengesData?: string[];
  subTitle: string;
}

export default function Challenges({
  challengesData,
  subTitle,
}: ChallengesProps) {
  return (
    <ProjectDetailsSplitSection
      sectionClassName="border-b-light/5 border-b pt-5 sm:pt-10"
      header={{
        subTitle: subTitle,
        mainTitle: "Challenges Solved",
      }}
      data={challengesData}
      firstImage={{
        src: "https://i.ibb.co/F4Kww0g8/project-details-01.webp",
        alt: "Challenges illustration",
      }}
      secondImage={{
        src: "https://i.ibb.co/sv6Dxbt5/project-details-02.webp",
        alt: "Challenges illustration",
      }}
      firstSectionImageOrder="right"
      listVariant="number"
      gradientPosition="right"
    />
  );
}
