interface InlineListProps {
  items?: string[];
}

export default function InlineList({ items = [] }: InlineListProps) {
  if (!items.length) return null;

  return (
    <p className="text-light/65 capitalize">
      {items.map((item, index) => (
        <span key={item}>
          {item}
          {index !== items.length - 1 && " - "}
        </span>
      ))}
    </p>
  );
}
