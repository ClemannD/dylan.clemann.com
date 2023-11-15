import Link from 'next/link';
import { getProjectSectionData } from '../sections/projects/projects.data';
import GitHubButton from '../components/ui-elements/github-button.component';
import Image from 'next/image';
import { TripsConfig } from '../travels/components/travel.data';

export default async function Footer() {
    const projectSection = await getProjectSectionData();

    return (
        <footer className="h-auto w-full bg-slate-100 px-4 lg:px-10">
            <div className="container mx-auto flex h-full flex-col pt-4 lg:pt-10">
                <div className="flex flex-col flex-wrap justify-between gap-8 lg:flex-row">
                    <div className="w-80">
                        <div className="mb-3 font-bold text-black">
                            <Link className="hover:underline" href="../">
                                Projects
                            </Link>
                        </div>
                        <div className="flex flex-col gap-1">
                            {projectSection.projectPosts?.map((projectPost) => (
                                <div key={projectPost.fields.projectTitle}>
                                    <Link
                                        target="_blank"
                                        href={
                                            projectPost.fields.projectLink ||
                                            '#'
                                        }
                                        className="text-sm font-normal text-zinc-800 transition-colors hover:text-black hover:underline"
                                    >
                                        {projectPost.fields.projectTitle}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex-1 ">
                        <div className="mb-3 font-bold text-black">
                            <Link className="hover:underline" href="/travel">
                                Travels
                            </Link>
                        </div>
                        <div className="flex flex-col lg:flex-row lg:gap-8">
                            <div className="flex flex-col flex-wrap gap-1">
                                {TripsConfig.slice(0, 5).map((trip) => (
                                    <div key={trip.name}>
                                        <Link
                                            href={trip.path}
                                            className="text-sm font-normal text-zinc-800 transition-colors hover:text-black hover:underline"
                                        >
                                            {trip.name}
                                        </Link>
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-col flex-wrap gap-1">
                                {TripsConfig.slice(5, 10).map((trip) => (
                                    <div key={trip.name}>
                                        <Link
                                            href={trip.path}
                                            className="text-sm font-normal text-zinc-800 transition-colors hover:text-black hover:underline"
                                        >
                                            {trip.name}
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mb-4 flex flex-row items-center justify-center gap-4 lg:flex-col lg:items-end">
                        {/* @ts-expect-error Server Component */}
                        <GitHubButton />

                        <a
                            href={'https://www.instagram.com/clemannd/?hl=en'}
                            target="_blank"
                            className="duration-400 h-[50px] w-[50px] rounded-md p-2 backdrop-opacity-30 transition ease-in-out hover:scale-110 hover:bg-blue-800/10"
                            rel="noreferrer"
                        >
                            <Image
                                src={'/insta.png'}
                                alt={'instagram'}
                                height="35"
                                width="35"
                            ></Image>
                        </a>
                    </div>
                </div>

                <div className="mt-8 w-96 self-center border-t text-center">
                    <div className="py-4 text-xs text-slate-500">
                        © 2019 - {new Date().getFullYear()}{' '}
                        <a
                            href="/"
                            className="mx-2 font-bold text-slate-600 hover:text-slate-700"
                        >
                            Dylan Clemann
                        </a>{' '}
                        All Rights Reserved
                    </div>
                </div>
            </div>
        </footer>
    );
}
