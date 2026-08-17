import Icon from "@/components/ui/Icon";
import { IconProps } from "./types";

export default function MinusIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path
        d="M4 12L20 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
}
