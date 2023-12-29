import { Photo } from '../../../models/image.model';
import addBlurredDataUrls from '../../../util/getBase64';
import ImageContainer from './image-container.component';

export default async function MediaGrid({
    imageConfig,
}: {
    imageConfig: { images: Photo[]; panos: Photo[] };
}) {
    // const photosWithBlur = await addBlurredDataUrls(images);

    return (
        <>
            <div className="">
                {imageConfig.panos.map((photo) => (
                    // {photosWithBlur.map((photo) => (
                    <ImageContainer key={photo.id} photo={photo} isPano />
                ))}
            </div>
            <div className="columns-1 gap-x-2 md:columns-2 lg:columns-3">
                {/* <div className="grid grid-cols-1 gap-x-2 md:grid-cols-2 lg:grid-cols-3"> */}

                {imageConfig.images.map((photo) => (
                    // {photosWithBlur.map((photo) => (
                    <ImageContainer key={photo.id} photo={photo} />
                ))}
            </div>
        </>
    );
}
