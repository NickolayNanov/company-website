import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHeader } from "@/components/site/page-header";
import { ServiceCard } from "@/components/site/service-card";
import { CTASection } from "@/components/site/cta-section";
import { SectionHeading } from "@/components/site/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { buildPageMetadata } from "@/data/metadata";
import { getDictionary, getServices, localizeHref, type Locale } from "@/data/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dictionary = getDictionary(locale);

  return buildPageMetadata(
    locale,
    dictionary.pageHeaders.services,
    dictionary.servicesPage.description,
    "/services"
  );
}

export default async function LocalizedServicesPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dictionary = getDictionary(locale);
  const services = getServices(locale);

  return (
    <>
      <PageHeader
        eyebrow={dictionary.pageHeaders.services}
        title={dictionary.servicesPage.title}
        description={dictionary.servicesPage.description}
      />
      <section className="section-y bg-background">
        <div className="container-site grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} locale={locale} />
          ))}
        </div>
      </section>
      <section className="section-y border-y border-border bg-brand-paper">
        <div className="container-site grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow={dictionary.servicesPage.fitEyebrow}
            title={dictionary.servicesPage.fitTitle}
            description={dictionary.servicesPage.fitDescription}
          />
          <Card className="rounded-lg">
            <CardHeader>
              <CardTitle>{dictionary.servicesPage.fitCardTitle}</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 sm:grid-cols-2">
              {dictionary.servicesPage.fitSignals.map((signal) => (
                <div key={signal} className="flex gap-3">
                  <CheckCircle2 className="mt-1 size-4 shrink-0 text-primary" />
                  <p className="text-sm leading-7 text-muted-foreground">{signal}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>
      <section className="bg-background py-12">
        <div className="container-site flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-sm leading-7 text-muted-foreground">
            {dictionary.servicesPage.bottomText}
          </p>
          <Button asChild className="h-10 w-fit">
            <Link href={localizeHref(locale, "/contact")}>
              {dictionary.servicesPage.bottomCta}
              <ArrowRight data-icon="inline-end" />
            </Link>
          </Button>
        </div>
      </section>
      <CTASection locale={locale} />
    </>
  );
}
