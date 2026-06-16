import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { CTASection } from "@/components/site/cta-section";
import { PageHeader } from "@/components/site/page-header";
import { SectionHeading } from "@/components/site/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getServiceBySlug, services } from "@/data/site";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {};
  }

  return {
    title: service.title,
    description: service.summary,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <>
      <PageHeader
        eyebrow={service.eyebrow}
        title={service.title}
        description={service.summary}
      />

      <section className="section-y bg-background">
        <div className="container-site grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <div className="flex size-14 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Icon className="size-7" />
            </div>
            <h2 className="mt-6 text-2xl font-semibold tracking-tight text-foreground">
              Who this is for
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
                <CardTitle>Expected outcomes</CardTitle>
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
                <CardTitle>Typical deliverables</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {service.deliverables.map((deliverable) => (
                  <div key={deliverable} className="flex gap-3">
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-primary" />
                    <p className="text-sm leading-7 text-muted-foreground">
                      {deliverable}
                    </p>
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
            eyebrow="Engagement"
            title="Start with the smallest useful milestone."
            description="The goal is to reduce uncertainty quickly, then decide whether the next step is a build, automation sprint, architecture review, or deeper product work."
          />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild className="h-10 w-fit">
              <Link href="/contact">
                Discuss this service
                <ArrowRight data-icon="inline-end" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-10 w-fit">
              <Link href="/services">Back to services</Link>
            </Button>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
