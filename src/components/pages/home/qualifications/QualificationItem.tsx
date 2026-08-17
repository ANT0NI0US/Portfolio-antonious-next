import { CalendarIcon } from "@/icons";
import { ReactNode } from "react";

interface QualificationItemProps {
  date: string;
  children: ReactNode;
}

export default function QualificationItem({
  date,
  children,
}: QualificationItemProps) {
  return (
    <div className="from-main to-secondary shadow-secondary relative flex transform flex-col gap-1.5 rounded-md bg-linear-to-tr from-55% to-100% p-4 shadow-md transition-all">
      <div className="flex items-center justify-center gap-1.5 self-end text-sm">
        <CalendarIcon />
        <span className="whitespace-nowrap">{date}</span>
      </div>
      {children}
    </div>
  );
}
