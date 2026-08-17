import { ReactNode } from "react";

interface GridContainerProps {
  children: ReactNode;
  styles?: string;
}

export default function GridContainer({
  children,
  styles = "sm:grid sm:grid-cols-[repeat(auto-fill,minmax(300px,1fr))]",
}: GridContainerProps) {
  return (
    <div className={`flex flex-col gap-3.75 sm:gap-5 ${styles}`}>
      {children}
    </div>
  );
}
