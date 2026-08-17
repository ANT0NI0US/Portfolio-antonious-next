import GoldLine from "./GoldLine";

interface QuoteDataProps {
  quote: string;
}

export default function QuoteData({ quote }: QuoteDataProps) {
  return (
    <div className="flexCenter flex-col gap-3">
      <GoldLine />
      <p
        className="text-light max-w-140 leading-[1.55] italic"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(15px, 2.5vw, 22px)",
        }}
      >
        {quote}
      </p>

      <GoldLine />
    </div>
  );
}
