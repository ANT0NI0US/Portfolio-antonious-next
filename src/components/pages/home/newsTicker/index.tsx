import Marquee from "@/components/ui/Marquee";
import { getYearsOfExperience } from "@/components/utils/experience";

export default function NewsTicker() {
  const years = getYearsOfExperience();

  const tickerItems = [
    "AVAILABLE FOR FREELANCE WORK",
    `~${years} YEARS BUILDING PRODUCTION REACT APPS`,
    "PIXEL-PERFECT. PERFORMANT. PRODUCTION-READY.",
    "LET'S BUILD SOMETHING EXCEPTIONAL",
    "FROM IDEA TO DEPLOYED PRODUCT",
    "CLEAN CODE. REAL RESULTS.",
  ];

  return (
    <div className="bg-primary text-secondary my-5 overflow-hidden py-3 lg:my-10">
      <Marquee duration={24}>
        {tickerItems.map((text, index) => (
          <span
            key={index}
            className="flex items-center gap-6 pr-6 text-xl font-extrabold tracking-wide whitespace-nowrap uppercase sm:gap-10 sm:pr-10 sm:text-2xl"
          >
            {text}
            <span aria-hidden="true" className="text-secondary/40">
              ★
            </span>
          </span>
        ))}
      </Marquee>
    </div>
  );
}
