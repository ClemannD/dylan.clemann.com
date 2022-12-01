import { IBioFields } from '../../../lib/contentful/contentful';
import { contentfulClient } from '../../../lib/contentful/contentful.client';

export async function getBioData(): Promise<IBioFields> {
    const bioData = await contentfulClient.getEntry<IBioFields>(
        '3fu6uBWrAdL6Wl0MxuBHiS'
    );

    return bioData.fields;
}
