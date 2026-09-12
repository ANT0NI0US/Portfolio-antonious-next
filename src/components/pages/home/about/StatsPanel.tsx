import CursorPulse from "@/components/ui/CursorPulse";
import TerminalChrome from "@/components/ui/TerminalChrome";
import { getYearsOfExperience } from "@/components/utils/experience";
import { creationProjects } from "@/data/creationProjects";
import { personalProjects } from "@/data/projects";
import { smartGateProjects } from "@/data/smartGateProjects";

const totalProjects =
  smartGateProjects.length + creationProjects.length + personalProjects.length;
const years = getYearsOfExperience();

const stats = [
  {
    key: "experience",
    value: `"~${years} years"`,
    label: "years of experience",
  },
  {
    key: "projects",
    value: `"${totalProjects}"`,
    label: "number of projects",
  },
  { key: "perf", value: '"+40%"', label: "performance improvement" },
];

export default function StatsPanel() {
  return (
    <TerminalChrome label="stats.js">
      <>
        <div>
          <span className="text-light/50">const</span>{" "}
          <span className="text-accent">profile</span>{" "}
          <span className="text-light/50">= {"{"}</span>
        </div>

        {stats.map((s) => (
          <div key={s.key} className="pl-4">
            <span className="text-light/50">&quot;{s.label}&quot;:</span>{" "}
            <span className="text-light">{s.value}</span>
            <span className="text-light/50">,</span>
          </div>
        ))}

        <div className="pl-4">
          <span className="text-light/50">stack:</span>{" "}
          <span className="text-light">
            [&quot;React&quot;, &quot;Next&quot;]
          </span>
        </div>

        <div className="flex items-center">
          <span className="text-light/50">{"}"}</span>
          <CursorPulse />
        </div>
      </>
    </TerminalChrome>
  );
}
