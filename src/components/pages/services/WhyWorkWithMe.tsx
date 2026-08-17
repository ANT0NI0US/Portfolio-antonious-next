import TextHead from "@/components/ui/TextHead";
import { VALUE_PROPS } from "@/data/valueProps";
import ValuePropItem from "./ValuePropItem";

export default function WhyWorkWithMe() {
  return (
    <section className="py-8 sm:py-12">
      <div className="container">
        <TextHead
          text="Why Work With Me"
          title="Built On Trust, Not Just Code"
          position="start"
        />

        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUE_PROPS.map((valueProp) => (
            <ValuePropItem {...valueProp} key={valueProp.title} />
          ))}
        </ul>
      </div>
    </section>
  );
}
