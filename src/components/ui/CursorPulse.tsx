interface CursorPulseProps {
  className?: string;
}

export default function CursorPulse({ className }: CursorPulseProps) {
  return (
    <span
      className={`bg-light ml-1 h-3.5 w-1.5 animate-pulse ${className || ""}`}
    />
  );
}
