'use client';

import Image from 'next/image';
import { useState } from 'react';
import { cn } from '../../../lib/contentful/utils/cn';

export default function MediaCarousel({
    media,
}: {
    media: { url: string; description?: string; type: 'IMAGE' | 'VIDEO' }[];
}) {
    const [selectedMediaIndex, setSelectedMediaIndex] = useState(0);
    const selectedMedia = media[selectedMediaIndex];

    return (
        <div className="flex h-full min-h-[560px] w-full flex-col gap-3 lg:h-[860px] lg:flex-row">
            <div className="relative h-auto flex-1 lg:h-full">
                {
                    // media.map((mediaItem, index) =>
                    selectedMedia.type === 'IMAGE' ? (
                        <Image
                            key={selectedMedia.url}
                            src={selectedMedia.url}
                            alt={selectedMedia.description || ''}
                            fill
                            className={cn(
                                'h-auto w-full object-contain '
                                // index === selectedMediaIndex
                                //     ? 'block'
                                //     : 'hidden'
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
                    // )
                }
            </div>

            <div className="flex flex-row flex-wrap gap-3 lg:flex-col">
                {media.map((mediaItem, index) => (
                    <div
                        key={mediaItem.url}
                        onClick={() => setSelectedMediaIndex(index)}
                        className="cursor-pointer"
                    >
                        <Image
                            src={mediaItem.url}
                            alt={mediaItem.description || ''}
                            height="100"
                            width="100"
                            className={cn(
                                'object-cover',
                                selectedMediaIndex === index
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
