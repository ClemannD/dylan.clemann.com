// a grid layout masonry style for media items.
import Image from 'next/image';
import { Photo } from '../../../models/image.model';
import addBlurredDataUrls from '../../../util/getBase64';
import { blurImage } from './blur-image';
import ImageContainer from './image-container.component';

export default async function MediaGrid({ images }: { images: Photo[] }) {
    const photosWithBlur = await addBlurredDataUrls(images);

    return (
        <div className="grid auto-rows-[10px] grid-cols-gallery ">
            {photosWithBlur.map((photo) => (
                <ImageContainer key={photo.id} photo={photo} />
            ))}
        </div>
    );
}
