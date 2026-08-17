export default function AvailableForFreelanceWork() {
  return (
    <div className="border-primary/30 bg-primary/5 flex w-fit items-center gap-2 rounded-xl border px-4 py-2 sm:ms-auto">
      <span className="relative flex size-2">
        <span className="bg-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
        <span className="bg-primary relative inline-flex size-2 rounded-full" />
      </span>
      <span className="text-light/80 text-xs font-semibold whitespace-nowrap sm:text-sm">
        Available for freelance work
      </span>
    </div>
  );
}
