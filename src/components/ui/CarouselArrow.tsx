"use client";

import { LeftArrowIcon } from "@/icons";

interface CarouselArrowProps {
  direction: "left" | "right";
  onClick?: () => void;
  disabled?: boolean;
  carouselState?: unknown;
  rtl?: boolean;
}

export default function CarouselArrow({
  direction,
  onClick,
  disabled,
}: CarouselArrowProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === "left" ? "Previous slide" : "Next slide"}
      className={`bg-main/60 text-light hover:bg-main/95 absolute top-1/2 z-10 flex size-8 -translate-y-1/2 items-center justify-center rounded-full transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-30 sm:size-11 ${
        direction === "left" ? "left-8" : "right-8"
      }`}
    >
      <LeftArrowIcon
        className={`${direction === "right" ? "rotate-180" : ""} size-4 sm:size-8`}
      />
    </button>
  );
}
