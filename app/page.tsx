import BioSection from './sections/bio/bio.section';
import HeaderSection from './sections/header/header.section';
import ProjectsSection from './sections/projects/projects.section';
import ResumeSection from './sections/resume/resume.section';

export default async function Home() {
    return (
        <div>
            {/* @ts-expect-error Server Component */}
            <HeaderSection></HeaderSection>
            {/* @ts-expect-error Server Component */}
            <BioSection />
            {/* @ts-expect-error Server Component */}
            <ResumeSection />
            {/* @ts-expect-error Server Component */}
            <ProjectsSection />
        </div>
    );
}
