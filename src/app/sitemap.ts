import { SITE_URL } from "@/components/common/Seo";
import { allServices } from "@/data/allServices";
import { creationProjects } from "@/data/creationProjects";
import { experiences } from "@/data/experiences";
import { personalProjects } from "@/data/projects";
import { smartGateProjects } from "@/data/smartGateProjects";
import type { MetadataRoute } from "next";

const allProjects = [
  ...smartGateProjects,
  ...creationProjects,
  ...personalProjects,
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: "monthly", priority: 1 },
    {
      url: `${SITE_URL}/services`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/projects`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/contact`,
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = allServices.map((service) => ({
    url: `${SITE_URL}/services/${service.id}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const projectRoutes: MetadataRoute.Sitemap = allProjects.map((project) => ({
    url: `${SITE_URL}/projects/${project.id}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const experienceRoutes: MetadataRoute.Sitemap = experiences.map(
    (experience) => ({
      url: `${SITE_URL}/experiences/${experience.id}`,
      changeFrequency: "yearly",
      priority: 0.4,
    }),
  );

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...projectRoutes,
    ...experienceRoutes,
  ];
}
