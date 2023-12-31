'use client';

import { cn } from '../../../lib/contentful/utils/cn';

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
                <span className="font-bold">{title}</span>
                {subtitle && (
                    <span className="ml-2 text-sm text-zinc-600">
                        {subtitle}
                    </span>
                )}
            </div>
        </div>
    );
}
