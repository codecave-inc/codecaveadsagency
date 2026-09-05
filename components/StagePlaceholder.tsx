export default function StagePlaceholder({
  page,
  stage,
  sourceScreen,
}: {
  page: string;
  stage: number;
  sourceScreen?: string;
}) {
  return (
    <div className="border-2 border-dashed border-border-subtle rounded-xl p-unit-2xl bg-white text-center max-w-xl mx-auto">
      <span className="material-symbols-outlined text-3xl text-outline">construction</span>
      <p className="mt-2 font-semibold">{page}</p>
      <p className="text-sm text-on-surface-variant mt-1">
        This screen will be built in Stage {stage} of the rollout.
        {sourceScreen ? ` Source design: ${sourceScreen}.` : ""}
      </p>
    </div>
  );
}
