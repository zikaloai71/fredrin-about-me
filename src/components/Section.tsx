export default function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section aria-labelledby={id} className="mt-18">
      <h2
        id={id}
        className="mb-5 text-[13px] font-semibold uppercase tracking-[0.08em] text-muted"
      >
        {title}
      </h2>
      {children}
    </section>
  );
}
