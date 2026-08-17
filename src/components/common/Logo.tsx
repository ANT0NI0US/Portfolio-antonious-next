import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  loading?: "eager" | "lazy";
}

export default function Logo({ loading = "eager" }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Go to top — Antonious Nasr home"
      title="Go to top — Antonious Nasr home"
    >
      <Image
        className="max-h-full max-w-36 bg-contain bg-center sm:w-44 sm:max-w-44 lg:w-56 lg:max-w-56"
        src="https://i.ibb.co/7dCjkpdd/Antonious-Nasr-Logo.webp"
        alt="Antonious Nasr — Logo"
        loading={loading}
        decoding="async"
        width={224}
        height={56}
      />
    </Link>
  );
}
