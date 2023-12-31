import Image from 'next/image';
import Link from 'next/link';
import { getImageWidthForHeight } from '../../lib/contentful/contentful-image.helper';
import { getHeaderData } from '../sections/header/header.data';

export default async function TravelLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const headerData = await getHeaderData();

    return (
        <div className="min-h-screen w-full  bg-slate-50 bg-[url('/topography.svg')] bg-repeat">
            <nav className="h-20 w-full bg-slate-100 px-4 lg:px-10">
                <div className="container mx-auto  h-full">
                    <div className="flex h-full items-center justify-between">
                        <Link
                            href={'/travels'}
                            className="flex h-full items-center gap-2"
                        >
                            <Image
                                src={
                                    'https:' +
                                    headerData.logo?.fields.file?.url!
                                }
                                alt={headerData.logo?.fields.description!}
                                height="35"
                                width={getImageWidthForHeight(
                                    headerData.logo!,
                                    35
                                )}
                            ></Image>
                            <div className="text-2xl font-black">Travels</div>
                        </Link>

                        <div className="flex items-center gap-12">
                            <Link
                                href={'/travels'}
                                className="font-bold text-almostBlack transition-transform ease-in-out hover:scale-105"
                            >
                                Home
                            </Link>
                            <Link
                                href={'/'}
                                className="text-xs text-almostBlack transition-transform ease-in-out hover:scale-105"
                            >
                                Back to main site
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
            {children}
        </div>
    );
}
