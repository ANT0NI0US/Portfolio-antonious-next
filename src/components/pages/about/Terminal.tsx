import CursorPulse from "@/components/ui/CursorPulse";
import TerminalChrome from "@/components/ui/TerminalChrome";

const LINES = [
  {
    prompt: "whoami",
    output:
      "Frontend Developer who ships fast, accessible, bilingual products.",
  },
  {
    prompt: "cat mission.txt",
    output:
      "Turn ambitious ideas into interfaces people enjoy using — and that Google actually finds.",
  },
  {
    prompt: "./why-hire-me --summary",
    output: "Keep scrolling. I'll convince you.",
  },
];

export default function Terminal() {
  return (
    <TerminalChrome
      label="antonious@portfolio: ~/about"
      className="lg:col-span-2"
    >
      {LINES.map(({ prompt, output }, index) => (
        <div key={prompt} className={index < LINES.length - 1 ? "mb-3" : ""}>
          <p>
            <span className="text-primary">$</span>{" "}
            <span className="text-light">{prompt}</span>
          </p>
          <p className="text-light/60">
            {output}
            {index === LINES.length - 1 && <CursorPulse />}
          </p>
        </div>
      ))}
    </TerminalChrome>
  );
}
