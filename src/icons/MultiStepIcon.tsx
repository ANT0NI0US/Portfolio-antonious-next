import Icon from "@/components/ui/Icon";
import { IconProps } from "./types";

export default function MultiStepIcon(props: IconProps) {
  return (
    <Icon {...props} stroke="none" fill="currentColor" viewBox="0 0 76 76">
      <path
        fill="currentColor"
        fillOpacity="1"
        strokeWidth="0.2"
        strokeLinejoin="round"
        d="M 19,55.4166L 28.5,55.4166L 28.5,44.3333L 39.5833,44.3333L 39.5833,33.25L 50.6667,33.25L 50.6667,22.1667L 63.3333,22.1667L 63.3333,26.9167L 55.4167,26.9167L 55.4167,38L 44.3333,38L 44.3333,49.0833L 33.25,49.0833L 33.25,60.1666L 19,60.1667L 19,55.4166 Z M 34.8333,34.4375L 30.0833,39.1875L 30.0833,30.875L 21.7709,39.1876L 17.8125,35.2293L 26.125,26.9167L 17.8125,26.9167L 22.5625,22.1667L 34.8333,22.1667L 34.8333,34.4375 Z "
      />
    </Icon>
  );
}
