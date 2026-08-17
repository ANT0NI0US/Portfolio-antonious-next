import Icon from "@/components/ui/Icon";
import { IconProps } from "./types";

export default function TextEditorIcon(props: IconProps) {
  return (
    <Icon {...props} stroke="none" fill="currentColor" viewBox="0 0 512 512">
      <g>
        <g>
          <path
            d="M0,15.461v124.724h166.299v356.354h136.602V140.185h166.299V15.461H0z M451.382,122.367H285.083v356.354H184.116V122.367
			H17.818V33.279h433.564V122.367z"
          />
        </g>
      </g>
      <g>
        <g>
          <polygon points="41.575,57.036 41.575,95.641 59.392,95.641 59.392,74.853 210.843,74.853 210.843,57.036 		" />
        </g>
      </g>
      <g>
        <g>
          <rect x="228.661" y="57.04" width="29.696" height="17.818" />
        </g>
      </g>
      <g>
        <g>
          <path
            d="M469.199,282.727H512l-75.466-120.746l-75.466,120.746h42.801v89.089h-42.801l75.466,120.746L512,371.815h-42.801V282.727
			z M479.852,389.633l-43.318,69.31l-43.318-69.31h28.47V264.909h-28.47l43.318-69.31l43.318,69.31h-28.47v124.724H479.852z"
          />
        </g>
      </g>
    </Icon>
  );
}
