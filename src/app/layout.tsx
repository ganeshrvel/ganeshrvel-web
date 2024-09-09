import type { Metadata } from 'next';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import React from 'react';
import { Providers } from '@/app/providers';
import classNames from 'classnames';

export const metadata: Metadata = {
  title: 'Ganesh Rathinavel',
  description: 'Ganesh Rathinavel',
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
