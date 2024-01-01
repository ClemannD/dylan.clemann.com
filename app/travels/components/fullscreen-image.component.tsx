'use client';

import Image from 'next/image';
import { createContext, useContext, useEffect } from 'react';
import { useHotkeys } from '@mantine/hooks';
import { Media } from '../../../models/image.model';
import { ImageCaptions } from '../data/image-captions';
import { ImagesConfig } from '../data/image-config';
import { SectionConfig } from '../data/sections-config.model';

export default function FullscreenImage() {
  const {
    mediaPath,
    mediaId,
    sectionConfigs,
    setFullscreenMediaId,
    setFullscreenMediaPath,
  } = useContext(FullscreenMediaContext);

  const fullscreenMedia =
    mediaPath && mediaId
      ? // @ts-ignore
        ImagesConfig[mediaPath ?? '']?.images.find(
          (image: Media) => image.id === mediaId
        )
      : null;

  const closeFullscreen = () => {
    setFullscreenMediaPath(null);
    setFullscreenMediaId(null);
  };

  //   If were at the last image, go to the first image of the next section
  const goToNextMedia = () => {
    if (!mediaPath || !mediaId || !sectionConfigs) return;

    // @ts-ignore
    const imageConfig = ImagesConfig[mediaPath ?? ''];
    const currentImageIndex = imageConfig.images.findIndex(
      (image: Media) => image.id === mediaId
    );

    if (currentImageIndex < imageConfig.images.length - 1) {
      setFullscreenMediaId(imageConfig.images[currentImageIndex + 1].id);
    }

    if (currentImageIndex === imageConfig.images.length - 1) {
      const currentSectionIndex = sectionConfigs.findIndex(
        (section) => section.mediaPath === mediaPath
      );

      if (currentSectionIndex < sectionConfigs.length - 1) {
        const nextSection = sectionConfigs[currentSectionIndex + 1];
        setFullscreenMediaPath(nextSection.mediaPath);
        setFullscreenMediaId(ImagesConfig[nextSection.mediaPath].images[0].id);
      }

      if (currentSectionIndex === sectionConfigs.length - 1) {
        setFullscreenMediaPath(sectionConfigs[0].mediaPath);
        setFullscreenMediaId(
          ImagesConfig[sectionConfigs[0].mediaPath].images[0].id
        );
      }
    }
  };

  const goToPreviousMedia = () => {
    if (!mediaPath || !mediaId || !sectionConfigs) return;
    // @ts-ignore
    const imageConfig = ImagesConfig[mediaPath ?? ''];
    const currentImageIndex = imageConfig.images.findIndex(
      (image: Media) => image.id === mediaId
    );

    if (currentImageIndex > 0) {
      setFullscreenMediaId(imageConfig.images[currentImageIndex - 1].id);
    }

    if (currentImageIndex === 0) {
      const currentSectionIndex = sectionConfigs.findIndex(
        (section) => section.mediaPath === mediaPath
      );

      if (currentSectionIndex > 0) {
        const previousSection = sectionConfigs[currentSectionIndex - 1];
        setFullscreenMediaPath(previousSection.mediaPath);
        setFullscreenMediaId(
          ImagesConfig[previousSection.mediaPath].images[
            ImagesConfig[previousSection.mediaPath].images.length - 1
          ].id
        );
      }

      if (currentSectionIndex === 0) {
        setFullscreenMediaPath(
          sectionConfigs[sectionConfigs.length - 1].mediaPath
        );
        setFullscreenMediaId(
          ImagesConfig[sectionConfigs[sectionConfigs.length - 1].mediaPath]
            .images[
            ImagesConfig[sectionConfigs[sectionConfigs.length - 1].mediaPath]
              .images.length - 1
          ].id
        );
      }
    }
  };

  useHotkeys([
    ['Escape', closeFullscreen],
    ['ArrowRight', goToNextMedia],
    ['ArrowLeft', goToPreviousMedia],
  ]);

  useEffect(() => {
    if (fullscreenMedia) {
      document?.body.classList.add('overflow-y-hidden');
    } else {
      document?.body.classList.remove('overflow-y-hidden');
    }
  }, [fullscreenMedia]);

  if (fullscreenMedia) {
    return (
      <div className="fixed inset-0 z-50  bg-black bg-opacity-90">
        <div className="flex h-16 w-full items-center justify-between bg-slate-100 px-4">
          <div className="flex-1">
            <button
              className="flex h-10 w-10  items-center justify-center rounded-full border bg-white  text-2xl font-bold text-black transition-colors duration-200 ease-in-out hover:bg-slate-50  "
              onClick={closeFullscreen}
            >
              &times;
            </button>
          </div>
          <div className="text-center">
            <div className="text-sm font-bold text-black">
              {
                sectionConfigs?.find(
                  (section) => section.mediaPath === mediaPath
                )?.headerTitle
              }

              {sectionConfigs?.find(
                (section) => section.mediaPath === mediaPath
              )?.headerSubtitle && (
                <span className="text-sm font-normal text-zinc-600">
                  {' '}
                  -{' '}
                  {
                    sectionConfigs?.find(
                      (section) => section.mediaPath === mediaPath
                    )?.headerSubtitle
                  }
                </span>
              )}
            </div>

            <div className="text-lg font-bold text-black">
              {/* @ts-ignore */}
              {ImageCaptions[fullscreenMedia.id]}
            </div>
          </div>

          <div className="flex flex-1 justify-end gap-2">
            <button
              className="flex h-10 items-center justify-center rounded-full border bg-white  px-4  text-black transition-colors duration-200 ease-in-out hover:bg-slate-50 "
              onClick={goToPreviousMedia}
            >
              Previous
            </button>
            <button
              className="flex h-10 items-center justify-center rounded-full border bg-white  px-4  text-black transition-colors duration-200 ease-in-out hover:bg-slate-50"
              onClick={goToNextMedia}
            >
              Next
            </button>
          </div>
        </div>
        <div className="flex h-full items-center justify-center">
          <Image
            className="max-w-screen max-h-screen object-contain"
            src={fullscreenMedia.src}
            //   @ts-ignore
            alt={ImageCaptions[fullscreenMedia.id]}
            width={fullscreenMedia.width}
            height={fullscreenMedia.height}
            placeholder={fullscreenMedia.base64Placeholder ? 'blur' : 'empty'}
            blurDataURL={fullscreenMedia.base64Placeholder ?? ''}
          />
        </div>
      </div>
    );
  } else {
    return null;
  }
}

const FullscreenMediaContext = createContext<{
  sectionConfigs: SectionConfig[] | null | undefined;
  mediaPath: keyof typeof ImagesConfig | null | undefined;
  mediaId: string | null | undefined;
  setFullscreenMediaPath: (mediaPath: keyof typeof ImagesConfig | null) => void;
  setFullscreenMediaId: (mediaId: string | null) => void;
  setSectionConfigs: (sectionConfigs: SectionConfig[]) => void;
}>({
  sectionConfigs: null,
  mediaPath: null,
  mediaId: null,
  setFullscreenMediaPath: () => {},
  setFullscreenMediaId: () => {},
  setSectionConfigs: () => {},
});

export { FullscreenMediaContext as FullscreenImageContext };
