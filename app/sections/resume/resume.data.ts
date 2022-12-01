import { IResumePostFields } from '../../../lib/contentful/contentful';
import { contentfulClient } from '../../../lib/contentful/contentful.client';

export async function getResumeData(): Promise<IResumePostFields[]> {
    const resumePosts = await contentfulClient.getEntries<IResumePostFields[]>({
        content_type: 'resumePost',
    });

    return resumePosts.items.map((item) => item.fields) as IResumePostFields[];
}
