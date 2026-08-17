import SectionDetailsHead from "@/components/common/SectionDetailsHead";

interface KeyOutcomesProps {
  outcomesData?: string[];
  subTitle: string;
  mainTitle?: string;
}

export default function KeyOutcomes({
  outcomesData,
  subTitle,
  mainTitle = "Key Outcomes",
}: KeyOutcomesProps) {
  return (
    <section className="border-b-light/5 border-b py-5 sm:py-10">
      <div className="container">
        <SectionDetailsHead subTitle={subTitle} mainTitle={mainTitle} />

        <ul className="relative grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {outcomesData?.map((item, index) => (
            <li
              key={index}
              className="from-main/65 to-primary/25 border-primary/18 flex min-h-[100px] flex-row gap-2.5 rounded-md border bg-gradient-to-br from-80% p-4 sm:min-h-[150px] sm:flex-col sm:gap-2"
            >
              <span className="text-primary text-2xl font-semibold">
                0{index + 1}
              </span>
              <p className="text-light/65 text-xs leading-relaxed">{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
