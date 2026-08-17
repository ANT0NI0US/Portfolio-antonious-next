import { ContactIcon, CvIcon } from "@/icons";
import Button from "@/components/ui/Button";

const mainLinks: {
  to: string;
  icon: typeof ContactIcon;
  text: string;
  btnType?: "primary" | "secondary" | "delete" | "danger";
  target?: string;
}[] = [
  {
    to: "/contact",
    icon: ContactIcon,
    text: "Contact Me",
    btnType: "secondary",
  },
  {
    to: "https://drive.google.com/file/d/1W58GmYl_eJjOZVTXC0nuiWtVgHn-FoJc/view",
    icon: CvIcon,
    text: "View CV",
    target: "_blank",
  },
];

export default function CTAButtons() {
  return (
    <div className="xs:grid-cols-2 mx-auto grid w-full grid-cols-1 gap-3 md:w-125 2xl:w-137.5 2xl:gap-4">
      {mainLinks.map(({ to, icon: Icon, text, target, btnType }) => (
        <Button
          key={text}
          aria_label={text}
          href={to}
          target={target}
          variation={btnType}
          size="large"
        >
          <div className="flexCenter gap-2">
            <Icon />
            <span>{text}</span>
          </div>
        </Button>
      ))}
    </div>
  );
}
