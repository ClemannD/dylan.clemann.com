'use client';

import { useState } from 'react';
import { FullscreenImageContext } from './components/fullscreen-image.component';
import { ImagesConfig } from './data/image-config';
import { SectionConfig } from './data/sections-config.model';

export default function TravelProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mediaPath, setFullscreenMediaPath] = useState<
    keyof typeof ImagesConfig | null
  >();
  const [mediaId, setFullscreenMediaId] = useState<string | null>();
  const [sectionConfigs, setSectionConfigs] = useState<SectionConfig[]>([]);

  return (
    <FullscreenImageContext.Provider
      value={{
        mediaId,
        mediaPath,
        sectionConfigs,
        setFullscreenMediaPath,
        setFullscreenMediaId,
        setSectionConfigs,
      }}
    >
      {children}
    </FullscreenImageContext.Provider>
  );
}
