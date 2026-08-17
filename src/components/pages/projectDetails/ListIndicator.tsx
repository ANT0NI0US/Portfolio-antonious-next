interface ListIndicatorProps {
  index: number;
  variant?: "number" | "bullet";
}

export default function ListIndicator({ index, variant }: ListIndicatorProps) {
  if (variant === "bullet") {
    return <span className="text-primary">-</span>;
  }

  return (
    <span className="text-primary h-fit rounded-full border p-1.5 text-xs font-semibold">
      {String(index + 1).padStart(2, "0")}
    </span>
  );
}
