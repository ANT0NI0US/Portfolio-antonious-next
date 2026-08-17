import TextHead from "@/components/ui/TextHead";
import Accordion from "./Accordion";

export default function Questions() {
  return (
    <section id="faq" className="py-5 sm:py-10">
      <div className="container">
        <TextHead text="FAQ" title="Have any questions" />

        <Accordion />
      </div>
    </section>
  );
}
