import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import TestimonialsDetails, { TestimonialDetails } from "./TestimonialsDetails";

interface TestimonialsDetailsModalProps {
  testimonialsDetails: TestimonialDetails;
}

export default function TestimonialsDetailsModal({
  testimonialsDetails,
}: TestimonialsDetailsModalProps) {
  return (
    <Modal>
      <Modal.Open opens="testimonialsDetails">
        <Button
          aria_label="View Full Testimonial"
          font="mt-4"
          variation="secondary"
        >
          <span>View Full Testimonial</span>
        </Button>
      </Modal.Open>

      <Modal.Window name="testimonialsDetails">
        <TestimonialsDetails testimonialsDetails={testimonialsDetails} />
      </Modal.Window>
    </Modal>
  );
}
