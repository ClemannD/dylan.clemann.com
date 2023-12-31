import { Media } from '../../../models/image.model';
import ImageContainer from './image-container.component';

export default async function MediaGrid({
  imageConfig,
}: {
  imageConfig: { images: Media[]; panos: Media[] };
}) {
  return (
    <>
      <div className="mx-auto max-w-[3000px]">
        {imageConfig.panos.map((photo) => (
          <ImageContainer key={photo.id} media={photo} isPano />
        ))}
      </div>
      <div className="mx-auto max-w-[3000px] columns-1 gap-x-2 md:columns-2 lg:columns-3">
        {imageConfig.images.map((photo) => (
          <ImageContainer key={photo.id} media={photo} />
        ))}
      </div>
    </>
  );
}
