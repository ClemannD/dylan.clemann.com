import Link from 'next/link';

export default function SectionLink({
  href,
  title,
  icon,
}: {
  href: string;
  title: string;
  icon?: string;
}) {
  return (
    <Link
      href={href}
      className="w-fit rounded-full px-3 pt-[2px] pb-[3px] text-sm font-medium text-zinc-700 transition-colors duration-100 ease-in-out hover:bg-slate-100 hover:text-blue-800 lg:text-sm"
    >
      <span className="mr-1 pb-[1px] text-lg leading-none">{icon}</span> {title}
    </Link>
  );
}
