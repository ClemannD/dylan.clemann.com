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
      <div className="fixed inset-0 z-50  flex flex-col bg-black bg-opacity-90">
        <div className="min-h-16 flex w-full flex-wrap items-center justify-between gap-2 bg-slate-100 px-4 py-2 lg:flex-nowrap">
          <div className="order-1 flex-grow">
            <button
              className="flex h-6 w-6 items-center justify-center  rounded-full border bg-white text-lg font-bold text-black transition-colors duration-200 ease-in-out hover:bg-slate-50 lg:h-10 lg:w-10 lg:text-2xl  "
              onClick={closeFullscreen}
            >
              &times;
            </button>
          </div>
          <div className="order-3 mx-auto w-full text-center lg:order-2 lg:w-auto">
            <div className="text-sm font-bold text-black">
              {
                sectionConfigs?.find(
                  (section) => section.mediaPath === mediaPath
                )?.headerTitle
              }

              {sectionConfigs?.find(
                (section) => section.mediaPath === mediaPath
              )?.headerSubtitle && (
                <span className="block text-sm font-normal text-zinc-600 lg:inline">
                  <span className="hidden lg:inline"> - </span>
                  {
                    sectionConfigs?.find(
                      (section) => section.mediaPath === mediaPath
                    )?.headerSubtitle
                  }
                </span>
              )}
            </div>

            <div className="text-sm font-normal text-black lg:text-lg lg:font-bold">
              {/* @ts-ignore */}
              {ImageCaptions[fullscreenMedia.id]}
            </div>
          </div>

          <div className="order-2 flex flex-grow justify-end gap-2 lg:order-3">
            <button
              className="flex h-6 items-center justify-center rounded-full border bg-white px-2 text-sm text-black transition-colors duration-200  ease-in-out hover:bg-slate-50 lg:h-10 lg:px-4 lg:text-base "
              onClick={goToPreviousMedia}
            >
              Previous
            </button>
            <button
              className="flex h-6 items-center justify-center rounded-full border bg-white px-2 text-sm text-black transition-colors duration-200  ease-in-out hover:bg-slate-50 lg:h-10 lg:px-4 lg:text-base"
              onClick={goToNextMedia}
            >
              Next
            </button>
          </div>
        </div>

        <div className="flex flex-grow items-center justify-center">
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
