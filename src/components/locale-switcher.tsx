"use client";

import { Locale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { LuLanguages } from 'react-icons/lu';

export default function LocaleSwitcher() {
  const [locale, setLocale] = useState<Locale>("");
  const router = useRouter();

  const changeLocale = (newLocale: Locale) => {
    setLocale(newLocale);
    document.cookie = `LOCALE=${newLocale};`;
    router.refresh();
  };

  const toggleLocale = () =>
    changeLocale(locale === "en" ? "ja" : locale === "ja" ? "zh-HK" : "en");

  useEffect(() => {
    const cookieLocale = document.cookie
      .split("; ")
      .find((row) => row.startsWith("LOCALE="))
      ?.split("=")[1];
    if (cookieLocale) {
      setLocale(cookieLocale);
    } else {
      const browserLocale = navigator.language.slice(0, 2);
      setLocale(browserLocale);
      document.cookie = `LOCALE=${browserLocale};`;
      router.refresh();
    }
  }, [router]);

  return (
    <button
      className="fixed bottom-20 right-5 w-10 h-10 bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-120 active:scale-100 transition-all bg-gray-800 dark:bg-white text-white dark:text-gray-800"
      onClick={toggleLocale}
    >
      <LuLanguages />
    </button>
  );
}
