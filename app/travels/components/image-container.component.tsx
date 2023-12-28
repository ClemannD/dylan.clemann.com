import Image from 'next/image';
import { Photo } from '../../../models/image.model';

type Props = {
    photo: Photo;
};

export default function ImageContainer({ photo }: Props) {
    const widthHeightRatio = photo.height / photo.width;
    const galleryHeight = Math.ceil(350 * widthHeightRatio);
    const photoSpans = Math.ceil(galleryHeight / 10) + 1;

    return (
        <div
            className="w-[350px] justify-self-center"
            style={{ gridRow: `span ${photoSpans}` }}
        >
            <div className="group cursor-pointer overflow-hidden rounded">
                {photo.blurredDataUrl ? (
                    <Image
                        src={photo.src}
                        alt={photo.alt ?? ''}
                        width={photo.width}
                        height={photo.height}
                        sizes="350px"
                        placeholder="blur"
                        blurDataURL={photo.blurredDataUrl}
                        className="group-hover:opacity-75"
                    />
                ) : (
                    <Image
                        src={photo.src}
                        alt={photo.alt ?? ''}
                        width={photo.width}
                        height={photo.height}
                        sizes="350px"
                        className="group-hover:opacity-75"
                    />
                )}
            </div>
        </div>
    );
}
