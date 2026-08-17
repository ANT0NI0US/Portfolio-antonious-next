"use client";

import { useState } from "react";
import { LeftArrowIcon } from "@/icons";
import { useOutsideClick } from "@/hooks/useOutsideClick";

interface FilterGroupData {
  title: string;
  options: string[];
  selected: string;
  onSelect: (option: string) => void;
}

interface FilterGroupProps extends FilterGroupData {
  ariaLabel: string;
}

function FilterGroup({
  title,
  options,
  selected,
  onSelect,
  ariaLabel,
}: FilterGroupProps) {
  return (
    <div className="border-light/5 border-b p-3 last:border-b-0">
      <p className="text-light/55 mb-2 px-1 font-mono text-xs tracking-wider uppercase">
        {title}
      </p>
      <ul className="flex flex-col gap-0.5" role="group" aria-label={ariaLabel}>
        {options.map((option) => {
          const isActive = option === selected;
          return (
            <li key={option}>
              <button
                type="button"
                aria-pressed={isActive}
                aria-label={`Filter by ${option}`}
                title={`Filter by ${option}`}
                onClick={() => onSelect(option)}
                className={`flex w-full items-center gap-2 rounded-md px-3 py-2 text-left font-mono text-sm transition-colors ${
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-light/60 hover:bg-light/5 hover:text-light"
                }`}
              >
                <span
                  className={`size-1.5 shrink-0 rounded-full ${isActive ? "bg-primary" : "bg-light/20"}`}
                />
                {option}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

interface FilterSidebarProps {
  groups: FilterGroupData[];
}

export default function FilterSidebar({ groups }: FilterSidebarProps) {
  const [open, setOpen] = useState(false);
  const ref = useOutsideClick<HTMLDivElement>(() => setOpen(false));

  const activeSummary = groups
    .filter((group) => group.selected !== "All")
    .map((group) => group.selected)
    .join(" / ");

  return (
    <aside className="w-full shrink-0 lg:sticky lg:top-24 lg:w-55 lg:self-start">
      {/* DESKTOP SIDEBAR */}
      <div className="bg-secondary border-light/10 hidden overflow-hidden rounded-xl border lg:block">
        <div className="bg-main/60 border-light/10 text-primary/70 border-b px-4 py-3 font-mono text-xs tracking-widest uppercase">
          {"// filters"}
        </div>
        {groups.map((group) => (
          <FilterGroup key={group.title} {...group} ariaLabel={group.title} />
        ))}
      </div>

      {/* MOBILE DROPDOWN */}
      <div className="relative lg:hidden" ref={ref}>
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-label="Toggle filters"
          title="Toggle filters"
          className="bg-secondary border-light/10 text-light flex w-full items-center justify-between gap-2 rounded-xl border px-4 py-3 font-mono text-sm"
        >
          <span>Filters{activeSummary && `: ${activeSummary}`}</span>
          <LeftArrowIcon
            className={`size-4 transition-transform ${open ? "rotate-270" : "rotate-180"}`}
          />
        </button>

        {open && (
          <div className="bg-secondary border-light/10 absolute top-[calc(100%+8px)] z-20 w-full overflow-hidden rounded-xl border shadow-lg">
            {groups.map((group) => (
              <FilterGroup
                key={group.title}
                {...group}
                onSelect={(option) => {
                  group.onSelect(option);
                  setOpen(false);
                }}
                ariaLabel={group.title}
              />
            ))}
          </div>
        )}
      </div>
    </aside>
  );
}
