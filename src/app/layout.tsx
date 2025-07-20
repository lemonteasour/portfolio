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
          <div className="flex flex-col min-h-screen max-w-screen-lg mx-auto px-6 md:px-12 text-sm">
            <Header />
            {children}
            <Footer />

            <ThemeSwitcher />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
