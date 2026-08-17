export default function Waves() {
  return (
    <div className="absolute -top-24.25 left-0 h-25 w-full">
      <div className="wave animate-wave-slow bottom-0 z-999 opacity-50" />
      <div className="wave animate-wave02-slow bottom-2.5 z-1000 opacity-100" />
      <div className="wave animate-wave-fast bottom-3.75 z-1000 opacity-20" />
      <div className="wave animate-wave02-fast bottom-5 z-1000 opacity-70" />
    </div>
  );
}
