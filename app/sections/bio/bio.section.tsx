import {
    documentToReactComponents,
    Options,
} from '@contentful/rich-text-react-renderer';
import { renderProps } from '../../../lib/contentful/contentful-document.helper';

import Container from '../../components/layout/container.component';
import SectionLabel from '../../components/section-label.component';
import { getBioData } from './bio.data';

export default async function BioSection() {
    const bioData = await getBioData();

    return (
        <section className="relative -mt-24">
            <div className="absolute -top-5 h-24 w-full bg-plus-pattern bg-repeat"></div>
            <div
                className={`
                    clip-bio-polygon 
                    lg:clip-bio-polygon-lg 
                    flex 
                    items-center 
                    justify-center 
                    bg-[#151e21] 
                    py-[75px]
                `}
            >
                <Container>
                    <SectionLabel
                        label={bioData.sectionLabel!}
                        whiteText={true}
                        noCaret
                    />

                    <div className="text-md mt-5 leading-7 text-white lg:text-xl lg:leading-8">
                        {documentToReactComponents(bioData.bio!, renderProps)}
                    </div>
                </Container>
            </div>
        </section>
    );
}
