import Icon from "@/components/ui/Icon";
import { IconProps } from "./types";

export default function AnimationIcon(props: IconProps) {
  return (
    <Icon {...props} viewBox="0 0 24 24" fill="currentColor" stroke="none">
      <path d="M22,11H12a1,1,0,0,0-1,1V22a1,1,0,0,0,1,1H22a1,1,0,0,0,1-1V12A1,1,0,0,0,22,11ZM21,21H13V13h8ZM2,13a1,1,0,0,1-1-1V2A1,1,0,0,1,2,1H12a1,1,0,0,1,0,2H3v9A1,1,0,0,1,2,13ZM17,6a1,1,0,0,1,0,2H8v9a1,1,0,0,1-2,0V7A1,1,0,0,1,7,6Z" />
    </Icon>
  );
}
