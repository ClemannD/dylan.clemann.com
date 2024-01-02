import { useCallback, useEffect, useState } from 'react';
import StickyHeader from './sticky-header.component';

export default function SectionHeader({
  icon,
  tag,
  date,
  title,
  subtitle,
  description,
  stickyHeaderTitle,
  stickyHeaderSubtitle,
  children,
}: {
  icon?: React.ReactNode;
  tag?: string;
  date?: string;
  title: string;
  subtitle: string;
  description?: string;
  stickyHeaderTitle: string;
  stickyHeaderSubtitle?: string;
  children?: React.ReactNode;
}) {
  return (
    <>
      <StickyHeader title={stickyHeaderTitle} subtitle={stickyHeaderSubtitle} />
      <div className="relative z-30  -mt-[25px] border-t  bg-slate-50 py-8 px-4 lg:px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            {icon && tag && (
              <div className="">
                <div className="mb-2 flex w-fit items-center gap-2 rounded-full border bg-white px-3 py-0.5 text-sm font-medium tracking-tight text-black lg:text-base">
                  <div className="pb-1 text-sm leading-none lg:text-lg">
                    {icon}
                  </div>
                  <div> {tag}</div>
                </div>
              </div>
            )}

            {date && (
              <div className="text-right text-xs  text-zinc-700 lg:text-sm">
                {date}
              </div>
            )}
          </div>

          <div className="">
            <h2 className="text-xl font-black lg:text-3xl">{title}</h2>
            <h3 className="mb-2 text-sm text-zinc-600 lg:text-base">
              {subtitle}
            </h3>

            {description && <p className="text-sm">{description}</p>}
          </div>

          {children && <div className="mt-6">{children}</div>}
        </div>
      </div>
    </>
  );
}
