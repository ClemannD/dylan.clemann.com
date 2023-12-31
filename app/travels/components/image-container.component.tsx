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
                sizes={
                    isPano
                        ? '100vw'
                        : '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                }
                placeholder={photo.base64Placeholder ? 'blur' : 'empty'}
                blurDataURL={photo.base64Placeholder ?? ''}
                // className="transition-opacity duration-200 ease-in-out group-hover:opacity-90"
            />
        </div>
    );
}
