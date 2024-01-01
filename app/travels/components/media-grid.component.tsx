import { ImagesConfig } from '../data/image-config';
import { SectionConfig } from '../data/sections-config.model';
import ImageContainer from './image-container.component';

export default async function MediaGrid({
  mediaPath,
  sectionConfigs,
}: {
  mediaPath: keyof typeof ImagesConfig;
  sectionConfigs: SectionConfig[];
}) {
  const imageConfig = ImagesConfig[mediaPath];

  return (
    <>
      <div className="mx-auto max-w-[3000px]">
        {imageConfig.panos.map((photo) => (
          <ImageContainer
            key={photo.id}
            media={photo}
            isPano
            mediaPath={mediaPath}
            sectionConfigs={sectionConfigs}
          />
        ))}
      </div>
      <div className="mx-auto max-w-[3000px] columns-1 gap-x-2 md:columns-2 lg:columns-3">
        {imageConfig.images.map((photo) => (
          <ImageContainer
            key={photo.id}
            media={photo}
            mediaPath={mediaPath}
            sectionConfigs={sectionConfigs}
          />
        ))}
      </div>
    </>
  );
}
