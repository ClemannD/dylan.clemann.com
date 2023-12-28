'use client';

import Image from 'next/image';
import { useState } from 'react';
import { cn } from '../../../lib/contentful/utils/cn';
import { blurImage } from './blur-image';

export default function MediaCarousel({
    media,
}: {
    media: { url: string; description?: string; type: 'IMAGE' | 'VIDEO' }[];
}) {
    const [selectedMediaIndex, setSelectedMediaIndex] = useState(0);
    // const selectedMedia = media[selectedMediaIndex];

    return (
        <div className="flex h-full min-h-[560px] w-full transform-gpu flex-col gap-3 lg:h-[860px] lg:flex-row">
            <div className="relative h-auto flex-1 lg:h-full">
                {media.map((mediaItem, index) =>
                    mediaItem.type === 'IMAGE' ? (
                        // selectedMedia.type === 'IMAGE' ? (
                        <Image
                            // key={selectedMedia.url}
                            // src={selectedMedia.url}
                            // alt={selectedMedia.description || ''}
                            key={mediaItem.url}
                            src={mediaItem.url}
                            alt={mediaItem.description || ''}
                            fill
                            placeholder="blur"
                            blurDataURL={blurImage}
                            className={cn(
                                'h-auto w-full object-contain ',
                                index === selectedMediaIndex
                                    ? 'block'
                                    : 'hidden'
                            )}
                            quality={100}
                        />
                    ) : (
                        <video
                            key={mediaItem.url}
                            controls
                            playsInline
                            disablePictureInPicture
                            disableRemotePlayback
                            controlsList="nodownload"
                            className={cn(
                                'h-auto w-full object-contain ',
                                index === selectedMediaIndex
                                    ? 'block'
                                    : 'hidden'
                            )}
                        >
                            <source src={mediaItem.url} type="video/mp4" />
                        </video>
                    )
                )}
            </div>

            <div className="flex flex-row flex-wrap gap-3 lg:flex-col">
                {media.map((mediaItem, index) => (
                    <div
                        key={mediaItem.url}
                        onClick={() => setSelectedMediaIndex(index)}
                        onMouseOver={() => setSelectedMediaIndex(index)}
                        className="cursor-pointer"
                    >
                        {mediaItem.type === 'IMAGE' ? (
                            <Image
                                src={mediaItem.url}
                                alt={mediaItem.description || ''}
                                height="120"
                                width="120"
                                className={cn(
                                    'object-cover',
                                    selectedMediaIndex === index
                                        ? 'border-2 border-sky-600 opacity-100 shadow'
                                        : 'opacity-80'
                                )}
                            />
                        ) : (
                            <video
                                key={mediaItem.url}
                                controls
                                className=" object-contain"
                                height="120"
                                width="120"
                                playsInline
                                disablePictureInPicture
                                disableRemotePlayback
                                controlsList="nodownload"
                            >
                                <source src={mediaItem.url} type="video/mp4" />
                            </video>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
