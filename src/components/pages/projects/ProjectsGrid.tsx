"use client";

import FilterSidebar from "@/components/common/FilterSidebar";
import Pagination from "@/components/common/Pagination";
import ProjectCard from "@/components/common/ProjectCard";
import GridContainer from "@/components/ui/GridContainer";
import { PAGE_SIZE } from "@/constants/pagination";
import { creationProjects } from "@/data/creationProjects";
import { personalProjects } from "@/data/projects";
import { smartGateProjects } from "@/data/smartGateProjects";
import { useMemo, useRef, useState } from "react";

const allProjects = [
  ...smartGateProjects,
  ...creationProjects,
  ...personalProjects,
];

const SOURCE_OPTIONS = ["All", "Smart Gate", "Création", "Personal"];
const TYPE_OPTIONS = ["All", "React", "Html & CSS & JS", "Games"];

const SOURCE_TO_CATEGORY: Record<string, string> = {
  "Smart Gate": "smartGate",
  Création: "creation",
  Personal: "personal",
};

export default function ProjectsGrid() {
  const [source, setSource] = useState("All");
  const [type, setType] = useState("All");
  const [page, setPage] = useState(1);
  const gridRef = useRef<HTMLDivElement>(null);

  const filteredProjects = useMemo(() => {
    let list = allProjects;

    if (source !== "All") {
      list = list.filter((p) => p.category === SOURCE_TO_CATEGORY[source]);
    }

    if (source === "Personal" && type !== "All") {
      list = list.filter((p) => "type" in p && p.type === type);
    }

    return list;
  }, [source, type]);

  const totalPages = Math.ceil(filteredProjects.length / PAGE_SIZE);
  const paginatedProjects = filteredProjects.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE,
  );

  const handleSelectSource = (nextSource: string) => {
    setSource(nextSource);
    setType("All");
    setPage(1);
  };

  const handleSelectType = (nextType: string) => {
    setType(nextType);
    setPage(1);
  };

  const handlePageChange = (nextPage: number) => {
    setPage(nextPage);
    gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const groups = [
    {
      title: "Source",
      options: SOURCE_OPTIONS,
      selected: source,
      onSelect: handleSelectSource,
    },
    ...(source === "Personal"
      ? [
          {
            title: "Type",
            options: TYPE_OPTIONS,
            selected: type,
            onSelect: handleSelectType,
          },
        ]
      : []),
  ];

  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
      <FilterSidebar groups={groups} />

      <div ref={gridRef} className="flex-1 scroll-mt-24">
        <GridContainer>
          {paginatedProjects.map(({ id, title, imgUrl, category, ...rest }) => (
            <ProjectCard
              key={id}
              project={{
                id,
                title,
                imgUrl,
                category,
                type: "type" in rest ? rest.type : undefined,
              }}
            />
          ))}
        </GridContainer>

        {filteredProjects.length === 0 && (
          <p className="text-light/50 py-10 text-center">
            No projects found in this category yet.
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
