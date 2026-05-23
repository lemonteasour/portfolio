"use client";

import { Locale } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useSyncExternalStore } from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const LOCALE_COOKIE = "LOCALE";

function getLocaleFromCookie(): Locale {
  return (
    (document.cookie
      .split("; ")
      .find((row) => row.startsWith(`${LOCALE_COOKIE}=`))
      ?.split("=")[1] as Locale | undefined) ?? "en"
  );
}

export default function LocaleSwitcher() {
  const router = useRouter();
  const locale = useSyncExternalStore(
    () => () => {},
    getLocaleFromCookie,
    () => "en" as Locale
  );

  const changeLocale = (newLocale: Locale) => {
    document.cookie = `${LOCALE_COOKIE}=${newLocale}; path=/;`;
    router.refresh();
  };

  useEffect(() => {
    const hasCookie = document.cookie
      .split("; ")
      .some((row) => row.startsWith(`${LOCALE_COOKIE}=`));
    if (!hasCookie) {
      const browserLocale = navigator.language.slice(0, 2) as Locale;
      document.cookie = `${LOCALE_COOKIE}=${browserLocale}; path=/;`;
      router.refresh();
    }
  }, [router]);

  return (
    <div className="w-8 h-6">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="default"
            className="absolute w-8 h-6 rounded-md hover:scale-110 active:scale-100 transition-all border-2"
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
