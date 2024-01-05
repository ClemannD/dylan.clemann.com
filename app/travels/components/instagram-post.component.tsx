'use client';

import { InstagramEmbed } from 'react-social-media-embed';

export default function InstagramPost({ embedUrl }: { embedUrl: string }) {
  return <InstagramEmbed url={embedUrl} width={328} />;
}
