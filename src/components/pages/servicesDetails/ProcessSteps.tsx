import SectionDetailsHead from "@/components/common/SectionDetailsHead";

interface ProcessStepsProps {
  steps: string[];
  subTitle: string;
  mainTitle: string;
}

export default function ProcessSteps({
  steps,
  subTitle,
  mainTitle,
}: ProcessStepsProps) {
  return (
    <section className="bg-secondary/20 py-5 sm:py-10">
      <div className="container">
        <SectionDetailsHead subTitle={subTitle} mainTitle={mainTitle} />

        <ol className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps?.map((step, index) => (
            <li key={index} className="relative flex flex-col gap-3">
              <span className="text-primary font-mono text-4xl font-black opacity-25">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-light/70 text-sm leading-relaxed">{step}</p>

              {index < steps.length - 1 && (
                <span className="bg-primary/25 absolute top-5 -right-4 hidden h-px w-8 lg:block" />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
