import Icon from "@/components/ui/Icon";
import { IconProps } from "./types";

export default function PaymentIcon(props: IconProps) {
  return (
    <Icon {...props} stroke="none" fill="currentColor">
      <rect
        x="3"
        y="6"
        width="18"
        height="13"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 10H20.5"
        stroke="#151515"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 15H9"
        stroke="#151515"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
}
