"use client";

import { links } from "@/data/links";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BigScreenLinks() {
  const pathname = usePathname();

  return (
    <ul className="hidden h-full gap-4 md:items-center md:justify-center lg:flex">
      {links?.map(({ text, path, icon: Icon }) => {
        const isActive = pathname === path;

        return (
          <li key={text}>
            <Link
              href={path}
              aria-label={text}
              title={text}
              aria-current={isActive ? "page" : undefined}
              className={`group flexCenter relative w-full cursor-pointer gap-1.5 rounded-full p-4 font-semibold transition-all hover:font-bold xl:text-lg ${
                isActive
                  ? "text-primary font-bold"
                  : "hover:text-primary text-light"
              }`}
            >
              <Icon />
              <span>{text}</span>
              <span
                className={`bg-primary absolute bottom-2.5 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full transition-transform duration-300 ease-in-out ${
                  isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
