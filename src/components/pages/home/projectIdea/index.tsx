import QuoteData from "@/components/common/quoteData";
import Button from "@/components/ui/Button";
import Image from "next/image";

export default function ProjectIdea() {
  return (
    <div className="relative min-h-75 overflow-hidden sm:min-h-100">
      <Image
        fill
        sizes="100vw"
        src="https://i.ibb.co/DHFLhQby/project-details-cover.webp"
        alt="project idea cover"
        loading="lazy"
        decoding="async"
        className="object-cover brightness-[0.22] saturate-[0.3]"
      />
      <div className="bg-secondary/55 absolute inset-0" />
      <div className="absolute inset-0 container flex flex-col items-center justify-center gap-6 py-6 text-center">
        <h2 className="text-primary text-2xl font-extrabold uppercase sm:text-4xl md:text-5xl xl:text-6xl">
          Have a project idea?
        </h2>

        <QuoteData
          quote=" Let me help you turn your idea into an outstanding digital reality.
            I work with you from planning to final execution."
        />

        <div>
          <Button
            variation="secondary"
            aria_label="Start Your Project Now"
            font="w-[250px]! sm:w-[300px]!"
            href="/contact"
            size="large"
          >
            <span>Start Your Project Now</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
