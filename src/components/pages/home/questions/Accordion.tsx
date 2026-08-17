"use client";

import { QUESTIONS } from "@/data/questions";
import { MinusIcon, PlusIcon } from "@/icons";
import { useState } from "react";

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <ul className="flex flex-col gap-4">
      {QUESTIONS.map((item, index) => {
        const isOpen = activeIndex === index;

        return (
          <li
            key={index}
            className={`border-secondary overflow-hidden rounded-xl border-2 p-4 transition-colors duration-300 ${isOpen ? "bg-secondary" : ""}`}
          >
            {/* Header */}
            <button
              onClick={() => toggleItem(index)}
              className="flex w-full items-center justify-between gap-2 py-2 transition-colors"
            >
              <h3 className="font-head font-fancy w-[90%] text-start font-medium wrap-break-word sm:text-xl md:text-2xl">
                {item.title}
              </h3>

              <span className="relative size-8">
                <PlusIcon
                  className={`absolute inset-0 size-8 transition-all duration-300 ${
                    isOpen
                      ? "scale-75 rotate-90 opacity-0"
                      : "scale-100 rotate-0 opacity-100"
                  }`}
                />

                <MinusIcon
                  className={`absolute inset-0 size-8 transition-all duration-300 ${
                    isOpen
                      ? "scale-100 rotate-0 opacity-100"
                      : "scale-75 -rotate-90 opacity-0"
                  }`}
                />
              </span>
            </button>

            {/* Content */}
            <div
              className={`grid transition-all duration-500 ease-in-out ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="text-light/60 overflow-hidden text-xs sm:text-sm md:text-base">
                {item.description}
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
