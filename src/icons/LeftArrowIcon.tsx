import Icon from "@/components/ui/Icon";
import { IconProps } from "./types";

export default function LeftArrowIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="m15 18-6-6 6-6" />
    </Icon>
  );
}
