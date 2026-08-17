// Generates sequential "01 - label" style subtitles for page sections,
// skipping a number entirely whenever the caller never calls it for a
// section that doesn't render (see ProjectDetails/ServiceDetails).
//
// Not a React hook — it's a plain closure factory, safe to call from
// Server Components (including async ones) as well as Client Components.
export function createNumberedSections() {
  let step = 0;
  return (label: string) => `${String(++step).padStart(2, "0")} - ${label}`;
}
