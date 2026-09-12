import TextHead from "@/components/ui/TextHead";
import Intro from "./Intro";
import Terminal from "./Terminal";

export default function IntroTerminal() {
  return (
    <section className="container py-8 sm:py-14">
      <TextHead
        text="Hello"
        title="A Quick Hello Before The Pitch"
        position="start"
      />

      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-3 lg:gap-12">
        <Terminal />
        <Intro />
      </div>
    </section>
  );
}
