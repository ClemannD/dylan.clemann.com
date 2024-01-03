import MediaGrid from '../components/media-grid.component';
import ScrollTopButton from '../components/scroll-top-button.component';
import { SectionConfig } from '../data/sections-config.model';
import Image from 'next/image';
import SectionHeader from '../components/section-header.component';
import HikeInfo from '../components/hike-info.component';

const sectionConfigs: SectionConfig[] = [
  {
    headerTitle: 'Smokey Mountain National Park',
    headerSubtitle: 'Alum Cave to Mount LeConte Hike',
    mediaPath: '2023/smokey/alum-cave',
  },
  {
    headerTitle: 'Other trails in the park and Gatlinburg',
    mediaPath: '2023/smokey/park',
  },
];

export default function WyomingPage() {
  return (
    <div>
      <ScrollTopButton />
      <section className="border-t bg-white ">
        <Image
          src="https://clemann.app/2023/smokey/park/006-rolling-hills-and-clouds.webp"
          width={2016}
          height={1512}
          sizes="100vw"
          alt="Clouds over Smokey Mountains"
          className="max-h-[400px] w-screen object-cover"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVR4nAEnANj/AFfH/1XF/1XH/1LF/wCv2PzL8//O8//X//8AAAYCEx4dCw8BNTw45EMUVxf66SkAAAAASUVORK5CYII="
        />

        <div className="container mx-auto w-full py-6 px-4 lg:py-10 lg:px-4">
          <h1 className="text-xl font-black leading-none lg:text-4xl">
            Smokey Mountain National Park & Gatlinburg
          </h1>
          <h2 className="text-zinc-700  lg:text-lg">Tennessee</h2>
          <h3 className="mb-3 text-xs text-zinc-700 lg:text-sm">
            May 26th - May 30th, 2023
          </h3>

          <p className="text-base leading-tight lg:text-lg">
            A quick trip to Gatlinburg, Tennessee, with a few hikes in Smokey
            Mountain National Park.
          </p>
        </div>
      </section>

      <section id="lake-of-the-crags">
        <SectionHeader
          title="Alum Cave to Mount LeConte"
          stickyHeaderTitle="Smokey Mountain National Park"
          stickyHeaderSubtitle="Alum Cave to Mount LeConte Hike"
          tag="Hike"
          icon="⛰️"
          date="May 27th, 2023"
          subtitle="Smokey Mountain National Park, Tennessee"
        >
          <HikeInfo
            embedUrl="https://www.alltrails.com/widget/recording/afternoon-hike-141aa4f--461?scrollZoom=false&u=i&sh=pxis8l"
            distance="12.92 mi"
            elevationGain="3,183 ft"
            totalTime="7:10:11"
          />
        </SectionHeader>

        {/* @ts-expect-error Server Component */}
        <MediaGrid
          mediaPath="2023/smokey/alum-cave"
          sectionConfigs={sectionConfigs}
        />
      </section>

      <section>
        <SectionHeader
          title="Other trails in the park and Gatlinburg"
          stickyHeaderTitle="Other trails in the park and Gatlinburg"
          subtitle="Tennessee"
          description="Grotto Falls trail, Laurel Falls trail, Clingman's Dome, the Appalachian Trail, and Gatlinburg"
        ></SectionHeader>

        {/* @ts-expect-error Server Component */}
        <MediaGrid
          mediaPath="2023/smokey/park"
          sectionConfigs={sectionConfigs}
        />
      </section>
    </div>
  );
}
