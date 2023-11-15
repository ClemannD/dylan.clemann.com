import Image from 'next/image';
import Link from 'next/link';
import { TripsConfig } from './components/travel.data';

export default function TravelPage() {
    return (
        <div className=" mx-auto max-w-[2800px] px-4 pb-10 lg:px-10">
            <div className="container mx-auto">
                <div className="mb-10 flex flex-col  justify-center gap-4">
                    <h1 className=" text-4xl font-black uppercase">
                        Dylan&apos;s Travels
                    </h1>
                    <h2 className=" text-2xl font-bold ">
                        A collection of pictures and videos from the places
                        I&apos;ve been
                    </h2>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-8  lg:grid-cols-2 xl:grid-cols-3 ">
                {TripsConfig.map((trip) => (
                    <TripBox key={trip.name} trip={trip} />
                ))}
            </div>
        </div>
    );
}

function TripBox({ trip }: { trip: typeof TripsConfig[0] }) {
    return (
        <Link
            href={trip.path}
            className=" transform-gpu cursor-pointer overflow-clip rounded bg-slate-100 shadow-xl transition-transform ease-in-out hover:scale-[1.02]"
        >
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
                <h2 className="text-2xl font-black text-black">{trip.name}</h2>
                <h3 className="mb-5 text-sm font-medium tracking-tight text-zinc-600 ">
                    {trip.location}
                </h3>
                <div className="flex gap-2">
                    {trip.tags.map((tag) => (
                        <div
                            key={tag}
                            className="rounded-full bg-slate-200 px-3 py-1 text-xs font-medium tracking-tight text-black"
                        >
                            {tag}
                        </div>
                    ))}
                </div>
                <p className="text-lg font-black ">{trip.shortDescription}</p>
            </div>
        </Link>
    );
}
