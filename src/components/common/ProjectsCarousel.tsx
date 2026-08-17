"use client";

import Button from "@/components/ui/Button";
import CarouselArrow from "@/components/ui/CarouselArrow";
import { carouselResponsive } from "@/data/carouselResponsive";
import dynamic from "next/dynamic";
import Image from "next/image";

const Carousel = dynamic(() => import("react-multi-carousel"), {
  ssr: false,
});

export interface CarouselProject {
  id: number;
  title: string;
  imgUrl: string;
  description?: string;
}

interface ProjectsCarouselProps {
  projects: CarouselProject[];
  basePath?: string;
}

export default function ProjectsCarousel({
  projects,
  basePath = "/projects",
}: ProjectsCarouselProps) {
  if (!projects || projects.length === 0) return null;

  return (
    <Carousel
      key={projects.map((p) => p.id).join("-")}
      responsive={carouselResponsive}
      infinite
      autoPlay
      autoPlaySpeed={3000}
      draggable
      pauseOnHover
      showDots={false}
      customTransition="transform 1s ease-in-out"
      keyBoardControl={false}
      minimumTouchDrag={80}
      transitionDuration={1000}
      itemClass="p-2"
      customLeftArrow={<CarouselArrow direction="left" />}
      customRightArrow={<CarouselArrow direction="right" />}
    >
      {projects.map(({ id, title, imgUrl, description }) => (
        <div
          key={id}
          className="bg-secondary relative flex min-h-125 flex-col gap-3 overflow-hidden rounded-md p-4 sm:min-h-110 xl:min-h-135"
        >
          <div className="relative h-48 w-full">
            <Image
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              src={imgUrl}
              loading="lazy"
              alt={title}
              className="rounded-md object-cover"
            />
          </div>
          <div className="flex flex-1 flex-col gap-2">
            <h2 className="text-primary font-bold xl:text-xl">{title}</h2>
            <p className="text-sm xl:text-lg">
              {description && description.length > 200
                ? description.slice(0, 197) + "..."
                : description}
            </p>
          </div>

          <Button
            href={`${basePath}/${id}`}
            aria_label={`More details about ${title}`}
          >
            View Details
          </Button>
        </div>
      ))}
    </Carousel>
  );
}
