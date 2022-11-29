export default async function BioSection() {
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
            ></div>
        </section>
    );
}
