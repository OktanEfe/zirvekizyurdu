type SectionHeadingProps = {
  title: string;
  subtitle?: string;
};

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-semibold tracking-tight text-slate-900">{title}</h2>
      {subtitle ? <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">{subtitle}</p> : null}
    </div>
  );
}
