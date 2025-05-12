import Link from 'next/link';

export function NavigationItem({
  title,
  href,
  isActive,
  ...props
}: {
  title: string;
  href?: string;
  isActive?: boolean;
} & React.HTMLAttributes<HTMLSpanElement>) {
  const titleElement = () => (
    <span
      className={`group relative w-fit cursor-pointer text-nowrap ${
        isActive ? 'active' : ''
      }`}
      {...props}
    >
      <span className="relative z-10">{title}</span>
      <span
        className={`absolute top-3/5 bottom-0 left-1/6 w-full origin-left scale-x-0 bg-[var(--highlight)] opacity-40 transition-transform group-hover:scale-x-100 ${
          isActive ? 'scale-x-100' : ''
        }`}
      />
    </span>
  );

  return (
    <>{href ? <Link href={href}>{titleElement()}</Link> : titleElement()}</>
  );
}
