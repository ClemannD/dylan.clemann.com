import Image from 'next/image';
import { Photo } from '../../../models/image.model';

type Props = {
    photo: Photo;
};

export default function ImageContainer({ photo }: Props) {
    const widthHeightRatio = photo.height / photo.width;
    const galleryHeight = Math.ceil(250 * widthHeightRatio);
    const photoSpans = Math.ceil(galleryHeight / 5) + 1;

    return (
        <div
            className="mb-2 w-full justify-self-center md:mb-auto md:w-[250px]"
            style={{ gridRow: `span ${photoSpans}` }}
        >
            <div className="group cursor-pointer overflow-hidden ">
                {photo.blurredDataUrl ? (
                    <Image
                        src={photo.src}
                        alt={photo.alt ?? ''}
                        width={photo.width}
                        height={photo.height}
                        sizes="250px"
                        placeholder="blur"
                        blurDataURL={photo.blurredDataUrl}
                        className="transition-opacity duration-200 ease-in-out group-hover:opacity-75"
                    />
                ) : (
                    <Image
                        src={photo.src}
                        alt={photo.alt ?? ''}
                        width={photo.width}
                        height={photo.height}
                        sizes="250px"
                        className="group-hover:opacity-75"
                    />
                )}
            </div>
        </div>
    );
}
