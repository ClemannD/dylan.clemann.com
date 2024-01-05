import './globals.css';
import { Montserrat } from 'next/font/google';
import Footer from './components/footer';
import { Analytics } from '@vercel/analytics/react';

// If loading a variable font, you don't need to specify the font weight
const montserrat = Montserrat({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={montserrat.className}>
        {children}
        {/* @ts-expect-error Server Component */}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
