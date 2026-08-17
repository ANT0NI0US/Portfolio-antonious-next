import { LeftArrowIcon } from "@/icons";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative container mb-40 pt-14 sm:pt-16">
      <div className="bg-main/25 flex flex-col items-center gap-8 px-5 py-10 shadow-md sm:px-10 sm:py-15 md:p-20 lg:min-h-[400px] lg:flex-row lg:justify-between lg:gap-0">
        <div className="flex w-full flex-col gap-5 lg:w-[60%]">
          <h2 className="text-3xl font-extrabold uppercase lg:text-5xl">
            Let&apos;s work together
          </h2>

          <p className="text-light/70 max-w-xl text-sm sm:text-base xl:text-xl">
            Have an idea, a project, or a challenge you want to bring to life?
            Let’s turn your vision into a modern, high-performing digital
            experience that looks great, feels effortless to use, and is built
            to make a lasting impact.
          </p>
        </div>

        <Link
          href="/contact"
          className="group flex items-center gap-3.5 self-end text-xl uppercase lg:text-2xl"
        >
          <span>Let&apos;s Talk</span>

          <span className="text-main bg-primary scale-x-[-1] rounded-full p-2.5 transition group-hover:translate-x-1">
            <LeftArrowIcon />
          </span>
        </Link>
      </div>

      {/* Glow */}
      <div className="bg-secondary/75 pointer-events-none absolute end-0 top-1/2 -z-2 h-[140%] w-full -translate-y-1/2 rounded-full blur-[120px] md:w-1/2" />
    </section>
  );
}
