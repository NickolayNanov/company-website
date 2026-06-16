import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CTASection } from "@/components/site/cta-section";
import { PageHeader } from "@/components/site/page-header";
import { SectionHeading } from "@/components/site/section-heading";
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

  return buildPageMetadata(locale, dictionary.pageHeaders.process, dictionary.process.description, "/process");
}

export default async function LocalizedProcessPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dictionary = getDictionary(locale);

  return (
    <>
      <PageHeader
        eyebrow={dictionary.pageHeaders.process}
        title={dictionary.process.title}
        description={dictionary.process.description}
      />
      <section className="section-y bg-background">
        <div className="container-site">
          <div className="grid gap-5">
            {dictionary.processSteps.map((step, index) => (
              <Card key={step.title} className="rounded-lg">
                <CardHeader className="gap-4 sm:grid-cols-[auto_1fr_auto] sm:items-center">
                  <div className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <span className="text-sm font-semibold">{index + 1}</span>
                  </div>
                  <div>
                    <p className="font-mono text-xs text-muted-foreground">
                      {dictionary.process.stepLabel} 0{index + 1}
                    </p>
                    <CardTitle className="mt-1 text-xl">{step.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="max-w-3xl text-sm leading-7 text-muted-foreground">
                    {step.text}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="section-y border-y border-border bg-brand-paper">
        <div className="container-site flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow={dictionary.process.firstStep.eyebrow}
            title={dictionary.process.firstStep.title}
            description={dictionary.process.firstStep.description}
          />
          <Button asChild className="h-10 w-fit">
            <Link href={localizeHref(locale, "/contact")}>
              {dictionary.process.firstStep.cta}
              <ArrowRight data-icon="inline-end" />
            </Link>
          </Button>
        </div>
      </section>
      <CTASection locale={locale} />
    </>
  );
}
