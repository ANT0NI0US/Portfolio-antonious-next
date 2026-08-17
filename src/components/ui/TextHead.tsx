import { ReactNode } from "react";

interface TextHeadProps {
  text: string;
  title: string;
  position?: "start" | "mid";
  children?: ReactNode;
  className?: string;
}

export default function TextHead({
  text,
  title,
  position = "mid",
  children,
  className,
}: TextHeadProps) {
  const isStart = position === "start";

  return (
    <div
      className={`mb-8 flex w-full flex-col gap-4 sm:flex-row sm:items-center ${
        isStart ? "sm:justify-between" : "justify-center text-center"
      } ${className}`}
    >
      {/* LABEL + HEADING */}
      <div
        className={`flex flex-col gap-1 ${isStart ? "items-start" : "items-center"}`}
      >
        <div className="text-primary flex items-center gap-2">
          {!isStart && (
            <>
              <span className="[&_span]:bg-primary flex gap-1 [&_span]:size-0.5 [&_span]:rounded-full">
                <span />
                <span />
              </span>
              <span className="bg-primary h-0.5 w-8 rounded-full" />
            </>
          )}

          <span className="text-sm font-semibold tracking-wider uppercase sm:text-base">
            {text}
          </span>

          <span className="bg-primary h-0.5 w-8 rounded-full" />
          <span className="[&_span]:bg-primary flex gap-1 [&_span]:size-0.5 [&_span]:rounded-full">
            <span />
            <span />
          </span>
        </div>

        <h2 className="text-light text-2xl font-extrabold uppercase sm:text-3xl md:text-4xl">
          {title}
        </h2>
      </div>

      {/* OPTIONAL — e.g. "View All Project" button in the start variant */}
      {children && <div className="shrink-0">{children}</div>}
    </div>
  );
}
