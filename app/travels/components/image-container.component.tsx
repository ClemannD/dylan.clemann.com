import Image from 'next/image';
import { cn } from '../../../lib/contentful/utils/cn';
import { Media } from '../../../models/image.model';
import { ImageCaptions } from '../data/image-captions';

export default function ImageContainer({
  media,
  isPano = false,
}: {
  media: Media;
  isPano?: boolean;
}) {
  return (
    <div className="group relative  mb-2 overflow-hidden">
      {media.isVideo ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          width="100%"
          poster={media.base64Placeholder ?? ''}
        >
          <source src={media.src} type="video/mp4" />
        </video>
      ) : (
        <>
          {/* @ts-ignore */}
          {ImageCaptions[media.id] && (
            <div
              className={cn(
                'absolute left-0 bottom-0 h-6 w-full bg-black bg-opacity-0 p-1 opacity-0 transition-opacity duration-100 ease-in-out group-hover:bg-opacity-50 group-hover:opacity-100 md:h-10 md:p-2'
              )}
            >
              <div className="text-xs text-white md:text-base">
                {
                  // @ts-ignore
                  ImageCaptions[media.id]
                }
              </div>
            </div>
          )}
          <Image
            src={media.src}
            alt={media.alt ?? ''}
            width={media.width}
            height={media.height}
            sizes={
              isPano
                ? '100vw'
                : '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            }
            placeholder={media.base64Placeholder ? 'blur' : 'empty'}
            blurDataURL={media.base64Placeholder ?? ''}
          />
        </>
      )}
    </div>
  );
}
