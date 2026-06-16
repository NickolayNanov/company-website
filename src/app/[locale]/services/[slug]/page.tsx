import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { CTASection } from "@/components/site/cta-section";
import { PageHeader } from "@/components/site/page-header";
import { SectionHeading } from "@/components/site/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buildPageMetadata } from "@/data/metadata";
import {
  getDictionary,
  getServiceBySlug,
  getServices,
  localizeHref,
  locales,
  type Locale,
} from "@/data/i18n";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getServices(locale).map((service) => ({ locale, slug: service.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const service = getServiceBySlug(locale, slug);

  if (!service) {
    return {};
  }

  return buildPageMetadata(
    locale,
    service.title,
    service.summary,
    `/services/${service.slug}`
  );
}

export default async function LocalizedServiceDetailPage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const dictionary = getDictionary(locale);
  const service = getServiceBySlug(locale, slug);

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <>
      <PageHeader eyebrow={service.eyebrow} title={service.title} description={service.summary} />
      <section className="section-y bg-background">
        <div className="container-site grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <div className="flex size-14 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Icon className="size-7" />
            </div>
            <h2 className="mt-6 text-2xl font-semibold tracking-tight text-foreground">
              {dictionary.serviceDetail.whoIsItFor}
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              {service.audience}
            </p>
            <div className="mt-6">
              <Badge
                variant="outline"
                className="h-auto max-w-full rounded-md border-primary/20 py-1.5 text-left leading-6 whitespace-normal text-primary"
              >
                {service.proof}
              </Badge>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <Card className="rounded-lg">
              <CardHeader>
                <CardTitle>{dictionary.serviceDetail.expectedOutcomes}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {service.outcomes.map((outcome) => (
                  <div key={outcome} className="flex gap-3">
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-primary" />
                    <p className="text-sm leading-7 text-muted-foreground">{outcome}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card className="rounded-lg">
              <CardHeader>
                <CardTitle>{dictionary.serviceDetail.typicalDeliverables}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {service.deliverables.map((deliverable) => (
                  <div key={deliverable} className="flex gap-3">
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-primary" />
                    <p className="text-sm leading-7 text-muted-foreground">{deliverable}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="section-y border-y border-border bg-brand-paper">
        <div className="container-site">
          <SectionHeading
            eyebrow={dictionary.serviceDetail.engagementEyebrow}
            title={dictionary.serviceDetail.engagementTitle}
            description={dictionary.serviceDetail.engagementDescription}
          />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild className="h-10 w-fit">
              <Link href={localizeHref(locale, "/contact")}>
                {dictionary.serviceDetail.discussCta}
                <ArrowRight data-icon="inline-end" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-10 w-fit">
              <Link href={localizeHref(locale, "/services")}>
                {dictionary.serviceDetail.backCta}
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <CTASection locale={locale} />
    </>
  );
}
