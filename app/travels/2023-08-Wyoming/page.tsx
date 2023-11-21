import Image from 'next/image';
import HikeInfo from '../components/hike-info.component';
import MediaCarousel from '../components/media-carousel.component';

export default function WyomingPage() {
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

                    <MediaCarousel
                        media={[
                            {
                                url: 'http://clemann.app/2023/wyoming/lake-of-the-crags1.jpeg',
                                type: 'IMAGE',
                            },
                            {
                                url: 'http://clemann.app/2023/wyoming/lake_of_crags1.jpeg',
                                type: 'IMAGE',
                            },
                            {
                                url: 'http://clemann.app/2023/wyoming/lake-of-the-crags.jpeg',
                                type: 'IMAGE',
                            },
                            {
                                url: 'http://clemann.app/2023/wyoming/lake-of-the-crags-selfie.jpeg',
                                type: 'IMAGE',
                            },
                            {
                                url: 'http://clemann.app/2023/wyoming/lake-of-the-crags-nap.jpeg',
                                type: 'IMAGE',
                            },
                            {
                                url: 'http://clemann.app/2023/wyoming/lake-of-the-crags-boys.jpeg',
                                type: 'IMAGE',
                            },
                            {
                                url: 'http://clemann.app/2023/wyoming/lake-of-the-crags-rachel-hands-up.jpeg',
                                type: 'IMAGE',
                            },

                            // {
                            //     url: 'http://clemann.app/2023/wyoming/IMG_3191-smaller.mov',
                            //     type: 'VIDEO',
                            // },
                        ]}
                    />

                    {/* <Image
                        className="mb-4"
                        src={
                            'http://clemann.app/2023/wyoming/lake-of-the-crags1.jpeg'
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
                                src="http://clemann.app/2023/wyoming/hike-up.mov"
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
                                src="http://clemann.app/2023/wyoming/hike-up2-smaller2.mov"
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
                            src="http://clemann.app/2023/wyoming/IMG_3191-smaller.mov"
                            type="video/mp4"
                        />
                    </video>

                    <Image
                        src={
                            'http://clemann.app/2023/wyoming/lake_of_crags1.jpeg'
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
