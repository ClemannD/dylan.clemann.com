import { Photo } from '../../../models/image.model';
import addBlurredDataUrls from '../../../util/getBase64';
import ImageContainer from './image-container.component';

export default async function MediaGrid({ images }: { images: Photo[] }) {
    const photosWithBlur = await addBlurredDataUrls(images);

    return (
        <div className="columns-1 gap-x-2 md:columns-2 lg:columns-3">
            {photosWithBlur.map((photo) => (
                <ImageContainer key={photo.id} photo={photo} />
            ))}
        </div>
    );
}
