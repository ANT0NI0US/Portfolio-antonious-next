import Icon from "@/components/ui/Icon";
import { IconProps } from "./types";

export default function ListIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M3 5h.01" />
      <path d="M3 12h.01" />
      <path d="M3 19h.01" />
      <path d="M8 5h13" />
      <path d="M8 12h13" />
      <path d="M8 19h13" />
    </Icon>
  );
}
