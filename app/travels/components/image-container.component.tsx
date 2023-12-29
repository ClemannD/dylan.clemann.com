import Image from 'next/image';
import { Photo } from '../../../models/image.model';

type Props = {
    photo: Photo;
};

export default function ImageContainer({ photo }: Props) {
    return (
        <div className="mb-2 w-full">
            <div className="group cursor-pointer overflow-hidden">
                {photo.blurredDataUrl ? (
                    <Image
                        src={photo.src}
                        alt={photo.alt ?? ''}
                        width={photo.width}
                        height={photo.height}
                        sizes="550px"
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
                        sizes="550px"
                        className="md:group-hover:opacity-75"
                    />
                )}
            </div>
        </div>
    );
}
