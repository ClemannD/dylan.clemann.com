import Container from '../../components/layout/container.component';
import SectionLabel from '../../components/section-label.component';
import Project from './project.component';
import { getProjectSectionData } from './projects.data';

export default async function ProjectsSection() {
    const projectSection = await getProjectSectionData();

    return (
        <div className="relative -mt-24 ">
            <div className="absolute -top-5 h-24 w-full bg-plus-pattern bg-repeat"></div>
            <div className="clip-polygon-reverse bg-blue-gradient3">
                <Container className="pb-10 pt-20 lg:pb-16">
                    <SectionLabel
                        label={projectSection.projectSectionTitle!}
                        whiteText={false}
                    />

                    <div className="mt-5 lg:mt-10">
                        {projectSection.projectPosts?.map((projectPost) => (
                            <Project
                                key={projectPost.fields.projectTitle}
                                project={projectPost.fields}
                            />
                        ))}
                    </div>
                </Container>
            </div>
        </div>
    );
}
