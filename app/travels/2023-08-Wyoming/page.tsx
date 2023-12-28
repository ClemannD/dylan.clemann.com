import Image from 'next/image';
import { Photo } from '../../../models/image.model';
import HikeInfo from '../components/hike-info.component';
import MediaCarousel from '../components/media-carousel.component';
import MediaGrid from '../components/media-grid.component';

const lakeOfTheCragsMedia: Photo[] = [
    {
        id: 'emerald-pond',
        width: 2016,
        height: 1512,
        src: 'https://clemann.app/2023/wyoming/teton/lake-of-the-crags/emerald-pond.webp',
    },
    {
        id: 'jenny-lake',
        width: 2016,
        height: 1512,
        src: 'https://clemann.app/2023/wyoming/teton/lake-of-the-crags/jenny-lake.webp',
    },
    {
        id: 'lake-of-the-crags-boys',
        width: 1512,
        height: 2016,
        src: 'https://clemann.app/2023/wyoming/teton/lake-of-the-crags/lake-of-the-crags-boys.webp',
    },
    {
        id: 'lake-of-the-crags-dnr',
        width: 1512,
        height: 2016,
        src: 'https://clemann.app/2023/wyoming/teton/lake-of-the-crags/lake-of-the-crags-dnr.webp',
    },
    {
        id: 'lake-of-the-crags-nap',
        width: 2016,
        height: 1512,
        src: 'https://clemann.app/2023/wyoming/teton/lake-of-the-crags/lake-of-the-crags-nap.webp',
    },
    {
        id: 'lake-of-the-crags-rachel-hands-up',
        width: 2016,
        height: 1512,
        src: 'https://clemann.app/2023/wyoming/teton/lake-of-the-crags/lake-of-the-crags-rachel-hands-up.webp',
    },
    {
        id: 'lake-of-the-crags-selfie',
        width: 1512,
        height: 2016,
        src: 'https://clemann.app/2023/wyoming/teton/lake-of-the-crags/lake-of-the-crags-selfie.webp',
    },
    {
        id: 'lake-of-the-crags',
        width: 2016,
        height: 1512,
        src: 'https://clemann.app/2023/wyoming/teton/lake-of-the-crags/lake-of-the-crags.webp',
    },
    // Testing
    {
        id: 'creek-vista',
        width: 1512,
        height: 2016,
        src: 'https://clemann.app/2023/wyoming/teton/cascade-creek/creek-vista.webp',
    },
    {
        id: 'creek',
        width: 1512,
        height: 2016,
        src: 'https://clemann.app/2023/wyoming/teton/cascade-creek/creek.webp',
    },
    {
        id: 'dnr-canyon-view',
        width: 2016,
        height: 1512,
        src: 'https://clemann.app/2023/wyoming/teton/cascade-creek/dnr-canyon-view.webp',
    },
    {
        id: 'endor-view',
        width: 1512,
        height: 2016,
        src: 'https://clemann.app/2023/wyoming/teton/cascade-creek/endor-view.webp',
    },
    {
        id: 'endor-walk',
        width: 1512,
        height: 2016,
        src: 'https://clemann.app/2023/wyoming/teton/cascade-creek/endor-walk.webp',
    },
    {
        id: 'glacier',
        width: 1512,
        height: 2016,
        src: 'https://clemann.app/2023/wyoming/teton/cascade-creek/glacier.webp',
    },
    {
        id: 'glacier2',
        width: 2016,
        height: 1512,
        src: 'https://clemann.app/2023/wyoming/teton/cascade-creek/glacier2.webp',
    },
    {
        id: 'valley-view',
        width: 2016,
        height: 1512,
        src: 'https://clemann.app/2023/wyoming/teton/cascade-creek/valley-view.webp',
    },
    {
        id: 'valley-view2',
        width: 2016,
        height: 1512,
        src: 'https://clemann.app/2023/wyoming/teton/cascade-creek/valley-view2.webp',
    },
    {
        id: 'valley-walk',
        width: 1512,
        height: 2016,
        src: 'https://clemann.app/2023/wyoming/teton/cascade-creek/valley-walk.webp',
    },
];

export default async function WyomingPage() {
    return (
        <div className="">
            <section className="w-full bg-white">
                <div className="container mx-auto py-8 px-4 lg:py-20 lg:px-0">
                    <div className="mb-10 flex justify-between">
                        <div className="">
                            <div className="text-medium mb-2 flex w-fit items-center gap-2 rounded-lg bg-slate-100 px-3 py-0.5 font-medium tracking-tight text-black">
                                <div className="pb-1 text-lg leading-none">
                                    ⛰️
                                </div>
                                <div> Hike</div>
                            </div>
                            <h2 className="text-3xl font-black">
                                Lake of the Crags
                            </h2>
                            <h3>Grand Teton National Park, Wyoming</h3>
                        </div>

                        <div className="text-sm uppercase text-zinc-700">
                            August 12th, 2023
                        </div>
                    </div>

                    <HikeInfo
                        embedUrl="https://www.alltrails.com/widget/recording/afternoon-hike-77ab786-67?scrollZoom=false&u=i&sh=pxis8l"
                        distance="4.90 mi"
                        elevationGain="2,861 ft"
                        totalTime="5:01:43"
                    />

                    {/* <MediaCarousel media={lakeOfTheCragsMedia} /> */}
                    {/* @ts-expect-error Server Component */}
                    <MediaGrid images={lakeOfTheCragsMedia} />

                    {/* <Image
                        className="mb-4"
                        src={
                            'https://clemann.app/2023/wyoming/lake-of-the-crags1.jpeg'
                        }
                        alt={'Lake of the Crags'}
                        sizes="100vw"
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}
                        width={500}
                        height={300}
                        placeholder="blur"
                        blurDataURL={
                            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPMrpx0BgAFEQJETLQTEwAAAABJRU5ErkJggg=='
                        }
                        quality={100}
                    />

                    <div className="flex flex-col gap-4 lg:flex-row">
                        {/* <video
                            controls
                            className="mb-4 w-full lg:w-1/2"
                            playsInline
                            disablePictureInPicture
                            disableRemotePlayback
                            controlsList="nodownload"
                        >
                            <source
                                src="https://clemann.app/2023/wyoming/hike-up.mov"
                                type="video/mp4"
                            />
                        </video> 
                        <video
                            controls
                            className="mb-4 w-full lg:w-1/2"
                            playsInline
                            disablePictureInPicture
                            disableRemotePlayback
                            controlsList="nodownload"
                        >
                            <source
                                src="https://clemann.app/2023/wyoming/hike-up2-smaller2.mov"
                                type="video/mp4"
                            />
                        </video>
                    </div>

                    <video
                        controls
                        width="100%"
                        className="mb-4"
                        playsInline
                        disablePictureInPicture
                        disableRemotePlayback
                        controlsList="nodownload"
                    >
                        <source
                            src="https://clemann.app/2023/wyoming/IMG_3191-smaller.mov"
                            type="video/mp4"
                        />
                    </video>

                    <Image
                        src={
                            'https://clemann.app/2023/wyoming/lake_of_crags1.jpeg'
                        }
                        alt={'Lake of the Crags'}
                        sizes="100vw"
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}
                        width={500}
                        height={300}
                        placeholder="blur"
                        blurDataURL={
                            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPMrpx0BgAFEQJETLQTEwAAAABJRU5ErkJggg=='
                        }
                        quality={100}
                    /> */}
                </div>
            </section>
        </div>
    );
}
