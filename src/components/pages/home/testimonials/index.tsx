import TextHead from "@/components/ui/TextHead";
import AllTestimonials from "./AllTestimonials";

export default function Testimonials() {
  return (
    <section className="container py-5 sm:py-10" id="testimonials">
      <TextHead text="Testimonials" title="What People Say About My Work" />

      <AllTestimonials />
    </section>
  );
}
