export default function SectionHeader({
    icon,
    tag,
    date,
    title,
    subtitle,
    description,
    children,
}: {
    icon?: React.ReactNode;
    tag?: string;
    date?: string;
    title?: string;
    subtitle: string;
    description?: string;
    children?: React.ReactNode;
}) {
    return (
        <div className="container mx-auto py-8 px-4  lg:px-0">
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
    );
}
