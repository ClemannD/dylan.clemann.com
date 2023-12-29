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
        <div
            className={cn('col-span-1 mb-2', {
                // 'md:col-span-2 lg:col-span-3': photo.width > photo.height,
                // 'md:col-span-1': photo.width <= photo.height,
                'col-span-full': isPano,
            })}
        >
            <div className="group cursor-pointer overflow-hidden">
                {photo.blurredDataUrl ? (
                    <Image
                        src={photo.src}
                        alt={photo.alt ?? ''}
                        width={photo.width}
                        height={photo.height}
                        sizes={isPano ? '1500px' : '550px'}
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
                        sizes={isPano ? '1500px' : '550px'}
                        className="md:group-hover:opacity-75"
                    />
                )}
            </div>
        </div>
    );
}
