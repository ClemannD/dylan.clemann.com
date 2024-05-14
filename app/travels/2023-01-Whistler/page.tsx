import ScrollTopButton from '../components/scroll-top-button.component';
import Image from 'next/image';
import InstagramPost from '../components/instagram-post.component';
import MediaGrid from '../components/media-grid.component';

export default function WhistlerPage() {
  return (
    <div>
      <ScrollTopButton />
      <section className="border-t bg-white ">
        <Image
          src="https://travels.clemann.app/2023/bc/whistler-cover.jpeg"
          width={2016}
          height={1512}
          sizes="100vw"
          alt="Whistler Blackcomb"
          className="max-h-[400px] w-screen object-cover"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVR4nAEnANj/AFfH/1XF/1XH/1LF/wCv2PzL8//O8//X//8AAAYCEx4dCw8BNTw45EMUVxf66SkAAAAASUVORK5CYII="
        />

        <div className="container mx-auto w-full py-6 px-4 lg:py-10 lg:px-4">
          <h1 className="text-xl font-black leading-none lg:text-4xl">
            Whistler Blackcomb
          </h1>
          <h2 className="text-zinc-700  lg:text-lg">British Columbia</h2>
          <h3 className="mb-3 text-xs text-zinc-700 lg:text-sm">
            Jan 13th - Jan 22nd, 2023
          </h3>
          <p className="text-base leading-tight lg:text-lg">
            A snowboarding trip to Whistler
          </p>
          <div className="mt-6 mb-10 flex flex-row flex-wrap justify-center gap-4">
            <InstagramPost embedUrl="https://www.instagram.com/reel/Cns0eINpVsk/" />
            <InstagramPost embedUrl="https://www.instagram.com/reel/CoJE0tlgNQP/" />
          </div>
          {/* @ts-expect-error Server Component */}
          <MediaGrid
            mediaPath={'2023/whistler'}
            sectionConfigs={[
              {
                headerTitle: 'Whistler Blackcomb',
                mediaPath: '2023/whistler',
              },
            ]}
          />{' '}
        </div>
      </section>
    </div>
  );
}
