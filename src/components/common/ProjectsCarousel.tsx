"use client";

import { carouselResponsive } from "@/data/carouselResponsive";
import Button from "@/components/ui/Button";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
      arrows
      draggable
      pauseOnHover
      showDots={false}
      customTransition="transform 1s ease-in-out"
      keyBoardControl={false}
      minimumTouchDrag={80}
      transitionDuration={1000}
      itemClass="p-2"
    >
      {projects.map(({ id, title, imgUrl, description }) => (
        <div
          key={id}
          className="bg-secondary relative flex min-h-[500px] flex-col gap-3 overflow-hidden rounded-md p-4 sm:min-h-[440px] xl:min-h-[540px]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imgUrl}
            loading="lazy"
            alt={title}
            className="h-48 w-full rounded-md object-cover"
          />
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
