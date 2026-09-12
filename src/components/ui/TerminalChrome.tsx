import { ReactNode } from "react";

interface TerminalChromeProps {
  label?: string;
  children?: ReactNode;
  className?: string;
}

export default function TerminalChrome({
  label,
  children,
  className = "",
}: TerminalChromeProps) {
  return (
    <div
      className={`border-light/10 bg-secondary w-full overflow-hidden rounded-xl border shadow-2xl ${className}`}
    >
      <div className="border-light/10 bg-main/60 flex items-center gap-2 border-b px-4 py-3">
        <span className="bg-error size-2.5 rounded-full" />
        <span className="bg-primary size-2.5 rounded-full" />
        <span className="bg-light/60 size-2.5 rounded-full" />
        {label && (
          <span className="text-light/55 ml-2 font-mono text-xs">{label}</span>
        )}
      </div>
      <div className="px-5 py-6 font-mono text-xs leading-loose sm:text-sm">
        {children}
      </div>
    </div>
  );
}
