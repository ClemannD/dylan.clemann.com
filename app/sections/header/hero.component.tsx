import ArchitectureGraphic from '../../components/architecture-graphic/architecture-graphic.component';
import Container from '../../components/layout/container.component';
import { getHeaderData } from './header.data';
import Skills from './hero-skills.component';

export default async function HeaderHeroComponent() {
    const headerData = await getHeaderData();

    return (
        <Container className="mt-10 flex flex-col pb-36 md:flex-row md:items-center md:justify-between">
            <div>
                <h3 className="text-xl font-light ">Dylan Clemann</h3>
                <h1 className=" mb-4 text-4xl font-extrabold leading-9  lg:text-5xl">
                    Software Engineer
                </h1>
                <h2 className="text-xl lg:text-2xl">
                    {headerData.tagLine}{' '}
                    <Skills
                        skills={
                            headerData.tagLineEndings?.skills as {
                                name: string;
                                color: string;
                            }[]
                        }
                    />
                </h2>
            </div>
            <div className="flex justify-center pt-8 pb-12 pl-8">
                <ArchitectureGraphic />
            </div>
        </Container>
    );
}
