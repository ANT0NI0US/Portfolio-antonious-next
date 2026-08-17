import Link from "next/link";
import { IconProps } from "@/icons/types";
import { ComponentType } from "react";
import MainTitle from "./MainTitle";

interface FooterLinksProps {
  title: string;
  links: {
    path: string;
    text: string;
    icon: ComponentType<IconProps>;
  }[];
}

export default function FooterLinks({ title, links }: FooterLinksProps) {
  return (
    <div className="flex w-full flex-col gap-1 sm:gap-2">
      <MainTitle title={title} />
      <div className="mt-2 flex w-full flex-col gap-1.5">
        {links.map(({ path, text, icon: Icon }) => (
          <Link
            key={path}
            href={path}
            aria-label={text}
            title={text}
            className="hover:text-primary text-light group flex w-fit cursor-pointer items-center justify-center gap-1.5 transition-all sm:justify-start"
          >
            <Icon />
            <span className="relative">
              {text}
              <span className="bg-primary absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 transition-transform duration-500 ease-in-out group-hover:scale-x-100" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
