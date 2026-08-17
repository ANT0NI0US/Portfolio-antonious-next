import SectionDetailsHead from "@/components/common/SectionDetailsHead";
import Button from "@/components/ui/Button";
import Image from "next/image";

const CATEGORY_LABELS: Record<string, string> = {
  smartGate: "Smart Gate",
  creation: "Création",
};

export interface ProofProjectItem {
  id: number;
  title: string;
  description?: string;
  imgUrl: string;
  category: string;
  type?: string;
}

interface ProofProjectProps {
  project: ProofProjectItem | null | undefined;
  subTitle: string;
  mainTitle: string;
}

export default function ProofProject({
  project,
  subTitle,
  mainTitle,
}: ProofProjectProps) {
  if (!project) return null;

  const badge = CATEGORY_LABELS[project.category] || project.type;
  const excerpt =
    project.description && project.description.length > 220
      ? `${project.description.slice(0, 217)}...`
      : project.description;

  return (
    <section className="bg-secondary/20 py-5 sm:py-10">
      <div className="container">
        <SectionDetailsHead
          subTitle={subTitle}
          mainTitle={mainTitle}
          description="A real project from my portfolio where this exact service was put to work."
        />

        <div className="border-light/10 group flex flex-col overflow-hidden rounded-xl border md:flex-row">
          <div className="relative h-56 w-full md:h-auto md:w-2/5">
            <Image
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              loading="lazy"
              src={project.imgUrl}
              alt={project.title}
              className="object-cover"
            />
          </div>
          <div className="bg-secondary/40 flex flex-1 flex-col justify-center gap-3 p-6 sm:p-8">
            <span className="text-primary font-mono text-xs tracking-widest uppercase">
              {badge} — Case Study
            </span>
            <h3 className="text-light text-2xl font-bold">{project.title}</h3>
            <p className="text-light/60 text-sm leading-relaxed">{excerpt}</p>
            <Button
              href={`/projects/${project.id}`}
              aria_label={`View ${project.title} case study`}
              font="w-fit! ms-auto!"
              variation="secondary"
            >
              View Case Study
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
