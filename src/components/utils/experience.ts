import { experiences } from "@/data/experiences";

const MONTH_INDEX: { [key: string]: number } = {
  Jan: 0,
  Feb: 1,
  Mar: 2,
  Apr: 3,
  May: 4,
  Jun: 5,
  Jul: 6,
  Aug: 7,
  Sep: 8,
  Oct: 9,
  Nov: 10,
  Dec: 11,
};

function parseMonthYear(str: string) {
  const [month, year] = str.trim().split(" ");
  return new Date(Number(year), MONTH_INDEX[month] ?? 0, 1);
}

// Approximate total years of experience, computed from the earliest
// experience's start date in `experiences.js` (rounded to the nearest year).
export function getYearsOfExperience() {
  const startDates = experiences.map((exp) =>
    parseMonthYear(exp.year.split("-")[0]),
  );
  const earliestStart = new Date(Math.min(...startDates.map((d) => +d)));
  const now = new Date();

  const months =
    (now.getFullYear() - earliestStart.getFullYear()) * 12 +
    (now.getMonth() - earliestStart.getMonth());

  return Math.max(1, Math.round(months / 12));
}
