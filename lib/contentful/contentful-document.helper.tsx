import { Options } from '@contentful/rich-text-react-renderer';
import {
    BLOCKS,
    Hyperlink,
    INLINES,
    Paragraph,
} from '@contentful/rich-text-types';

export const renderProps = {
    renderNode: {
        [BLOCKS.PARAGRAPH]: (node: Paragraph, children: any) => (
            <p className="mb-5">{children}</p>
        ),
        [INLINES.HYPERLINK]: (node: Hyperlink, children: any) => (
            <a
                href={node.data.uri}
                target="_blank"
                style={{
                    // fontWeight: 700,
                    textDecoration: 'underline',
                }}
            >
                {children}
            </a>
        ),
    },
} as unknown as Options;
