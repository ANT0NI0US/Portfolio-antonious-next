import { AwardIcon } from "@/icons";
import Qualification from "./Qualification";
import QualificationItem from "./QualificationItem";
import { Certifications } from "@/data/Certifications";
import Button from "@/components/ui/Button";

export default function Certificate() {
  return (
    <Qualification title="Certifications" icon={AwardIcon}>
      {Certifications.map(({ id, date, place, title, href }) => (
        <QualificationItem date={date} key={id}>
          <span className="relative w-fit py-1">
            {place}
            <span className="border-primary absolute top-0 right-0 h-2 w-4 translate-x-1/2 -translate-y-1/2 rounded-tr-md border-t-2 border-r-2" />
            <span className="border-primary absolute bottom-0 left-0 h-2 w-4 -translate-x-1/2 translate-y-1/2 rounded-bl-md border-b-2 border-l-2" />
          </span>
          <p className="py-2">{title}</p>
          <Button
            font="sm:ms-auto sm:w-[170px]! mt-4"
            href={href}
            target="_blank"
            aria_label="Credential URL"
            variation="secondary"
          >
            Credential URL
          </Button>
        </QualificationItem>
      ))}
    </Qualification>
  );
}
