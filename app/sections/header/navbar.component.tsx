import Image from 'next/image';
import { getImageWidthForHeight } from '../../../lib/contentful/contentful-image.helper';
import Container from '../../components/layout/container.component';
import { getHeaderData } from './header.data';

export default async function HeaderNavbarComponent() {
    const headerData = await getHeaderData();

    return (
        <nav>
            <Container className="flex h-20 items-center justify-between lg:h-28 lg:pt-12">
                <div className="flex items-center">
                    <Image
                        className="lg:hidden"
                        src={'https:' + headerData.logo?.fields.file?.url!}
                        alt={headerData.logo?.fields.description!}
                        height="35"
                        width={getImageWidthForHeight(headerData.logo!, 35)}
                    ></Image>
                    <Image
                        className="hidden lg:block"
                        src={'https:' + headerData.logo?.fields.file?.url!}
                        alt={headerData.logo?.fields.description!}
                        height="65"
                        width={getImageWidthForHeight(headerData.logo!, 65)}
                    ></Image>

                    <div className="ml-4 hidden lg:block">
                        <h2 className="text-3xl font-medium uppercase tracking-widest">
                            Dylan Clemann
                        </h2>
                        <h3 className="text-xs font-light uppercase tracking-widest">
                            Software Engineer
                        </h3>
                    </div>
                </div>

                <a
                    href={headerData.githubLink}
                    target="_blank"
                    className="duration-400 rounded-md p-2 backdrop-opacity-30 transition ease-in-out hover:scale-110 hover:bg-blue-800/10"
                    rel="noreferrer"
                >
                    <Image
                        src={'/Github.svg'}
                        alt={'github'}
                        height="35"
                        width="35"
                    ></Image>
                </a>
            </Container>
        </nav>
    );
}
