import { IHeaderFields } from '../../../lib/contentful/contentful';
import { contentfulClient } from '../../../lib/contentful/contentful.client';

export async function getHeaderData(): Promise<IHeaderFields> {
    const headerData = await contentfulClient.getEntry<IHeaderFields>(
        '39ReFbFALe2B85zx19l0dV'
    );

    return headerData.fields;
}
