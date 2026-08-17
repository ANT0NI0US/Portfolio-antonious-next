interface MainTitleProps {
  title: string;
}

export default function MainTitle({ title }: MainTitleProps) {
  return (
    <span className="text-primary text-lg font-bold uppercase">{title}</span>
  );
}
