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
        'min-h-6 sticky left-0 top-16 z-20 w-screen border-b bg-white px-2 lg:top-20 lg:px-4'
      )}
    >
      <div className="flex h-full flex-wrap items-center">
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
