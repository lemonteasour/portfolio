import type { Metadata } from "next";
import './globals.css';

import { ThemeProvider } from 'next-themes';
import { Noto_Sans } from 'next/font/google';

import Footer from '@/components/footer';
import Header from '@/components/header';
import ThemeSwitcher from '@/components/theme-switcher';

const notoSans = Noto_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "jayhuich",
  description: "jay's portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${notoSans.className} antialiased bg-white dark:bg-gray-800 text-gray-900 dark:text-white`}
      >
        <ThemeProvider
          attribute="data-mode"
          defaultTheme="light"
          themes={["light", "dark"]}
          storageKey="theme"
        >
          <Header />
          <div className="container mx-auto px-6 md:px-12">{children}</div>
          <Footer />

          <ThemeSwitcher />
        </ThemeProvider>
      </body>
    </html>
  );
}
