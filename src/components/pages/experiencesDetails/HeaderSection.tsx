import { ExperienceData } from "@/data/experiences";
import { CalendarIcon, LocationIcon } from "@/icons";

const META_BADGE =
  "flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-light/80 backdrop-blur-sm";

interface HeaderSectionProps {
  experience: ExperienceData;
}

export default function HeaderSection({ experience }: HeaderSectionProps) {
  const {
    title,
    jobTitle,
    summary,
    year,
    location,
    employmentType,
    employmentMode,
    companyLogo,
  } = experience;
  return (
    <section className="from-main via-secondary/80 to-main bg-linear-to-t py-5 sm:py-10">
      <div className="container flex flex-col gap-4">
        <div className="flex flex-col-reverse items-center gap-4 sm:flex-row">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={companyLogo}
            alt={title}
            loading="eager"
            decoding="async"
            className="size-20 rounded-full"
          />
          <h2 className="text-center text-2xl font-semibold sm:text-3xl">
            {jobTitle}
          </h2>
        </div>

        {/* Summary */}
        <p className="text-light/65 text-sm sm:max-w-6xl sm:text-lg">
          {summary}
        </p>

        {/* Meta badges */}
        <div className="flex flex-wrap items-center justify-end gap-2">
          <div className={META_BADGE}>
            <CalendarIcon />
            <span>{year}</span>
          </div>
          <div className={META_BADGE}>
            <LocationIcon />
            <span>{location}</span>
          </div>
          <div className={META_BADGE}>
            <span>{employmentType}</span>
          </div>
          <div className={META_BADGE}>
            <span>{employmentMode}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
