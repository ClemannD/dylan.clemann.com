export default function TravelLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="w-full bg-slate-300 bg-[url('/topography.svg')] bg-repeat ">
            {children}
        </div>
    );
}
