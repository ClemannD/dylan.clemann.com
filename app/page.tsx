import BioSection from './sections/bio/bio.section';
import HeaderSection from './sections/header/header.section';

export default async function Home() {
    return (
        <div>
            {/* @ts-expect-error Server Component */}
            <HeaderSection></HeaderSection>
            {/* @ts-expect-error Server Component */}
            <BioSection />
        </div>
    );
}
