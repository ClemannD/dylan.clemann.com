import Image from 'next/image';
import { Media } from '../../../models/image.model';

export default function FullscreenImage({ photo }: { photo: Media }) {
  return (
    <div className="fixed inset-0 z-50 flex h-screen w-screen items-center justify-center overflow-hidden bg-black opacity-90">
      {/* <div className="absolute inset-0 bg-black opacity-90"></div> */}
      {/* <div className="relative">
        <Image
          src={photo.src}
          alt={photo.alt ?? ''}
          width={photo.width}
          height={photo.height}
        />
      </div> */}
    </div>
  );
}
