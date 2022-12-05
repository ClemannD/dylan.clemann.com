import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { IProjectPostFields } from '../../../lib/contentful/contentful';
import { renderProps } from '../../../lib/contentful/contentful-document.helper';
import Image from 'next/image';
import Tag from '../../components/ui-elements/tag.component';
import { getImageWidthForHeight } from '../../../lib/contentful/contentful-image.helper';

export interface IProjectProps {
    project: IProjectPostFields;
}

export default function Project(props: IProjectProps) {
    const { project } = props;

    return (
        <div
            className={`
                mb-6 
                flex 
                flex-col 
                rounded 
                bg-white 
                shadow-md 
                md:flex-row
            `}
            // transition
            // ease-in-out
            // hover:scale-[1.01]
        >
            <div className="relative h-[300px] w-full md:hidden">
                <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        className="rounded-t object-cover object-left-top "
                        src={'https:' + project.projectImage?.fields.file?.url!}
                        alt={project.projectImage?.fields.description!}
                        fill
                    ></Image>
                </a>
            </div>

            <Image
                className="hidden rounded-l md:block"
                src={'https:' + project.projectImage?.fields.file?.url!}
                alt={project.projectImage?.fields.description!}
                height="400"
                width={getImageWidthForHeight(project.projectImage!, 400)}
            ></Image>
            <div className="flex flex-col p-5">
                <a
                    className={`
                        mb-2 
                        text-lg 
                        font-bold 
                        transition 
                        ease-in-out 
                        ${project.projectLink ? 'hover:text-deep-blue' : ''} 
                        lg:text-2xl
                    `}
                    href={project.projectLink}
                    target="_blank"
                    rel="noreferrer"
                >
                    {project.projectTitle}
                </a>

                <div className="mb-6 text-sm leading-[18px]">
                    {documentToReactComponents(
                        project.projectDescription!,
                        renderProps
                    )}
                </div>
                <div className="mt-auto">
                    <div className="flex">
                        <a
                            className={`
                                mt-auto
                                mb-2
                                flex
                                w-auto
                                items-center
                                text-sm
                                font-bold
                                transition
                                ease-in-out
                                hover:scale-[1.05]
                                hover:text-deep-blue
                            `}
                            href={`https://github.com/ClemannD/${project.githubRepo}`}
                            target="_blank"
                            rel="noreferrer"
                        >
                            View on Github{' '}
                            <Image
                                className="ml-2"
                                src="/github.svg"
                                width="16"
                                height="16"
                                alt="Github logo"
                            ></Image>
                        </a>
                    </div>
                    <div className="mt-3 flex flex-wrap">
                        {project.tags?.map((tag) => (
                            <Tag key={tag.sys.id} tag={tag}></Tag>
                        ))}
                        <a
                            href={`https://github.com/ClemannD/${project.githubRepo}`}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                alt="GitHub last commit"
                                src={`https://img.shields.io/github/last-commit/clemannd/${project.githubRepo}?color=B4D3F7&label=last%20updated`}
                            ></img>
                        </a>
                    </div>
                </div>
            </div>
            {/* <div className="flex flex-col p-5">
                {project.tags
                    ?.filter((tag) => tag.fields.tagIcon)
                    .map((tag) => (
                        <Image
                            className="mb-4"
                            key={tag.sys.id}
                            src={
                                'https:' + tag.fields.tagIcon?.fields.file?.url!
                            }
                            alt={tag.fields.tagIcon?.fields.description!}
                            height="70"
                            width={getImageWidthForHeight(
                                tag.fields.tagIcon!,
                                70
                            )}
                        ></Image>
                    ))}
            </div> */}
        </div>
    );
}
