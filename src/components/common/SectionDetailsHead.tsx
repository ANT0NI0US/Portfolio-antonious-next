interface SectionDetailsHeadProps {
  subTitle?: string;
  mainTitle: string;
  description?: string;
  className?: string;
}

export default function SectionDetailsHead({
  subTitle,
  mainTitle,
  description,
  className = "",
}: SectionDetailsHeadProps) {
  return (
    <div className={`mb-8 ${className}`}>
      <span className="text-primary text-xs tracking-widest uppercase">
        {subTitle}
      </span>
      <h2 className="text-3xl font-semibold">{mainTitle}</h2>
      {description && <p className="text-light/50 text-sm">{description}</p>}
    </div>
  );
}
