import type { Metadata } from "next";
import "./globals.css";

import { getLocale } from "next-intl/server";
import { ThemeProvider } from "next-themes";
import { Noto_Sans } from "next/font/google";

import Footer from "@/components/footer";
import Header from "@/components/header";

const notoSans = Noto_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jay Hui",
  description: "Jay's portfolio website",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${notoSans.className} antialiased bg-neutral-100 dark:bg-neutral-900 text-black dark:text-white`}
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
        </ThemeProvider>
      </body>
    </html>
  );
}
