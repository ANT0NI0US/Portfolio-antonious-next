import Button from "@/components/ui/Button";

export default function Manifesto() {
  return (
    <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left">
      <p className="text-light text-2xl leading-snug font-extrabold sm:text-3xl lg:text-4xl">
        I don&apos;t just build interfaces.{" "}
        <span className="text-primary">
          I build the reason someone stays on your site.
        </span>
      </p>

      <Button
        href="/services"
        aria_label="Explore my services"
        variation="secondary"
        font="w-fit! px-8!"
      >
        Explore My Services
      </Button>
    </div>
  );
}
