export interface IContainerProps {
    className?: string;
    children: React.ReactNode;
}

export default function Container(props: IContainerProps) {
    return (
        <div
            className={`mx-auto w-full max-w-[1420px] px-5 md:px-8 lg:px-12 ${
                props.className ?? ''
            }`}
        >
            {props.children}
        </div>
    );
}
