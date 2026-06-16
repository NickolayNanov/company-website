import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { type Locale, getDictionary, localizeHref } from "@/data/i18n";
import { siteConfig } from "@/data/site";

export function CTASection({ locale = "en" }: { locale?: Locale }) {
  const dictionary = getDictionary(locale);

  return (
    <section className="bg-brand-ink text-white">
      <div className="container-site grid gap-8 py-14 sm:py-16 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-amber">
            {dictionary.cta.eyebrow}
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            {dictionary.cta.title}
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/72 sm:text-base">
            {dictionary.cta.description}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <Button asChild className="h-11 bg-white px-4 text-brand-ink hover:bg-white/90">
            <Link href={localizeHref(locale, "/contact")}>
              {dictionary.cta.primary}
              <ArrowRight data-icon="inline-end" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="h-11 border-white/24 bg-transparent px-4 text-white hover:bg-white/10 hover:text-white"
          >
            <a href={`mailto:${siteConfig.email}`}>
              {dictionary.cta.secondary}
              <Mail data-icon="inline-end" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
