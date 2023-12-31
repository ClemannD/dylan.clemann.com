import Image from 'next/image';
import { cn } from '../../../lib/contentful/utils/cn';
import { Photo } from '../../../models/image.model';
import { ImageCaptions } from '../data/image-captions';

export default function ImageContainer({
  photo,
  isPano = false,
}: {
  photo: Photo;
  isPano?: boolean;
}) {
  return (
    <div className="group relative  mb-2 overflow-hidden">
      {/* <div className="group mb-2 cursor-pointer overflow-hidden"> */}
      {/* @ts-ignore */}
      {ImageCaptions[photo.id] && (
        <div
          className={cn(
            'absolute left-0 bottom-0 h-10 w-full bg-black bg-opacity-0 p-2 opacity-0 transition-opacity duration-100 ease-in-out group-hover:bg-opacity-50 group-hover:opacity-100'
          )}
        >
          <div className="text-white">
            {
              // @ts-ignore
              ImageCaptions[photo.id]
            }
          </div>
        </div>
      )}
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
