"use client";

import { Locale } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function LocaleSwitcher() {
  const [locale, setLocale] = useState<Locale>("en");
  const router = useRouter();

  const changeLocale = (newLocale: Locale) => {
    setLocale(newLocale);
    document.cookie = `LOCALE=${newLocale};`;
    router.refresh();
  };

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
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="default"
            className="absolute w-8 h-6 rounded-md hover:scale-120 active:scale-100 transition-all border-2"
          >
            <Image
              className="rounded-[6px]"
              src={`/flags/flag_${locale}.svg`}
              alt="Locale flag"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuRadioGroup value={locale} onValueChange={changeLocale}>
            <DropdownMenuRadioItem value="en">English</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="ja">日本語</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="zh-HK">
              繁體中文
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
