import CursorPulse from "@/components/ui/CursorPulse";

export default function BannerHero() {
  return (
    <>
      <h1 className="text-light text-4xl font-semibold tracking-wider capitalize sm:text-6xl lg:text-5xl lg:leading-16 xl:text-6xl xl:leading-20 2xl:text-7xl 2xl:leading-24">
        Crafting high-performance
        <span className="text-primary"> web apps </span>
        with modern technologies
      </h1>

      <p className="text-light/70 mt-2 flex items-center justify-center gap-1 font-mono text-base sm:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl">
        <span className="text-light/55">&gt;</span>
        const dev
        <span className="text-light/55">=</span>
        <span className="text-primary">&quot;Antonious Nasr&quot;</span>
        <span className="text-light/55">;</span>
        <CursorPulse className="h-7" />
      </p>
    </>
  );
}
