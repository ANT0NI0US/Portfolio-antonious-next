import Image from "next/image";

interface ProjectSectionImageProps {
  src: string;
  alt: string;
}

export default function ProjectSectionImage({
  src,
  alt,
}: ProjectSectionImageProps) {
  return (
    <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden">
      <Image
        fill
        sizes="(min-width: 640px) 50vw, 100vw"
        loading="lazy"
        src={src}
        alt={alt}
        className="object-cover"
      />
    </div>
  );
}
