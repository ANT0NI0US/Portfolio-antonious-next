import Image from "next/image";

export default function Intro() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 lg:col-span-1">
      {/* PHOTO + ANIMATED RINGS */}
      <div className="relative flex size-32 shrink-0 items-center justify-center sm:size-36">
        <span className="border-primary/40 animate-ring-pulse absolute inset-0 rounded-full border-2" />
        <span className="border-light/25 animate-ring-pulse absolute inset-2 rounded-full border [animation-delay:-1.5s]" />
        <div className="border-light/10 bg-secondary relative size-24 shrink-0 overflow-hidden rounded-full border sm:size-28">
          <Image
            fill
            sizes="112px"
            src="https://res.cloudinary.com/dnekgcumk/image/upload/v1777467024/Antonious_Nasr_Frontend_developer_gidlhi.webp"
            alt="Antonious Nasr — Frontend Developer"
            loading="lazy"
            decoding="async"
            className="object-cover"
          />
        </div>
      </div>

      {/* CAPTION */}
      <div className="flex flex-col items-center gap-1 text-center">
        <span className="text-light font-bold">Antonious Nasr</span>
        <span className="text-light/55 text-sm">Frontend Developer</span>
        <span className="text-primary mt-1 flex items-center gap-1.5 text-xs font-semibold">
          <span className="bg-primary size-1.5 animate-pulse rounded-full" />
          Available for work
        </span>
      </div>
    </div>
  );
}
