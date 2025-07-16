import type { Metadata } from "next";
import './globals.css';

import { Geist, Geist_Mono } from 'next/font/google';

import Footer from '@/components/footer';
import Header from '@/components/header';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "jay",
  description: "jay's portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-200`}
      >
        <div className="flex flex-col min-h-screen max-w-screen-lg mx-auto px-5 bg-white text-sm">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
