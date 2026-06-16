import { CheckCircle2 } from "lucide-react";
import { CTASection } from "@/components/site/cta-section";
import { PageHeader } from "@/components/site/page-header";
import { SectionHeading } from "@/components/site/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getServices } from "@/data/i18n";
import { buildPageMetadata } from "@/data/metadata";
import { getDictionary, type Locale } from "@/data/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dictionary = getDictionary(locale);

  return buildPageMetadata(locale, dictionary.pageHeaders.about, dictionary.about.description, "/about");
}

export default async function LocalizedAboutPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dictionary = getDictionary(locale);

  return (
    <>
      <PageHeader
        eyebrow={dictionary.pageHeaders.about}
        title={dictionary.about.title}
        description={dictionary.about.description}
      />
      <section className="section-y bg-background">
        <div className="container-site grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeading {...dictionary.about.positioning} />
          </div>
          <div className="space-y-5 text-base leading-8 text-muted-foreground">
            {dictionary.about.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
      <section className="section-y border-y border-border bg-brand-paper">
        <div className="container-site">
          <SectionHeading {...dictionary.about.principles} />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {dictionary.principles.map((principle, index) => {
              const Icon = getServices("en")[index]?.icon ?? CheckCircle2;
              return (
                <Card key={principle.title} className="rounded-lg">
                  <CardHeader>
                    <Icon className="mb-4 size-5 text-primary" />
                    <CardTitle>{principle.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-7 text-muted-foreground">{principle.text}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      <section className="section-y bg-background">
        <div className="container-site grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading {...dictionary.about.capabilities} />
          <div className="grid gap-3">
            {dictionary.capabilityAreas.map((area) => (
              <div key={area.label} className="flex gap-3 rounded-lg border border-border bg-card p-4">
                <CheckCircle2 className="mt-1 size-4 shrink-0 text-primary" />
                <div>
                  <h3 className="text-sm font-semibold text-foreground">{area.label}</h3>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">{area.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection locale={locale} />
    </>
  );
}
