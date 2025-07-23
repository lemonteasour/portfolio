"use client";

import { Locale } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LocaleSwitcher() {
  const [locale, setLocale] = useState<Locale>("en");
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
    <div className="w-8 h-6">
      <button
        className="absolute w-8 h-6 rounded-md hover:scale-120 active:scale-100 transition-all border border-gray-800 dark:border-white bg-gray-800 dark:bg-white"
        onClick={toggleLocale}
      >
        <Image
          className="rounded-[5px]"
          src={`/flags/flag_${locale}.svg`}
          alt="Locale flag"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </button>
    </div>
  );
}
