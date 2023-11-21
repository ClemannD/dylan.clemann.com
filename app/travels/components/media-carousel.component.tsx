'use client';

import Image from 'next/image';
import { useState } from 'react';
import { cn } from '../../../lib/contentful/utils/cn';

export default function MediaCarousel({
    media,
}: {
    media: { url: string; description?: string; type: 'IMAGE' | 'VIDEO' }[];
}) {
    const [selectedMedia, setSelectedMedia] = useState(media[0]);

    return (
        <div className="flex h-full min-h-[560px] w-full flex-col gap-3 lg:h-[860px] lg:flex-row">
            <div className="relative h-auto flex-1 lg:h-full">
                {media.map((mediaItem) =>
                    selectedMedia.type === 'IMAGE' ? (
                        <Image
                            key={selectedMedia.url}
                            src={selectedMedia.url}
                            alt={selectedMedia.description || ''}
                            fill
                            className={cn(
                                'h-auto w-full object-contain ',
                                selectedMedia.url === mediaItem.url
                                    ? 'block'
                                    : 'hidden'
                            )}
                            quality={100}
                        />
                    ) : (
                        <video
                            key={selectedMedia.url}
                            controls
                            className="h-full w-full object-contain"
                            playsInline
                            disablePictureInPicture
                            disableRemotePlayback
                            controlsList="nodownload"
                        >
                            <source src={selectedMedia.url} type="video/mp4" />
                        </video>
                    )
                )}
            </div>

            <div className="flex flex-row flex-wrap gap-3 lg:flex-col">
                {media.map((mediaItem) => (
                    <div
                        key={mediaItem.url}
                        onClick={() => setSelectedMedia(mediaItem)}
                        className="cursor-pointer"
                    >
                        <Image
                            src={mediaItem.url}
                            alt={mediaItem.description || ''}
                            height="100"
                            width="100"
                            className={cn(
                                'object-cover',
                                selectedMedia.url === mediaItem.url
                                    ? 'border-2 border-sky-600 opacity-100 shadow'
                                    : 'opacity-80'
                            )}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
