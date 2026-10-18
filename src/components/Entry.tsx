export default function Entry({
  title,
  dates,
  summary,
  href,
}: {
  title: string;
  dates: string;
  summary: string;
  href?: string;
}) {
  return (
    <li className="border-t border-line py-[18px] last:border-b">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4">
        {href ? (
          <a
            href={href}
            className="font-semibold text-accent underline underline-offset-3"
          >
            {title}
          </a>
        ) : (
          <span className="font-semibold">{title}</span>
        )}
        <span className="whitespace-nowrap text-sm text-muted">{dates}</span>
      </div>
      <p className="mt-1 text-[15px] text-muted">{summary}</p>
    </li>
  );
}
