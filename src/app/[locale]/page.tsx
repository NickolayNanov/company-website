import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CTASection } from "@/components/site/cta-section";
import { SectionHeading } from "@/components/site/section-heading";
import { ServiceCard } from "@/components/site/service-card";
import {
  getDictionary,
  getLocalizedInsights,
  getServices,
  localizeHref,
  type Locale,
} from "@/data/i18n";
import { buildPageMetadata } from "@/data/metadata";
import { siteConfig } from "@/data/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dictionary = getDictionary(locale);

  return buildPageMetadata(
    locale,
    locale === "bg"
      ? "B2B софтуерно консултиране в България"
      : "B2B Software Consulting in Bulgaria",
    dictionary.meta.defaultDescription,
    "/"
  );
}

export default async function LocalizedHomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dictionary = getDictionary(locale);
  const services = getServices(locale);
  const insights = getLocalizedInsights(locale);

  return (
    <>
      <section className="relative isolate flex min-h-[calc(100svh-6rem)] items-end overflow-hidden bg-brand-ink text-white">
        <Image
          src="/consulting-workflow-hero.png"
          alt="Consulting workspace with workflow planning and business dashboard"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-brand-ink/70" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,oklch(0.18_0.025_235/0.94)_0%,oklch(0.18_0.025_235/0.76)_43%,oklch(0.18_0.025_235/0.18)_100%)]" />
        <div className="container-site relative z-10 pb-14 pt-20 sm:pb-16 lg:pb-20">
          <Badge className="mb-6 rounded-md border-white/20 bg-white/10 text-white hover:bg-white/10">
            {dictionary.home.badge}
          </Badge>
          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
            {siteConfig.name}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-pretty text-white/82 sm:text-xl">
            {dictionary.home.intro}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild className="h-11 bg-white px-4 text-brand-ink hover:bg-white/90">
              <Link href={localizeHref(locale, "/contact")}>
                {dictionary.home.primaryCta}
                <ArrowRight data-icon="inline-end" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-11 border-white/24 bg-transparent px-4 text-white hover:bg-white/10 hover:text-white"
            >
              <Link href={localizeHref(locale, "/services")}>
                {dictionary.home.secondaryCta}
                <ArrowRight data-icon="inline-end" />
              </Link>
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/74">
            {dictionary.home.bullets.map((bullet) => (
              <span key={bullet} className="inline-flex items-center gap-2">
                <CheckCircle2 className="size-4 text-brand-amber" />
                {bullet}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="container-site grid gap-4 py-8 sm:grid-cols-3">
          {dictionary.stats.map((stat) => (
            <div key={stat.value} className="rounded-lg border border-border bg-card p-5">
              <p className="text-2xl font-semibold tracking-tight text-foreground">
                {stat.value}
              </p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-y bg-background">
        <div className="container-site">
          <SectionHeading {...dictionary.home.sections.services} />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} locale={locale} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-y border-y border-border bg-brand-paper">
        <div className="container-site grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading {...dictionary.home.sections.scale} />
          <div className="grid gap-3 sm:grid-cols-2">
            {dictionary.capabilityAreas.map((area) => (
              <div
                key={area.label}
                className="rounded-lg border border-border bg-card p-5 shadow-sm"
              >
                <h3 className="text-sm font-semibold text-foreground">{area.label}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {area.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="section-y bg-background">
        <div className="container-site">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow={dictionary.home.sections.work.eyebrow}
              title={dictionary.home.sections.work.title}
              description={dictionary.home.sections.work.description}
            />
            <Button asChild variant="outline" className="h-10 w-fit">
              <Link href={localizeHref(locale, "/work")}>
                {dictionary.home.sections.work.cta}
                <ArrowRight data-icon="inline-end" />
              </Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {dictionary.workItems.map((item) => (
              <Card key={item.title} className="rounded-lg">
                <CardHeader>
                  <p className="text-sm font-medium text-primary">{item.industry}</p>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-semibold leading-6 text-foreground">
                    {item.result}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">
                    {item.details}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      <section className="section-y border-y border-border bg-brand-paper">
        <div className="container-site">
          <SectionHeading {...dictionary.home.sections.process} />
          <div className="mt-10 grid gap-5 md:grid-cols-5">
            {dictionary.processSteps.map((step, index) => {
              return (
                <div key={step.title} className="rounded-lg border border-border bg-card p-5">
                  <div className="flex items-center justify-between gap-4">
                    <CheckCircle2 className="size-5 text-primary" />
                    <span className="font-mono text-xs text-muted-foreground">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {step.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-y bg-background">
        <div className="container-site">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow={dictionary.home.sections.insights.eyebrow}
              title={dictionary.home.sections.insights.title}
              description={dictionary.home.sections.insights.description}
            />
            <Button asChild variant="outline" className="h-10 w-fit">
              <Link href={localizeHref(locale, "/insights")}>
                {dictionary.home.sections.insights.cta}
                <ArrowRight data-icon="inline-end" />
              </Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {insights.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/30"
              >
                <p className="text-sm font-medium text-primary">{item.category}</p>
                <h3 className="mt-3 text-lg font-semibold tracking-tight text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {item.description}
                </p>
                <p className="mt-5 text-sm font-medium text-foreground">{item.readTime}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-background">
        <div className="container-site grid gap-8 py-12 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-balance text-foreground">
              {dictionary.home.sections.email.title}
            </h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              {dictionary.home.sections.email.description}
            </p>
          </div>
          <Button asChild variant="outline" className="h-10 w-fit">
            <a href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
              <Mail data-icon="inline-end" />
            </a>
          </Button>
        </div>
      </section>

      <CTASection locale={locale} />
    </>
  );
}
