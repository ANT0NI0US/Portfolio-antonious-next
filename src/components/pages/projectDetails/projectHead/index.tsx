import SectionDetailsHead from "@/components/common/SectionDetailsHead";
import InfoBlock from "@/components/ui/InfoBlock";
import InlineList from "@/components/ui/InlineList";
import Image from "next/image";

interface ProjectHeadProps {
  subTitle: string;
  mainTitle: string;
  title: string;
  imgUrl: string;
  description: string;
  category: string;
  stack?: string[];
  languages?: string[];
}

export default function ProjectHead({
  subTitle,
  mainTitle,
  title,
  imgUrl,
  description,
  category,
  stack = [],
  languages = [],
}: ProjectHeadProps) {
  return (
    <section className="from-main via-secondary/80 to-main bg-gradient-to-t py-5 sm:py-10">
      <div className="container flex flex-col items-center justify-center gap-20 md:flex-row">
        <div className="flex w-full flex-col gap-4 self-start md:w-[55%]">
          <SectionDetailsHead
            subTitle={subTitle}
            mainTitle={mainTitle}
            className="mb-0!"
          />

          <p className="text-light/65 text-sm sm:text-lg">{description}</p>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <InfoBlock label="Category">
              <span className="text-light/65 capitalize">{category}</span>
            </InfoBlock>

            {stack.length ? (
              <InfoBlock label="Stack">
                <InlineList items={stack} />
              </InfoBlock>
            ) : (
              <></>
            )}

            {languages.length ? (
              <InfoBlock label="Languages">
                <InlineList items={languages} />
              </InfoBlock>
            ) : (
              <></>
            )}
          </div>
        </div>

        <Image
          width={600}
          height={450}
          src={imgUrl}
          alt={title || mainTitle}
          loading="lazy"
          decoding="async"
          className="relative h-auto w-full rounded-md object-cover md:w-[45%]"
        />
      </div>
    </section>
  );
}
