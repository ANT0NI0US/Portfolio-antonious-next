import Image from "next/image";
import Breadcrumbs, { Crumb } from "@/components/common/Breadcrumbs";
import { SITE_URL } from "@/components/common/Seo";

interface PageHeroProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  crumbs: Crumb[];
}

export default function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
}: PageHeroProps) {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.label,
      ...(crumb.path && { item: `${SITE_URL}${crumb.path}` }),
    })),
  };

  return (
    <section className="relative h-[60vh] overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Image
        fill
        preload
        sizes="100vw"
        src="https://i.ibb.co/zVjPg0zV/page-hero.webp"
        alt=""
        decoding="async"
        className="object-cover brightness-[0.22] saturate-[0.3]"
      />
      <div className="bg-secondary/55 absolute inset-0" />
      <div className="absolute inset-0 container flex flex-col items-center justify-center gap-3.5 py-6 text-center">
        {(eyebrow || title) && (
          <div className="text-center">
            {eyebrow && (
              <span className="text-primary font-mono text-xs tracking-widest uppercase">
                {`// ${eyebrow}`}
              </span>
            )}
            {title && (
              <h1 className="text-light mt-2 text-2xl font-extrabold uppercase sm:text-4xl md:text-5xl">
                {title}
              </h1>
            )}
            {description && (
              <p className="text-light/55 mx-auto mt-3 max-w-xl text-sm sm:text-base">
                {description}
              </p>
            )}
          </div>
        )}
        <Breadcrumbs items={crumbs} />
      </div>
    </section>
  );
}
