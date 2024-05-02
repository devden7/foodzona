import type { Metadata } from 'next';
import React from 'react';
import './globals.css';
import Navbar from '@/components/shared/Navbar';
import localFont from 'next/font/local';

export const metadata: Metadata = {
  title: 'Food Zona',
  description: 'Cloning GoFood',
};

const maisonNeue = localFont({
  src: [
    {
      path: '../public/fonts/MaisonNeueExtendedDemi.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/MaisonNeueBold.otf',
      weight: '700',
      style: 'bold',
    },
  ],
  display: 'swap',
  variable: '--font-maison',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${maisonNeue.variable} font-sans`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
