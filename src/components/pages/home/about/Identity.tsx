import Image from "next/image";

export default function Identity() {
  return (
    <div>
      <p className="text-light/70 mt-5 text-base leading-8 first-letter:font-mono first-letter:text-4xl first-letter:font-bold first-letter:drop-shadow-md md:text-lg md:leading-9 first-letter:md:text-5xl">
        I am dedicated to crafting immersive and user-focused digital
        experiences that leave a lasting impact. With a keen eye for design and
        a passion for creating seamless functionality, I transform ideas into
        interactive, visually engaging realities. My approach combines
        creativity, precision, and a deep commitment to delivering exceptional
        results.
      </p>

      {/* PHOTO — bracket framed, tied to the "code" identity */}
      <div className="mt-8 flex items-center gap-4">
        <div className="border-light/10 bg-secondary size-28 shrink-0 overflow-hidden rounded-full border">
          <Image
            src="https://res.cloudinary.com/dnekgcumk/image/upload/v1777467024/Antonious_Nasr_Frontend_developer_gidlhi.webp"
            alt="Antonious Nasr — Frontend Developer profile"
            loading="lazy"
            decoding="async"
            width="200"
            height="200"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="border-light/15 relative flex-1 rounded-xl border border-dashed py-6">
          <span className="bg-main text-light/40 absolute -top-2.5 left-3 px-2 text-[11px]">
            {"{ profile.webp }"}
          </span>
        </div>
      </div>
    </div>
  );
}
