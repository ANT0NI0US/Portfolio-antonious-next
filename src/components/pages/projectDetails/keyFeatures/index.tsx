import SectionDetailsHead from "@/components/common/SectionDetailsHead";
import { ProjectKeyFeature } from "@/data/projects";

interface KeyFeaturesProps {
  featuresData?: ProjectKeyFeature[];
  subTitle: string;
  mainTitle?: string;
}

export default function KeyFeatures({
  featuresData,
  subTitle,
  mainTitle = "Key Features",
}: KeyFeaturesProps) {
  return (
    <section className="pt-5 sm:pt-10">
      <div className="container">
        <SectionDetailsHead subTitle={subTitle} mainTitle={mainTitle} />
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {featuresData?.map(({ title, description, icon: Icon }, index) => (
          <li
            key={index}
            className={`${index % 2 === 0 ? "bg-secondary border-primary/10 hover:border-primary/25" : "bg-main border-light/5 hover:border-primary/20"} flex flex-col gap-2.5 border p-7 transition-colors`}
          >
            {Icon && (
              <Icon className="text-primary bg-primary/10 size-9 rounded-md p-2" />
            )}
            <p className="text-sm font-semibold">{title}</p>
            <p className="text-light/52 text-xs leading-[1.65]">
              {description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
