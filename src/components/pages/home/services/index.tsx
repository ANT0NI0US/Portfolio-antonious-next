import Service from "@/components/common/service";
import Button from "@/components/ui/Button";
import GridContainer from "@/components/ui/GridContainer";
import TextHead from "@/components/ui/TextHead";
import { allServices } from "@/data/allServices";

const FEATURED_SERVICES_COUNT = 4;

export default function Services() {
  const featuredServices = allServices.slice(0, FEATURED_SERVICES_COUNT);

  return (
    <section className="container py-5 sm:py-10" id="services">
      <TextHead
        text="Our Services"
        title="The Ease-Service Process"
        position="start"
      >
        <Button
          href="/services"
          aria_label="View all services"
          font="w-fit! sm:w-[200px]! ms-auto!"
          variation="secondary"
        >
          View All Services
        </Button>
      </TextHead>

      <GridContainer>
        {featuredServices.map((service) => (
          <Service key={service.id} {...service} />
        ))}
      </GridContainer>
    </section>
  );
}
