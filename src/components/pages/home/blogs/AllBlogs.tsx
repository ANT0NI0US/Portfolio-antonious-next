"use client";

import Button from "@/components/ui/Button";
import { blogs } from "@/data/blogs";
import { carouselResponsive } from "@/data/carouselResponsive";
import dynamic from "next/dynamic";
import Image from "next/image";
import "react-multi-carousel/lib/styles.css";

const Carousel = dynamic(() => import("react-multi-carousel"), {
  ssr: false,
});

export default function AllBlogs() {
  return (
    <Carousel
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
      {blogs?.map(({ title, img, description, post, date }) => (
        <div
          key={title}
          className="bg-secondary relative flex min-h-127.5 flex-col overflow-hidden rounded-md sm:min-h-128 xl:min-h-138"
        >
          <span className="bg-secondary absolute top-1.5 right-1.5 z-10 ms-auto rounded-md p-2 text-sm shadow">
            {date}
          </span>
          <div className="relative h-56 w-full">
            <Image
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              src={img}
              loading="lazy"
              alt={title}
              className="object-cover"
            />
          </div>
          <div className="border-main flex flex-1 flex-col gap-2 border-t-2 p-4">
            <h2 className="text-primary font-bold xl:text-xl">{title}</h2>

            <p className="flex-1 text-sm xl:text-lg">{description}</p>

            <Button
              href={post}
              font="mt-auto!"
              target="_blank"
              aria_label={`Read more about the blog titled "${title}" on LinkedIn`}
              variation="secondary"
            >
              View on LinkedIn
            </Button>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
