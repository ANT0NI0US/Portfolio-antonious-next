import Button from "@/components/ui/Button";
import { BuildingIcon } from "@/icons";

export interface TestimonialDetails {
  publisher: string;
  position?: string;
  fullDescription: string[];
  at: string;
}

interface TestimonialsDetailsProps {
  testimonialsDetails: TestimonialDetails;
  onCloseModal?: () => void;
}

export default function TestimonialsDetails({
  testimonialsDetails,
  onCloseModal,
}: TestimonialsDetailsProps) {
  const { publisher, position, fullDescription, at } = testimonialsDetails;

  return (
    <div>
      <div className="rounded-tl-md rounded-tr-md py-6 ps-5 font-bold tracking-wider uppercase">
        <h3 className="w-[80%] text-xl sm:text-2xl">
          {publisher} <span className="text-xs">( {position} )</span>
        </h3>
      </div>
      <div className="bg-secondary flex max-h-[calc(80vh-150px)] min-h-[26vh] flex-col gap-4 overflow-auto p-5 md:gap-5 md:p-5 md:pb-7.5">
        <ul className="flex list-inside list-disc flex-col gap-2 text-sm leading-relaxed">
          {fullDescription.map((para, idx) => (
            <li key={idx}>{para}</li>
          ))}
        </ul>
        <div className="flex items-center gap-1">
          <BuildingIcon className="size-8" />
          <span>{at}</span>
        </div>
      </div>
      <div className="rounded-br-md rounded-bl-md px-4 py-6">
        <div className="ms-auto w-[40%] sm:w-[30%]">
          <Button aria_label="Cancel" variation="danger" onClick={onCloseModal}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}
