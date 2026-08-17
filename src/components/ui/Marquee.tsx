import { ReactNode } from "react";

export interface MarqueeProps {
  children: ReactNode;
  duration?: number;
  className?: string;
}

export default function Marquee({
  children,
  duration = 28,
  className = "",
}: MarqueeProps) {
  return (
    <div className={`group flex w-full overflow-hidden ${className}`}>
      <div
        className="animate-marquee flex w-max shrink-0 items-center group-hover:[animation-play-state:paused]"
        style={{ animationDuration: `${duration}s` }}
      >
        {children}
      </div>
      <div
        aria-hidden="true"
        className="animate-marquee flex w-max shrink-0 items-center group-hover:[animation-play-state:paused]"
        style={{ animationDuration: `${duration}s` }}
      >
        {children}
      </div>
    </div>
  );
}
