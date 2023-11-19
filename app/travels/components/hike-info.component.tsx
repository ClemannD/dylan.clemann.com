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
        <div className="mb-10 flex flex-col gap-4 lg:flex-row">
            <div className="flex w-full justify-center gap-8 text-center lg:w-64 lg:flex-col">
                <div className="flex flex-col gap-1">
                    <div className="font">Distance</div>
                    <div className="text-xl font-black">{distance}</div>
                </div>
                <div className="flex flex-col gap-1">
                    <div className="font">Elevation Gain</div>
                    <div className="text-xl font-black">{elevationGain}</div>
                </div>
                <div className="flex flex-col gap-1">
                    <div className="font">Total Time</div>
                    <div className="text-xl font-black">{totalTime}</div>
                </div>
            </div>
            <iframe
                className=" inset-0"
                src={embedUrl}
                height="400"
                width="100%"
                title="Map of the hike"
                // loading="lazy"
            ></iframe>
        </div>
    );
}
