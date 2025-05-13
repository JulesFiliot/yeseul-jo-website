import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Navigation } from './_components/navigation/Navigation';
import localFont from 'next/font/local';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const quicksand = localFont({
  src: '../public/fonts/Quicksand[wght].ttf',
  variable: '--font-quicksand',
});

export const metadata: Metadata = {
  title: 'Yeseul Jo',
  description: "Yeseul Jo's website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full w-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${quicksand.variable} flex h-full w-full px-4 pt-10 text-base md:px-6`}
      >
        <Navigation />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
