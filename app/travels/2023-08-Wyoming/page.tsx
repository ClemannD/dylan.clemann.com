import Image from 'next/image';
import Link from 'next/link';
import { cn } from '../../../lib/contentful/utils/cn';
import { Photo } from '../../../models/image.model';
import HikeInfo from '../components/hike-info.component';
import MediaCarousel from '../components/media-carousel.component';
import MediaGrid from '../components/media-grid.component';
import ScrollTopButton from '../components/scroll-top-button.component';
import SectionHeader from '../components/section-header.component';
import { ImagesConfig } from '../data/image-config';

function SectionLink({
  href,
  title,
  icon,
}: {
  href: string;
  title: string;
  icon?: string;
}) {
  return (
    <Link
      href={href}
      className="w-fit rounded-full px-3 pt-[2px] pb-[3px] text-sm font-medium text-zinc-700 transition-colors duration-100 ease-in-out hover:bg-slate-100 hover:text-blue-800 lg:text-sm"
    >
      <span className="mr-1 pb-[1px] text-lg leading-none">{icon}</span> {title}
    </Link>
  );
}

export default async function WyomingPage() {
  return (
    <div className="">
      <ScrollTopButton />

      <section className="border-t  bg-white ">
        <Image
          src="https://clemann.app/2023/wyoming/teton/table-mountain/pano-004-grand-teton-pano.webp"
          width={8130}
          height={1910}
          sizes="100vw"
          alt="Panorama of the Tetons"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAIAAAB2XpiaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAFUlEQVR4nGN4/f//soP3TbySGLjVADZhBkEXiAxiAAAAAElFTkSuQmCC"
        />

        <div className="container mx-auto w-full py-6 px-4 lg:py-10 lg:px-0">
          <h1 className="text-xl font-black leading-none lg:text-4xl">
            Summer in the Northern Rockies: Wyoming and Idaho
          </h1>
          <h2 className="text-zinc-700  lg:text-lg">
            Yellowstone, Grand Teton, Jackson Hole
          </h2>
          <h3 className="mb-3 text-xs text-zinc-700 lg:text-sm">
            August 11th, 2023 - September 11th, 2023
          </h3>

          <p className="text-base leading-tight lg:text-lg">
            A collection of pictures from our adventures in Yellowstone, Grand
            Teton, and Jackson Hole. Rachel and I hiked over 80 miles throughout
            the month.
          </p>

          <div className="mt-4 ">
            <div className="mb-3 border-b pb-1">
              <h4 className="text-xl font-extrabold">Sections</h4>
            </div>

            <div className="mb-3 flex flex-col gap-1">
              <Link href="#grand-teton">
                <h5 className="text-lg font-semibold transition-colors duration-100 ease-in-out hover:text-blue-800">
                  Grand Teton National Park
                </h5>
              </Link>

              <SectionLink
                href="#lake-of-the-crags"
                icon="⛰️"
                title="Lake of the Crags"
              />
              <SectionLink
                href="#cascade-canyon"
                icon="⛰️"
                title="Cascade Canyon"
              />
              <SectionLink
                href="#table-mountain"
                icon="⛰️"
                title="Table Mountain"
              />
            </div>

            <div className="mb-3 flex flex-col gap-1">
              <Link href="#yellowstone">
                <h5 className="text-lg font-semibold transition-colors duration-100 ease-in-out hover:text-blue-800">
                  Yellowstone National Park
                </h5>
              </Link>
              <SectionLink
                href="#mount-washburn"
                icon="⛰️"
                title="Mount Washburn"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="grand-teton" className="">
        <SectionHeader
          title="Grand Teton National Park"
          stickyHeaderTitle="Grand Teton National Park"
          icon="⛰️"
          subtitle="Wyoming"
          description="Random Pictures from around the park"
        ></SectionHeader>

        {/* @ts-expect-error Server Component */}
        <MediaGrid imageConfig={ImagesConfig['2023/wyoming/teton']} />
      </section>

      <section id="lake-of-the-crags">
        <SectionHeader
          title="Lake of the Crags"
          stickyHeaderTitle="Grand Teton National Park"
          stickyHeaderSubtitle="Lake of the Crags Hike"
          tag="Hike"
          icon="⛰️"
          date="August 12th, 2023"
          subtitle="Grand Teton National Park, Wyoming"
          description="A very difficult hike, with almost 3000 feet
                        elevation over 2.5 miles. But the lake at the top
                        was well worth it. The water was glacier cold, but
                        we still jumped in."
        >
          <HikeInfo
            embedUrl="https://www.alltrails.com/widget/recording/afternoon-hike-77ab786-67?scrollZoom=false&u=i&sh=pxis8l"
            distance="4.90 mi"
            elevationGain="2,861 ft"
            totalTime="5:01:43"
          />
        </SectionHeader>

        {/* @ts-expect-error Server Component */}
        <MediaGrid
          imageConfig={ImagesConfig['2023/wyoming/teton/lake-of-the-crags']}
        />
      </section>

      <section id="cascade-canyon">
        <SectionHeader
          title="Cascade Canyon"
          stickyHeaderTitle="Grand Teton National Park"
          stickyHeaderSubtitle="Cascade Canyon Hike"
          tag="Hike"
          icon="⛰️"
          date="September 2nd, 2023"
          subtitle="Grand Teton National Park, Wyoming"
          description="A beautiful hike through the Grand Tetons. We
                        saw a moose, and the views were spectacular."
        >
          <HikeInfo
            embedUrl="https://www.alltrails.com/widget/recording/afternoon-hike-at-cascade-canyon-trail-c7b3f09?scrollZoom=false&u=i&sh=pxis8l"
            distance="10.08 mi"
            elevationGain="1,168 ft"
            totalTime="5:04:20"
          />
        </SectionHeader>

        {/* @ts-expect-error Server Component */}
        <MediaGrid
          imageConfig={ImagesConfig['2023/wyoming/teton/cascade-creek']}
        />
      </section>

      <section id="table-mountain">
        <SectionHeader
          title="Table Mountain"
          stickyHeaderTitle="Grand Teton National Park"
          stickyHeaderSubtitle="Table Mountain Hike"
          tag="Hike"
          icon="⛰️"
          date="September 8th, 2023"
          subtitle="Grand Teton National Park, Wyoming"
          description="A very difficult hike, with almost 3000 feet
                        elevation over 2.5 miles. But the lake at the top
                        was well worth it. The water was glacier cold, but
                        we still jumped in."
        >
          <HikeInfo
            embedUrl="https://www.alltrails.com/widget/recording/evening-hike-at-table-mountain-trail-136c2f0?scrollZoom=false&u=i&sh=pxis8l"
            distance="10.95 mi"
            elevationGain="4,144 ft"
            totalTime="8:24:20"
          />
        </SectionHeader>

        {/* @ts-expect-error Server Component */}
        <MediaGrid
          imageConfig={ImagesConfig['2023/wyoming/teton/table-mountain']}
        />
      </section>

      <section id="yellowstone">
        <SectionHeader
          title="Yellowstone National Park"
          stickyHeaderTitle="Yellowstone National Park"
          subtitle="Wyoming"
        ></SectionHeader>

        {/* @ts-expect-error Server Component */}
        <MediaGrid imageConfig={ImagesConfig['2023/wyoming/yellowstone']} />
      </section>

      <section id="artist-point">
        <SectionHeader
          title="Artist Point"
          stickyHeaderTitle="Yellowstone National Park"
          stickyHeaderSubtitle="Artist Point"
          subtitle="Yellowstone National Park, Wyoming"
        ></SectionHeader>

        {/* @ts-expect-error Server Component */}
        <MediaGrid
          imageConfig={ImagesConfig['2023/wyoming/yellowstone/artist-point']}
        />
      </section>

      <section id="mount-washburn">
        <SectionHeader
          title="Mount Washburn"
          stickyHeaderTitle="Yellowstone National Park"
          stickyHeaderSubtitle="Mount Washburn Hike"
          tag="Hike"
          icon="⛰️"
          date="August 25th, 2023"
          subtitle="Yellowstone National Park, Wyoming"
          description="A beautiful hike through the Grand Tetons. We
                        saw a moose, and the views were spectacular."
        >
          <HikeInfo
            embedUrl="https://www.alltrails.com/widget/recording/evening-hike-at-dunraven-pass-to-mount-washburn-7cac11e?scrollZoom=false&u=i&sh=pxis8l"
            distance="6.76 mi"
            elevationGain="1,434 ft"
            totalTime="3:15:57"
          />
        </SectionHeader>

        {/* @ts-expect-error Server Component */}
        <MediaGrid
          imageConfig={ImagesConfig['2023/wyoming/yellowstone/washburn']}
        />
      </section>
    </div>
  );
}
