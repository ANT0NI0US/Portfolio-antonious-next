import { CloseIcon, LeftArrowIcon } from "@/icons";
import { ProjectImage } from "@/data/projects";
import { Dispatch, SetStateAction } from "react";

interface ProjectImageModalProps {
  images: ProjectImage[];
  selectedIndex: number;
  setSelectedIndex: Dispatch<SetStateAction<number>>;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
}

export default function ProjectImageModal({
  images,
  selectedIndex,
  setSelectedIndex,
  setIsOpen,
  isOpen,
}: ProjectImageModalProps) {
  const closeModal = () => setIsOpen(false);

  const nextImage = () => {
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  if (!isOpen) return null;

  return (
    <div className="bg-main/80 fixed inset-0 z-[99999999999] flex items-center justify-center px-4">
      {/* Close Button */}
      <button
        onClick={closeModal}
        className="absolute top-4 right-4 flex items-center justify-center rounded-full p-1"
        aria-label="Close"
        title="Close"
      >
        <CloseIcon className="size-8" />
      </button>

      {/* Left Arrow */}
      <button
        onClick={prevImage}
        className="absolute left-5 flex items-center justify-center rounded-full p-1"
        aria-label="Previous Image"
        title="Previous Image"
      >
        <LeftArrowIcon className="size-8" />
      </button>

      <div className="flex flex-col gap-1.5">
        {/* Image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={images[selectedIndex].src}
          alt={images[selectedIndex].alt}
          className="max-h-[90vh] max-w-full rounded-md object-contain"
        />
        <p className="text-center text-xl font-bold">
          {images[selectedIndex].alt}
        </p>
      </div>

      {/* Right Arrow */}
      <button
        onClick={nextImage}
        className="absolute right-5 flex items-center justify-center rounded-full p-1"
        aria-label="Next Image"
        title="Next Image"
      >
        <LeftArrowIcon className="size-8 rotate-180" />
      </button>
    </div>
  );
}
