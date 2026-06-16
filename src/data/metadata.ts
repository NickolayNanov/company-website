import type { Metadata } from "next";
import { getAlternates, getDictionary, type Locale } from "@/data/i18n";

export function buildPageMetadata(
  locale: Locale,
  title: string,
  description: string,
  path: string
): Metadata {
  const dictionary = getDictionary(locale);

  return {
    title,
    description,
    alternates: getAlternates(locale, path),
    openGraph: {
      title: `${title} | ${dictionary.siteName}`,
      description,
      locale: locale === "bg" ? "bg_BG" : "en_US",
      url: `/${locale}${path === "/" ? "" : path}`,
    },
  };
}
