import {
    IProjectPostFields,
    IProjectSectionFields,
} from '../../../lib/contentful/contentful';
import { contentfulClient } from '../../../lib/contentful/contentful.client';

export async function getProjectSectionData(): Promise<IProjectSectionFields> {
    const projectSection =
        await contentfulClient.getEntry<IProjectSectionFields>(
            '2L0JZIhMDdBVTf4ZW6jIr2',
            {
                include: 3,
            }
        );

    console.log('projectSection', projectSection);
    return projectSection.fields;
}
