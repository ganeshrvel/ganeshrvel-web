import type { Metadata } from 'next';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import React from 'react';
import { Providers } from '@/app/providers';
import classNames from 'classnames';

export const metadata: Metadata = {
  title: 'Ganesh Rathinavel',
  description: 'Creator & Open-Source Enthusiast',
  keywords:
    'Ganesh Rathinavel, Open-Source, Developer, Software Engineer, Full-Stack Developer, Technology, Projects, Contributions',
  robots: 'index, follow',
  creator: 'Ganesh Rathinavel',
  publisher: 'Ganesh Rathinavel',
  manifest: '/site.webmanifest',
  icons: [
    { rel: 'icon', url: '/favicon-32x32.png', sizes: '32x32' },
    { rel: 'icon', url: '/favicon-16x16.png', sizes: '16x16' },
    { rel: 'apple-touch-icon', url: '/apple-touch-icon.png', sizes: '180x180' },
  ],
};

export const config = {
  runtime: 'experimental-edge',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
      className={classNames(GeistMono.variable)}
    >
      <body
        className={classNames(
          'bg-primary',
          'min-h-screen',
          'font-mono',
          'md:overflow-y-scroll'
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
