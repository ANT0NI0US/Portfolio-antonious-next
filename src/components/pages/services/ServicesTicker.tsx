import Marquee from "@/components/ui/Marquee";
import { allServices } from "@/data/allServices";

export default function ServicesTicker() {
  return (
    <div className="overflow-hidden py-4">
      <Marquee duration={80}>
        {allServices.map(({ id, title, icon: Icon }) => (
          <span
            key={id}
            className="border-light/10 bg-main/40 text-light/80 mr-4 flex items-center justify-center gap-2 rounded-xl border px-4 py-2 text-2xl font-semibold whitespace-nowrap uppercase sm:py-4 sm:text-4xl xl:py-5 xl:text-5xl"
          >
            <Icon className="text-primary size-6 sm:size-8 lg:size-11" />
            {title}
          </span>
        ))}
      </Marquee>
    </div>
  );
}
