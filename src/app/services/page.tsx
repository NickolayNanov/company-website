import type { Metadata } from "next";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { PageHeader } from "@/components/site/page-header";
import { ServiceCard } from "@/components/site/service-card";
import { CTASection } from "@/components/site/cta-section";
import { SectionHeading } from "@/components/site/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { services } from "@/data/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "B2B software consulting services: web application development, automation, technical consulting, internal tools, dashboards, and MVP development.",
  alternates: {
    canonical: "/services",
  },
};

const fitSignals = [
  "You have a business process that is too manual or too fragile.",
  "You need a practical senior engineer without hiring a full team.",
  "You want a first version that can later grow into a proper backend system.",
  "You need someone who can translate business needs into technical scope.",
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Software consulting services for practical B2B outcomes."
        description="Choose focused help for a specific problem, or combine services into a roadmap that starts small and scales when the business is ready."
      />

      <section className="section-y bg-background">
        <div className="container-site grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      <section className="section-y border-y border-border bg-brand-paper">
        <div className="container-site grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Good fit"
            title="The strongest projects start with a clear business pressure."
            description="The first conversation is not about filling a feature wishlist. It is about understanding what is slowing the company down and which technical move creates the most leverage."
          />
          <Card className="rounded-lg">
            <CardHeader>
              <CardTitle>Common reasons companies reach out</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 sm:grid-cols-2">
              {fitSignals.map((signal) => (
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
            Not sure which service fits? Start with technical consulting and turn the
            discussion into a clear build or automation plan.
          </p>
          <Button asChild className="h-10 w-fit">
            <Link href="/contact">
              Discuss your situation
              <ArrowRight data-icon="inline-end" />
            </Link>
          </Button>
        </div>
      </section>

      <CTASection />
    </>
  );
}
