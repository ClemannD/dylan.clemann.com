import { IProjectTag } from '../../../lib/contentful/contentful';

export interface ITagProps {
    tag: IProjectTag;
}

export default function Tag({ tag }: ITagProps) {
    return (
        <div
            className={`
                mb-[5px] 
                mr-[5px] 
                h-5
                rounded
                bg-deep-blue
                px-2
                text-[10px]
                font-medium
                leading-5
                text-white
                shadow-sm 
                transition 
                ease-in-out
                hover:scale-[1.05]
            `}
        >
            {tag?.fields?.tagTitle}
        </div>
    );
}
