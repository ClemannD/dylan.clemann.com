import Image from 'next/image';

const tripsConfig = [
    {
        name: 'Yellowstone/Grand Teton',
        shortDescription: '',
        location: 'Idaho & Wyoming, USA',
        coordinates: '43.58053312862212, -111.10850692582751',
        dates: 'August 2023',
        coverImageUrl: 'http://clemann.app/2023/wyoming/lake_of_crags1.jpeg',
    },
    {
        name: 'Smokey Mountains',
        shortDescription: '',
        location: 'Gatlinburg TN, USA',
        coordinates: '35.725726915213684, -83.53474530173256',
        dates: 'May 2023',
        coverImageUrl: 'http://clemann.app/2023/tennessee/smokey.jpeg',
    },
    {
        name: 'F1 Miami GrandPrix',
        shortDescription: '',
        location: 'Miami FL, USA',
        coordinates: '35.725726915213684, -83.53474530173256',
        dates: 'May 2023',
        coverImageUrl: 'http://clemann.app/2023/miami-f1/f1-cover.jpeg',
    },
    {
        name: 'Vermont',
        shortDescription: '',
        location: 'Okemo VT, USA',
        coordinates: '35.725726915213684, -83.53474530173256',
        dates: 'February 2023',
        coverImageUrl: 'http://clemann.app/2023/vermont/vermont-cover.jpeg',
    },
    {
        name: 'Whistler',
        shortDescription: '',
        location: 'Whistler BC, Canada',
        coordinates: '35.725726915213684, -83.53474530173256',
        dates: 'January 2023',
        coverImageUrl: 'http://clemann.app/2023/bc/whistler-cover.jpeg',
    },
    {
        name: 'Switzerland',
        shortDescription: '',
        location: 'Zermatt/Zurich, Switzerland',
        coordinates: '35.725726915213684, -83.53474530173256',
        dates: 'December 2022',
        coverImageUrl: 'http://clemann.app/2022/switzerland/zermatt-cover.jpeg',
    },
    {
        name: 'Aspen',
        shortDescription: '',
        location: 'Aspen CO, USA',
        coordinates: '35.725726915213684, -83.53474530173256',
        dates: 'January 2022',
        coverImageUrl: 'http://clemann.app/2022/aspen/aspen-cover.jpeg',
    },
];

export default function TravelPage() {
    return (
        <div className="container mx-auto px-4 pb-10 lg:px-10">
            <div className="flex justify-between py-8">
                <h1 className="text-5xl font-black text-black">Travels</h1>
            </div>

            <div className="grid grid-cols-1 gap-8  lg:grid-cols-2 xl:grid-cols-3">
                {tripsConfig.map((trip) => (
                    <TripBox key={trip.name} trip={trip} />
                ))}
            </div>
        </div>
    );
}

function TripBox({ trip }: { trip: typeof tripsConfig[0] }) {
    return (
        <div className=" cursor-pointer overflow-clip rounded-lg bg-slate-100 shadow-xl transition-transform ease-in-out hover:scale-[1.02] ">
            <div className="relative h-72 w-full min-w-[288px]">
                <Image
                    className="object-cover"
                    src={trip.coverImageUrl}
                    fill
                    placeholder="blur"
                    blurDataURL={
                        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPMrpx0BgAFEQJETLQTEwAAAABJRU5ErkJggg=='
                    }
                    quality={100}
                    alt={trip.name}
                />
            </div>

            <div className="p-4">
                <h4 className="text font-black text-sky-600">{trip.dates}</h4>
                <h2 className="mb-2 text-2xl font-black text-black">
                    {trip.name}
                </h2>
                <h3 className="text font-medium tracking-tight text-zinc-600 ">
                    {trip.location}
                </h3>
                <h3 className="text-xs font-light  text-zinc-600 ">
                    {trip.coordinates}
                </h3>
                <p className="text-lg font-black ">{trip.shortDescription}</p>
            </div>
        </div>
    );
}
