"use client";

import { carouselResponsive } from "@/data/carouselResponsive";
import SectionDetailsHead from "@/components/common/SectionDetailsHead";
import { ProjectData } from "@/data/projects";
import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProjectImageModal from "./ProjectImageModal";

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
      <section className="shadow-secondary from-main to-secondary relative bg-gradient-to-b from-20% to-100% py-5 sm:py-10">
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
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={alt}
                  loading="lazy"
                  decoding="async"
                  className="h-[200px] cursor-pointer rounded-md object-contain object-center"
                  onClick={() => openModal(index)}
                />
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
