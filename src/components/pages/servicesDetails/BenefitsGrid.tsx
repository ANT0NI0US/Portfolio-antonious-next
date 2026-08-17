import SectionDetailsHead from "@/components/common/SectionDetailsHead";
import { ServiceKeyFeature } from "@/data/allServices";

interface BenefitsGridProps {
  benefits: ServiceKeyFeature[];
  subTitle: string;
  mainTitle: string;
}

export default function BenefitsGrid({
  benefits,
  subTitle,
  mainTitle,
}: BenefitsGridProps) {
  return (
    <section className="py-5 sm:py-10">
      <div className="container">
        <SectionDetailsHead subTitle={subTitle} mainTitle={mainTitle} />

        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {benefits?.map(({ title, description, icon: Icon }, index) => (
            <li key={index} className="flex items-start gap-4">
              {Icon && (
                <span className="bg-primary/10 text-primary flex size-11 shrink-0 items-center justify-center rounded-xl">
                  <Icon className="size-5" />
                </span>
              )}
              <div>
                <p className="text-light text-sm font-semibold">{title}</p>
                <p className="text-light/50 mt-1 text-xs leading-[1.65]">
                  {description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
