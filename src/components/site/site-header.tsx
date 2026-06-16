"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  type Locale,
  getDictionary,
  localeLabels,
  localizeHref,
} from "@/data/i18n";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export function SiteHeader({ locale = "en" }: { locale?: Locale }) {
  const pathname = usePathname();
  const dictionary = getDictionary(locale);
  const alternateLocale = locale === "en" ? "bg" : "en";
  const alternatePath = pathname?.replace(/^\/(en|bg)/, "") || "";
  const switchHref = localizeHref(alternateLocale, alternatePath || "/");
  const navigationItems = dictionary.nav.filter((item) => item.href !== "/work");

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/92 backdrop-blur supports-[backdrop-filter]:bg-background/78">
      <div className="container-site flex h-16 items-center justify-between gap-4">
        <Link
          href={localizeHref(locale, "/")}
          className="flex min-w-0 items-center gap-3"
          aria-label="Home"
        >
          <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand-ink text-sm font-semibold text-white">
            NN
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-semibold tracking-tight text-foreground">
              {siteConfig.founder}
            </span>
            <span className="block truncate text-xs text-muted-foreground">
              {dictionary.founderRole}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={localizeHref(locale, item.href)}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
                pathname === localizeHref(locale, item.href) ||
                  pathname.startsWith(`${localizeHref(locale, item.href)}/`)
                  ? "bg-muted text-foreground"
                  : ""
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button asChild variant="outline" className="h-9 px-3">
            <Link href={switchHref} hrefLang={alternateLocale} lang={alternateLocale}>
              {localeLabels[alternateLocale]}
            </Link>
          </Button>
          <Button asChild className="h-9 px-3">
            <Link href={localizeHref(locale, "/contact")}>
              {dictionary.ctaLabel}
              <ArrowRight data-icon="inline-end" />
            </Link>
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon-lg" aria-label="Open menu">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(22rem,92vw)]">
              <SheetHeader>
                <SheetTitle>{siteConfig.name}</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4" aria-label="Mobile navigation">
                {navigationItems.map((item) => (
                  <SheetClose key={item.href} asChild>
                    <Link
                      href={localizeHref(locale, item.href)}
                      className={cn(
                        "rounded-lg px-3 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
                        pathname === localizeHref(locale, item.href) ||
                          pathname.startsWith(`${localizeHref(locale, item.href)}/`)
                          ? "bg-muted text-foreground"
                          : ""
                      )}
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
              <div className="mt-auto space-y-3 p-4">
                <SheetClose asChild>
                  <Button asChild variant="outline" className="h-10 w-full">
                    <Link href={switchHref} hrefLang={alternateLocale} lang={alternateLocale}>
                      {dictionary.languageSwitchLabel}: {localeLabels[alternateLocale]}
                    </Link>
                  </Button>
                </SheetClose>
                <SheetClose asChild>
                  <Button asChild className="h-10 w-full">
                    <Link href={localizeHref(locale, "/contact")}>
                      {dictionary.ctaLabel}
                      <ArrowRight data-icon="inline-end" />
                    </Link>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
