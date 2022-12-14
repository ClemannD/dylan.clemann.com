import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { IResumePostFields } from '../../../lib/contentful/contentful';
import { renderProps } from '../../../lib/contentful/contentful-document.helper';
import Tag from '../../components/ui-elements/tag.component';

export interface IJobPostProps {
    jobPost: IResumePostFields;
}

export default function JobPost({ jobPost }: IJobPostProps) {
    return (
        <div
            className={`
                flex
                flex-col
                rounded-xl
                bg-white
                p-5
                shadow-lg
                transition
                ease-in-out 
                hover:scale-[1.01] 
                lg:p-7
            `}
        >
            <div className="mb-2 border-b border-slate-300">
                <div className="text-2xl font-bold leading-7 lg:text-3xl lg:leading-8">
                    {jobPost.companyName}
                </div>
                <div className="mb-2 text-lg">{jobPost.jobTitle}</div>
                <div className="mb-2 text-xs font-light text-slate-700">
                    <span>{jobPost.jobDates}</span>
                    {jobPost.jobDates2 && (
                        <>
                            <br /> <span>{jobPost.jobDates2}</span>
                        </>
                    )}
                </div>
            </div>
            <div className="mb-6 text-sm leading-[18px]">
                {documentToReactComponents(
                    jobPost.jobDescription!,
                    renderProps
                )}
            </div>

            <div className="mt-auto flex flex-wrap">
                {jobPost.tags?.map((tag) => (
                    <Tag key={tag.sys.id} tag={tag}></Tag>
                ))}
            </div>
        </div>
    );
}
