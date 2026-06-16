import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CTASection } from "@/components/site/cta-section";
import { PageHeader } from "@/components/site/page-header";
import { SectionHeading } from "@/components/site/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { buildPageMetadata } from "@/data/metadata";
import { getDictionary, localizeHref, type Locale } from "@/data/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dictionary = getDictionary(locale);

  return buildPageMetadata(locale, dictionary.pageHeaders.work, dictionary.work.description, "/work");
}

export default async function LocalizedWorkPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dictionary = getDictionary(locale);

  return (
    <>
      <PageHeader eyebrow={dictionary.pageHeaders.work} title={dictionary.work.title} description={dictionary.work.description} />
      <section className="section-y bg-background">
        <div className="container-site grid gap-6 lg:grid-cols-3">
          {dictionary.workItems.map((item) => (
            <Card key={item.title} className="rounded-lg">
              <CardHeader>
                <p className="text-sm font-medium text-primary">{item.industry}</p>
                <CardTitle className="text-2xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base font-semibold leading-7 text-foreground">{item.result}</p>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{item.details}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="rounded-md">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <section className="section-y border-y border-border bg-brand-paper">
        <div className="container-site flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow={dictionary.work.format.eyebrow}
            title={dictionary.work.format.title}
            description={dictionary.work.format.description}
          />
          <Button asChild className="h-10 w-fit">
            <Link href={localizeHref(locale, "/contact")}>
              {dictionary.work.format.cta}
              <ArrowRight data-icon="inline-end" />
            </Link>
          </Button>
        </div>
      </section>
      <CTASection locale={locale} />
    </>
  );
}
