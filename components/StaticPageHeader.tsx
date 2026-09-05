export default function StaticPageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="bg-primary text-white text-center py-unit-2xl px-gutter-mobile">
      <h1 className="text-3xl font-bold">{title}</h1>
      {subtitle && <p className="mt-2 text-white/80 max-w-xl mx-auto">{subtitle}</p>}
    </div>
  );
}
