import QuoteData from "@/components/common/quoteData";
import Image from "next/image";

export default function FullBleedQuote() {
  return (
    <div className="relative h-[220px] overflow-hidden sm:h-[280px]">
      <Image
        fill
        sizes="100vw"
        loading="lazy"
        src="https://i.ibb.co/DHFLhQby/project-details-cover.webp"
        alt=""
        className="object-cover brightness-[0.22] saturate-[0.3]"
      />
      <div className="bg-secondary/55 absolute inset-0" />
      <div className="flexCenter absolute inset-0 container py-6 text-center">
        <QuoteData quote="From concept to production — built to perform and designed to impress." />
      </div>
    </div>
  );
}
