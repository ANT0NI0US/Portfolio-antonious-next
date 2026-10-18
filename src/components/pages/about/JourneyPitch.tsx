import TextHead from "@/components/ui/TextHead";
import CommitLog from "./CommitLog";
import Manifesto from "./Manifesto";

export default function JourneyPitch() {
  return (
    <section className="from-secondary to-main border-t-light/5 border-t bg-linear-to-b py-8 sm:py-14">
      <div className="container">
        <TextHead text="Journey" title="The Path So Far" />

        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <Manifesto />
          <CommitLog />
        </div>
      </div>
    </section>
  );
}
