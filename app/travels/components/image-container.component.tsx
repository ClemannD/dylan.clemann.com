'use client';

import Image from 'next/image';
import { useContext } from 'react';
import { cn } from '../../../lib/utils/cn';
import { Media } from '../../../models/image.model';
import { ImageCaptions } from '../data/image-captions';
import { ImagesConfig } from '../data/image-config';
import { SectionConfig } from '../data/sections-config.model';
import { FullscreenImageContext } from './fullscreen-image.component';

export default function ImageContainer({
  media,
  mediaPath,
  isPano = false,
  sectionConfigs,
}: {
  media: Media;
  mediaPath: keyof typeof ImagesConfig;
  sectionConfigs: SectionConfig[];
  isPano?: boolean;
}) {
  const { setFullscreenMediaPath, setFullscreenMediaId, setSectionConfigs } =
    useContext(FullscreenImageContext);

  const imageClicked = () => {
    setFullscreenMediaPath(mediaPath);
    setFullscreenMediaId(media.id);
    setSectionConfigs(sectionConfigs);
  };

  return (
    <div className="group relative mb-2 overflow-hidden" onClick={imageClicked}>
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
            className={cn('cursor-pointer')}
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
