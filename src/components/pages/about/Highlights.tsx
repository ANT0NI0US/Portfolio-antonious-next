import TextHead from "@/components/ui/TextHead";
import Link from "next/link";

const stats = [
  { value: "10,000+", label: "users served on one platform (LMS)" },
  { value: "8+", label: "production web apps shipped" },
  { value: "150+", label: "global clients served in Arabic & English" },
  { value: "2", label: "React/Next.js certifications" },
];

export default function Highlights() {
  return (
    <section className="from-secondary to-main border-t-light/5 border-t bg-linear-to-b py-8 sm:py-14">
      <div className="container">
        <TextHead
          text="In Numbers"
          title="What That Actually Looks Like"
          position="start"
        />

        <div className="mx-auto grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="border-light/10 bg-main/40 flex flex-col items-center gap-1.5 rounded-xl border p-5 text-center sm:p-6"
            >
              <span className="text-primary text-3xl font-black sm:text-4xl">
                {s.value}
              </span>
              <span className="text-light/60 text-xs sm:text-sm">
                {s.label}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center">
          <Link
            href="/#qualification"
            className="text-primary me-auto text-sm font-semibold hover:underline sm:text-base"
          >
            See my education & certifications →
          </Link>
        </p>
      </div>
    </section>
  );
}
