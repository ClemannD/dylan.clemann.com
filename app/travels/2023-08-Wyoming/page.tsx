import Image from 'next/image';
import { Photo } from '../../../models/image.model';
import HikeInfo from '../components/hike-info.component';
import MediaCarousel from '../components/media-carousel.component';
import MediaGrid from '../components/media-grid.component';
import { ImagesConfig } from '../components/travel.data';

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

                    {/* @ts-expect-error Server Component */}
                    <MediaGrid
                        imageConfig={
                            ImagesConfig['2023/wyoming/teton/lake-of-the-crags']
                        }
                    />
                </div>
            </section>

            <section className="w-full bg-slate-200">
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
                                Cascade Canyon
                            </h2>
                            <h3>Grand Teton National Park, Wyoming</h3>
                        </div>

                        <div className="text-sm uppercase text-zinc-700">
                            September 2nd, 2023
                        </div>
                    </div>

                    <HikeInfo
                        embedUrl="https://www.alltrails.com/widget/recording/afternoon-hike-at-cascade-canyon-trail-c7b3f09?scrollZoom=false&u=i&sh=pxis8l"
                        distance="10.08 mi"
                        elevationGain="1,168 ft"
                        totalTime="5:04:20"
                    />

                    {/* @ts-expect-error Server Component */}
                    <MediaGrid
                        imageConfig={
                            ImagesConfig['2023/wyoming/teton/cascade-creek']
                        }
                    />
                </div>
            </section>

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
                                Table Mountain
                            </h2>
                            <h3>Grand Teton National Park, Wyoming</h3>
                        </div>

                        <div className="text-sm uppercase text-zinc-700">
                            September 8th, 2023
                        </div>
                    </div>

                    <HikeInfo
                        embedUrl="https://www.alltrails.com/widget/recording/evening-hike-at-table-mountain-trail-136c2f0?scrollZoom=false&u=i&sh=pxis8l"
                        distance="10.95 mi"
                        elevationGain="4,144 ft"
                        totalTime="8:24:20"
                    />

                    {/* @ts-expect-error Server Component */}
                    <MediaGrid
                        imageConfig={
                            ImagesConfig['2023/wyoming/teton/table-mountain']
                        }
                    />
                </div>
            </section>
        </div>
    );
}
