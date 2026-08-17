function toCamel(title: string) {
  const words = title.split(" ");
  return (
    words[0].toLowerCase() +
    words
      .slice(1)
      .map((w) => w[0].toUpperCase() + w.slice(1).toLowerCase())
      .join("")
  );
}

interface ServiceBodyProps {
  title: string;
  description: string;
}

export default function ServiceBody({ title, description }: ServiceBodyProps) {
  return (
    <div className="mt-6 flex-1 px-3 py-4 font-mono text-[12.5px] leading-[1.9]">
      <div>
        <span className="text-light/50">function</span>{" "}
        <span className="text-primary">{toCamel(title)}</span>
        <span className="text-light/40">() {"{"}</span>
      </div>

      <div className="text-light/40 pl-4">return (</div>
      <p className="pl-7 font-sans text-[13px] leading-[1.9]">
        <span className="font-mono">
          <span className="text-light/40">&lt;</span>
          <span className="text-primary/70">p</span>
          <span className="text-light/40">&gt;</span>
        </span>
        <span className="text-light/75">{description}</span>
        <span className="font-mono">
          <span className="text-light/40">&lt;/</span>
          <span className="text-primary/70">p</span>
          <span className="text-light/40">&gt;</span>
        </span>
      </p>
      <div className="text-light/40 pl-4">);</div>
      <div className="text-light/40">{"}"}</div>
    </div>
  );
}
