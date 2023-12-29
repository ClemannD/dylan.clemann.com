import Image from 'next/image';
import { cn } from '../../../lib/contentful/utils/cn';
import { Photo } from '../../../models/image.model';

export default function ImageContainer({
    photo,
    isPano = false,
}: {
    photo: Photo;
    isPano?: boolean;
}) {
    return (
        <div className="group mb-2  overflow-hidden">
            {/* <div className="group mb-2 cursor-pointer overflow-hidden"> */}
            <Image
                src={photo.src}
                alt={photo.alt ?? ''}
                width={photo.width}
                height={photo.height}
                sizes={isPano ? '1500px' : '550px'}
                placeholder={photo.blurredDataUrl ? 'blur' : 'empty'}
                blurDataURL={photo.blurredDataUrl ?? ''}
                // className="transition-opacity duration-200 ease-in-out group-hover:opacity-90"
            />
        </div>
    );
}
