import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import type { Metadata } from "next";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const currentUrl = "https://antonious-nasr-kamel-portfolio.vercel.app/";
  const title = "Antonious Nasr | Frontend Developer";
  const description =
    "Frontend Developer specializing in React, Next.js, Tailwind CSS & TypeScript. 3+ years of experience building scalable, high-performance web applications.";
  const image =
    "https://res.cloudinary.com/dnekgcumk/image/upload/v1747723827/Group_5_rexbzl.png";

  return {
    title,
    description,

    icons: {
      icon: "/icon.png",
      shortcut: "/icon.png",
      apple: "/icon.png",
    },

    alternates: {
      canonical: currentUrl,
    },

    authors: [{ name: "Antonious nasr" }],

    keywords: [
      "Antonious Nasr",
      "Frontend Developer",
      "React Developer",
      "Next.js Developer",
      "Next.js",
      "React.js",
      "React",
      "Javascript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "React Hook Form",
      "EmailJS",
      "React Multi Carousel",
      "Framer Motion",
      "TypeScript",
      "Portfolio",
      "Cairo",
      "Egypt",
      "Alexandria",
    ],

    openGraph: {
      type: "website",
      url: currentUrl,
      title,
      description,

      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "antonious nasr kamel portfolio",
          type: "image/jpeg",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,

      images: [image],
      site: currentUrl,
    },
  };
}

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Antonious Nasr",
  jobTitle: "Frontend Developer",
  url: "https://antonious-nasr-kamel-portfolio.vercel.app/",
  image:
    "https://res.cloudinary.com/dnekgcumk/image/upload/v1777467024/Antonious_Nasr_Frontend_developer_gidlhi.webp",
  sameAs: [
    "https://www.linkedin.com/in/antonious-nasr/",
    "https://github.com/ANT0NI0US",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cairo",
    addressCountry: "EG",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
