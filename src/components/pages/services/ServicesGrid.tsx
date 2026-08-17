"use client";

import FilterSidebar from "@/components/common/FilterSidebar";
import Pagination from "@/components/common/Pagination";
import Service from "@/components/common/service";
import GridContainer from "@/components/ui/GridContainer";
import { PAGE_SIZE } from "@/constants/pagination";
import { allServices } from "@/data/allServices";
import { useMemo, useRef, useState } from "react";

const CATEGORY_OPTIONS = [
  "All",
  "Development",
  "Performance & SEO",
  "Design & UX",
  "Consulting & Support",
];

export default function ServicesGrid() {
  const [category, setCategory] = useState("All");
  const [page, setPage] = useState(1);
  const gridRef = useRef<HTMLDivElement>(null);

  const filteredServices = useMemo(() => {
    return category === "All"
      ? allServices
      : allServices.filter((service) => service.category === category);
  }, [category]);

  const totalPages = Math.ceil(filteredServices.length / PAGE_SIZE);
  const paginatedServices = filteredServices.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE,
  );

  const handleSelectCategory = (nextCategory: string) => {
    setCategory(nextCategory);
    setPage(1);
  };

  const handlePageChange = (nextPage: number) => {
    setPage(nextPage);
    gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const groups = [
    {
      title: "Category",
      options: CATEGORY_OPTIONS,
      selected: category,
      onSelect: handleSelectCategory,
    },
  ];

  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
      <FilterSidebar groups={groups} />

      <div ref={gridRef} className="flex-1 scroll-mt-24">
        <GridContainer>
          {paginatedServices.map((service) => (
            <Service key={service.id} {...service} />
          ))}
        </GridContainer>

        {filteredServices.length === 0 && (
          <p className="text-light/50 py-10 text-center">
            No services found in this category yet.
          </p>
        )}

        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}
