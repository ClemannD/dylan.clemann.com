'use client';

import { cn } from '../../../lib/utils/cn';

export default function StickyHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div
      className={cn(
        'sticky left-0 top-20 z-20 h-6 w-screen border-b bg-white px-2 lg:px-4'
      )}
    >
      <div className="flex h-full items-center">
        <span className="text-sm font-bold md:text-base">{title}</span>
        {subtitle && (
          <span className="ml-2 text-xs text-zinc-600 md:text-sm">
            {subtitle}
          </span>
        )}
      </div>
    </div>
  );
}
