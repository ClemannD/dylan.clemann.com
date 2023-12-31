import Link from 'next/link';
import { cn } from '../../../lib/contentful/utils/cn';

export default function ScrollTopButton() {
    return (
        <Link href="#" className="block text-center">
            <div
                className={cn(
                    'fixed bottom-4 right-4 z-50 rounded-full bg-slate-100 p-2',
                    {
                        hidden:
                            typeof window !== 'undefined' &&
                            window.scrollY === 0,
                    }
                )}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-zinc-700 transition-colors duration-300 ease-in-out hover:text-zinc-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 11l7-7 7 7M5 19l7-7 7 7"
                    />
                </svg>
            </div>
        </Link>
    );
}
