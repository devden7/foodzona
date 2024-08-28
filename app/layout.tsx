import type { Metadata } from 'next';
import React from 'react';
import './globals.css';
import Navbar from '@/components/shared/Navbar';
import localFont from 'next/font/local';
import Footer from '@/components/shared/Footer';
import StickyCart from '@/components/shared/StickyCart';
import { Toaster } from '@/components/ui/toaster';
import ReduxProvider from '@/provider/ReduxProvider';
import NextAuthProvider from '@/provider/NextAuthProvider';
import TanStackProvider from '@/provider/TanStackProvider';

export const metadata: Metadata = {
  title: 'Home | Food Zona',
  description:
    'Choose from a comprehensive restaurant menu, add to your cart, and easily place your order.',
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
      <body className={`${maisonNeue.variable}`}>
        <TanStackProvider>
          <NextAuthProvider>
            <ReduxProvider>
              <Navbar />
              <main>{children}</main>
              <Toaster />
              <Footer />
              <StickyCart />
            </ReduxProvider>
          </NextAuthProvider>
        </TanStackProvider>
      </body>
    </html>
  );
}
