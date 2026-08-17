import Icon from "@/components/ui/Icon";
import { IconProps } from "./types";

export default function PlusIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path
        d="M6 12H18M12 6V18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
}
