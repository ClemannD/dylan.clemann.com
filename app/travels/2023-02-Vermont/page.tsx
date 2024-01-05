import Image from 'next/image';
import ScrollTopButton from '../components/scroll-top-button.component';

export default function VermontPage() {
  return (
    <div>
      <ScrollTopButton />
      <section className="border-t bg-white ">
        <Image
          src="https://clemann.app/2023/vermont/vermont-cover.jpeg"
          width={2016}
          height={1512}
          sizes="100vw"
          alt="Okemo forest"
          className="max-h-[400px] w-screen object-cover"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVR4nAEnANj/AFfH/1XF/1XH/1LF/wCv2PzL8//O8//X//8AAAYCEx4dCw8BNTw45EMUVxf66SkAAAAASUVORK5CYII="
        />

        <div className="container mx-auto w-full py-6 px-4 lg:py-10 lg:px-4">
          <h1 className="text-xl font-black leading-none lg:text-4xl">
            Okemo Mountain Resort
          </h1>
          <h2 className="text-zinc-700  lg:text-lg">Vermont</h2>
          <h3 className="mb-3 text-xs text-zinc-700 lg:text-sm">
            Feb 22nd - Feb 27th, 2023
          </h3>

          <p className="text-base leading-tight lg:text-lg">
            A snowboarding trip to Okemo, Vermont
          </p>

          <div className="mt-6 flex flex-col items-center">
            <iframe
              className="aspect-video"
              width="100%"
              src="https://www.youtube-nocookie.com/embed/fcCbkAU0ILA?si=NsnRPPrevxnlPBoV"
              title="YouTube video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <p className="mt-1 text-sm">
              *Make sure to set quality to 2160p (4k) for clearest picture
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
