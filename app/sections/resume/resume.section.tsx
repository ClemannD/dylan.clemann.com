import Container from '../../components/layout/container.component';
import SectionLabel from '../../components/section-label.component';
import JobPost from './job-post.component';
import { getResumeData } from './resume.data';

export default async function ResumeSection() {
    const resumeData = await getResumeData();

    return (
        <div className="bg-slate-100">
            <Container className="py-10 lg:py-16">
                <SectionLabel
                    label="Professional Experience"
                    whiteText={false}
                ></SectionLabel>

                <div className="mt-5 grid gap-6 sm:grid-cols-1 md:grid-cols-2 md:gap-8 lg:mt-10 xl:grid-cols-3">
                    {resumeData.map((jobPost) => (
                        <JobPost key={jobPost.companyName} jobPost={jobPost} />
                    ))}
                </div>
            </Container>
        </div>
    );
}
