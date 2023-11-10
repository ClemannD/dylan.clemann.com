import Image from 'next/image';

export default function TravelPage() {
    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <div className="shadow-lg">
                <Image
                    src="http://clemann.app/park-ranger-ron.jpeg"
                    alt="Coming Soon"
                    width={500}
                    height={500}
                />
            </div>
        </div>
    );
}
