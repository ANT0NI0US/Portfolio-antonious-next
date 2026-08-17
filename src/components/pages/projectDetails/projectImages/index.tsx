"use client";

import SectionDetailsHead from "@/components/common/SectionDetailsHead";
import { carouselResponsive } from "@/data/carouselResponsive";
import { ProjectData } from "@/data/projects";
import dynamic from "next/dynamic";
import { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import ProjectImageModal from "./ProjectImageModal";
import Image from "next/image";

const Carousel = dynamic(() => import("react-multi-carousel"), {
  ssr: false,
});

interface ProjectImagesProps {
  project: Pick<ProjectData, "imageColleges">;
  subTitle: string;
}

export default function ProjectImages({
  project,
  subTitle,
}: ProjectImagesProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openModal = (index: number) => {
    setSelectedIndex(index);
    setIsOpen(true);
  };

  const images = project.imageColleges;
  if (!images || images.length === 0) return null;

  return (
    <>
      <section className="shadow-secondary from-main to-secondary relative bg-linear-to-b from-20% to-100% py-5 sm:py-10">
        <div className="container">
          <SectionDetailsHead subTitle={subTitle} mainTitle="Project Gallery" />
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
            {images.map(({ src, alt }, index) => (
              <div key={alt} className="flex flex-col gap-1">
                <div className="relative h-50 w-full">
                  <Image
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    src={src}
                    alt={alt}
                    loading="lazy"
                    decoding="async"
                    className="cursor-pointer object-cover object-center"
                    onClick={() => openModal(index)}
                  />
                </div>
                <span className="text-center font-medium">{alt}</span>
              </div>
            ))}
          </Carousel>
        </div>
      </section>
      {/* Fullscreen Modal */}
      <ProjectImageModal
        images={images}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
      />
    </>
  );
}
