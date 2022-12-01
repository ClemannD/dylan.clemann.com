export default function SectionLabel(props: {
    label: string;
    whiteText: boolean;
    noCaret?: boolean;
}) {
    return (
        <h2
            className={`
                flex
                text-${props.whiteText ? 'white' : 'blackish'}
                max-w-lg
                text-2xl
                font-bold
                lg:max-w-full
                lg:text-3xl
            `}
        >
            {props.noCaret || <div className="mr-2 text-deep-blue">&#62; </div>}
            {props.label}
        </h2>
    );
}
