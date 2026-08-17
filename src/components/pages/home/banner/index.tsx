import SocialLinks from "@/components/common/SocialLinks";
import BannerHero from "./BannerHero";
import CTAButtons from "./CTAButtons";
import Frontend from "./Frontend";

export default function Banner() {
  return (
    <section
      id="overview"
      className="from-main via-secondary/65 to-main bg-linear-to-t"
    >
      <div className="container flex w-full flex-col items-center justify-center gap-5 py-5 text-center lg:h-[calc(100vh-80px)] lg:py-0 xl:gap-6 2xl:gap-8">
        {/* LCP - FIRST PAINT */}
        <BannerHero />

        {/* MY JOB CAREER TITLE */}
        <Frontend />

        {/* SOCIAL LINKS */}
        <SocialLinks />

        {/* CALL TO ACTION BUTTONS */}
        <CTAButtons />
      </div>
    </section>
  );
}
