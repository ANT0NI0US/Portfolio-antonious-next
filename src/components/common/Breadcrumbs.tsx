import Link from "next/link";

export interface Crumb {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: Crumb[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex flex-wrap items-center justify-center gap-2 font-mono text-xs uppercase sm:text-sm"
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <span key={item.label} className="flex items-center gap-2">
            {index > 0 && <span className="text-light/20">/</span>}
            {isLast || !item.path ? (
              <span className="text-primary" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link
                href={item.path}
                aria-label={`Go to ${item.label}`}
                title={`Go to ${item.label}`}
                className="text-light/45 hover:text-light transition-colors"
              >
                {item.label}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
