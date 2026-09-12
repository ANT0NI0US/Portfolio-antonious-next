const milestones = [
  {
    year: "2020",
    title: "Graduated",
    place: "B.Sc. Computer Science, Ain Shams University",
  },
  {
    year: "2023",
    title: "Joined Smart Gate",
    place: "Junior Frontend Developer",
  },
  {
    year: "2025",
    title: "Promoted",
    place: "Mid-Level Frontend Developer @ creation LLC",
  },
  {
    year: "Now",
    title: "Open to bigger challenges",
    place: "Alexandria, Egypt — ready to relocate",
  },
];

export default function CommitLog() {
  return (
    <div className="flex flex-col gap-5">
      {milestones.map(({ year, title, place }) => (
        <div
          key={year}
          className="not-last:border-b-light/10 relative flex items-center overflow-hidden py-5 not-last:border-b last:pb-0"
        >
          <span className="text-primary/10 pointer-events-none absolute -top-2 left-0 text-7xl font-black select-none sm:text-8xl">
            {year}
          </span>
          <div className="relative z-10 flex flex-col gap-0.5 ps-2">
            <span className="text-primary font-mono text-xs tracking-widest uppercase">
              {year}
            </span>
            <h4 className="text-light text-lg font-bold sm:text-xl">{title}</h4>
            <p className="text-light/60 text-sm sm:text-base">{place}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
