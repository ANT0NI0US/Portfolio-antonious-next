"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const CATEGORY_LABELS: Record<string, string> = {
  smartGate: "Smart Gate",
  creation: "Création",
};

export interface ProjectCardData {
  id: number;
  title: string;
  imgUrl: string;
  category: string;
  type?: string;
}

interface ProjectCardProps {
  project: ProjectCardData;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { id, title, imgUrl, category, type } = project;
  const badge = CATEGORY_LABELS[category] || type;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="shadow-secondary hover:shadow-primary group relative aspect-4/3 overflow-hidden rounded-xl drop-shadow-md transition-all duration-200 hover:shadow-md"
    >
      <Link
        href={`/projects/${id}`}
        aria-label={`View details about ${title}`}
        title={`View details about ${title}`}
      >
        <Image
          fill
          sizes="(min-width: 640px) 300px, 100vw"
          loading="lazy"
          src={imgUrl}
          alt={title}
          className="h-full w-full rounded-2xl object-cover object-center transition-transform duration-500 group-hover:scale-110"
        />

        <span className="bg-main/80 text-primary absolute top-3 left-3 rounded-full px-3 py-1 text-xs font-semibold">
          {badge}
        </span>

        <div className="from-main via-main/60 absolute inset-0 flex items-end bg-linear-to-t to-transparent p-4">
          <p className="text-light text-lg font-bold uppercase xl:text-xl">
            {title}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
