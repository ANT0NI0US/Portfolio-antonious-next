import { ReactNode } from "react";

interface InfoBlockProps {
  label: string;
  children: ReactNode;
}

export default function InfoBlock({ label, children }: InfoBlockProps) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-primary text-sm tracking-widest uppercase">
        {label}
      </span>
      {children}
    </div>
  );
}
