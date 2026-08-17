import type { Metadata } from "next";

export const SITE_URL = "https://antonious-nasr-kamel-portfolio.vercel.app";
const DEFAULT_IMAGE =
  "https://res.cloudinary.com/dnekgcumk/image/upload/v1747723827/Group_5_rexbzl.png";

interface SeoOptions {
  title: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string[];
}

export function buildMetadata({
  title,
  description,
  path = "/",
  image = DEFAULT_IMAGE,
  keywords,
}: SeoOptions): Metadata {
  const canonical = `${SITE_URL}${path}`;

  return {
    title,
    description,
    keywords,
    alternates: { canonical },
    openGraph: {
      type: "website",
      url: canonical,
      title,
      description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
