import { getHeaderData } from '../../sections/header/header.data';
import Image from 'next/image';

export default async function GitHubButton() {
  const headerData = await getHeaderData();

  return (
    <a
      href={headerData.githubLink}
      target="_blank"
      className="duration-400 h-[50px] w-[50px] rounded-md p-2 backdrop-opacity-30 transition ease-in-out hover:scale-110 hover:bg-blue-800/10"
      rel="noreferrer"
      data-umami-event="github_click"
    >
      <Image src={'/Github.svg'} alt={'github'} height="35" width="35"></Image>
    </a>
  );
}
