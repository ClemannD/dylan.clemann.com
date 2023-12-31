export default function HikeInfo({
    embedUrl,
    distance,
    elevationGain,
    totalTime,
}: {
    embedUrl: string;
    distance: string;
    elevationGain: string;
    totalTime: string;
}) {
    return (
        <div className="flex flex-col gap-4 lg:flex-row">
            <div className="flex w-full gap-8 text-center lg:w-64 lg:flex-col lg:justify-center">
                <Info title="Distance" data={distance} />
                <Info title="Elevation Gain" data={elevationGain} />
                <Info title="Total Time" data={totalTime} />
            </div>
            <iframe
                // className="inset-0 border-0"
                src={embedUrl}
                height="400"
                width="100%"
                title="Map of the hike"
                // loading="lazy"
            ></iframe>
        </div>
    );
}

function Info({ title, data }: { title: string; data: string }) {
    return (
        <div className="flex flex-col gap-0.5 text-left lg:gap-1 lg:text-center">
            <div className="font text-xs text-zinc-600">{title}</div>
            <div className="text-sm font-black lg:text-xl">{data}</div>
        </div>
    );
}
