import { DocumentIcon, GithubIcon, LinkIcon, VideoIcon } from "@/icons";
import { ProjectData } from "@/data/projects";

type ResourceLinkKey = "url" | "githubLink" | "video" | "documentation";

const RESOURCE_LINKS: {
  key: ResourceLinkKey;
  label: string;
  icon: typeof LinkIcon;
}[] = [
  { key: "url", label: "Live Demo", icon: LinkIcon },
  { key: "githubLink", label: "View Code", icon: GithubIcon },
  { key: "video", label: "Watch Demo", icon: VideoIcon },
  { key: "documentation", label: "Documentation", icon: DocumentIcon },
];

interface ResourceLinksProps {
  project: Pick<ProjectData, ResourceLinkKey>;
}

export default function ResourceLinks({ project }: ResourceLinksProps) {
  const availableLinks = RESOURCE_LINKS.filter(({ key }) => project[key]);

  if (availableLinks.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-3">
      {availableLinks.map(({ key, label, icon: Icon }) => (
        <a
          key={key}
          href={project[key]}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          title={label}
          className="border-primary/40 text-light hover:bg-primary hover:text-secondary flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-semibold transition-colors duration-300"
        >
          <Icon className="size-4" />
          {label}
        </a>
      ))}
    </div>
  );
}
