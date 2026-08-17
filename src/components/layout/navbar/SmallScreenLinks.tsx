"use client";

import CreatedBy from "@/components/common/CreatedBy";
import SocialLinks from "@/components/common/SocialLinks";
import Button from "@/components/ui/Button";
import { links } from "@/data/links";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { CloseIcon } from "@/icons";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SmallScreenLinksProps {
  showSidebar: boolean;
  closeSidebar: () => void;
}

export default function SmallScreenLinks({
  showSidebar,
  closeSidebar,
}: SmallScreenLinksProps) {
  const pathname = usePathname();
  const ref = useOutsideClick<HTMLElement>(() => closeSidebar());
  const isActiveLink = (path: string) => pathname === path;

  return (
    <AnimatePresence>
      {showSidebar && (
        <nav className="lg:hidden">
          {/* OVERLAY */}
          <motion.div
            key="overlay"
            className="fixed inset-0 z-100 h-full w-full bg-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />

          {/* SIDEBAR */}
          <motion.nav
            key="sidebar"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.5 }}
            ref={ref}
            className="bg-main text-primary xs:w-75 fixed right-0 bottom-0 z-10000 flex h-full w-full flex-col pt-20 pb-4 shadow-md drop-shadow-xl"
          >
            {/* CLOSE SIDEBAR BUTTON*/}
            <Button
              variation="delete"
              aria_label="Close navigation menu"
              onClick={closeSidebar}
              font="absolute! top-[27px] right-[20px] w-[30px]! h-[30px]! p-2!"
            >
              <CloseIcon className="text-light" />
            </Button>

            {/* LINKS */}
            <div className="flex w-full flex-col">
              {links?.map(({ text, path, icon: Icon }, index) => {
                const isActive = isActiveLink(path);

                return (
                  <div
                    key={text}
                    className={`${
                      index === 0 ? "border-t-2" : ""
                    } flexCenter border-secondary h-full w-full border-b-2 text-center text-lg font-semibold transition-all hover:font-extrabold`}
                  >
                    <Link
                      aria-label={text}
                      title={text}
                      aria-current={isActive ? "page" : undefined}
                      className={`group relative flex h-full w-full items-center gap-1.5 px-4 py-3 font-semibold transition-all hover:font-bold ${
                        isActive
                          ? "text-primary font-bold"
                          : "hover:text-primary text-light"
                      }`}
                      onClick={closeSidebar}
                      href={path}
                    >
                      <Icon />
                      <span className="relative">
                        {text}
                        <span
                          className={`bg-primary absolute -bottom-1 left-0 h-0.5 w-full rounded-full transition-transform duration-300 ease-in-out ${
                            isActive
                              ? "scale-x-100"
                              : "scale-x-0 group-hover:scale-x-100"
                          }`}
                        />
                      </span>
                    </Link>
                  </div>
                );
              })}
            </div>

            <div className="border-secondary container mt-auto flex flex-col gap-4 border-t pt-4">
              <SocialLinks
                Style="justify-start"
                Size="size-5"
                className="border-light hover:bg-secondary hover:border-primary text-light border-2! p-1.5!"
              />
              <CreatedBy position="smallScreens" />
            </div>
          </motion.nav>
        </nav>
      )}
    </AnimatePresence>
  );
}
