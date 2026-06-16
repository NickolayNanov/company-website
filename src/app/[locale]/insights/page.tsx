import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CTASection } from "@/components/site/cta-section";
import { PageHeader } from "@/components/site/page-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { buildPageMetadata } from "@/data/metadata";
import { getDictionary, getLocalizedInsights, type Locale } from "@/data/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dictionary = getDictionary(locale);

  return buildPageMetadata(locale, dictionary.pageHeaders.insights, dictionary.insightsPage.description, "/insights");
}

export default async function LocalizedInsightsPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dictionary = getDictionary(locale);
  const insights = getLocalizedInsights(locale);

  return (
    <>
      <PageHeader
        eyebrow={dictionary.pageHeaders.insights}
        title={dictionary.insightsPage.title}
        description={dictionary.insightsPage.description}
      />
      <section className="section-y bg-background">
        <div className="container-site grid gap-5 md:grid-cols-3">
          {insights.map((item) => (
            <Card key={item.href} className="rounded-lg transition-colors hover:border-primary/30">
              <CardHeader>
                <div className="mb-3 flex items-center justify-between gap-4">
                  <Badge variant="secondary" className="rounded-md">
                    {item.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{item.readTime}</span>
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-7 text-muted-foreground">{item.description}</p>
                <Link
                  href={item.href}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                >
                  {dictionary.insightsPage.readArticle}
                  <ArrowRight className="size-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <CTASection locale={locale} />
    </>
  );
}
