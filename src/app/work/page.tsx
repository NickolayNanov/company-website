import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { CTASection } from "@/components/site/cta-section";
import { PageHeader } from "@/components/site/page-header";
import { SectionHeading } from "@/components/site/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { workItems } from "@/data/site";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected and anonymized examples of B2B software consulting work across internal tools, dashboards, automation, and technical planning.",
  alternates: {
    canonical: "/work",
  },
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Work"
        title="Selected examples of the business problems this site is built to win."
        description="Use this section for real case studies as soon as client work can be shared. Anonymized examples are still valuable when they show the problem, approach, and result."
      />

      <section className="section-y bg-background">
        <div className="container-site grid gap-6 lg:grid-cols-3">
          {workItems.map((item) => (
            <Card key={item.title} className="rounded-lg">
              <CardHeader>
                <p className="text-sm font-medium text-primary">{item.industry}</p>
                <CardTitle className="text-2xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base font-semibold leading-7 text-foreground">
                  {item.result}
                </p>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  {item.details}
                </p>
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
            eyebrow="Case-study format"
            title="What each future case study should include."
            description="For SEO and client trust, every case study should explain the business context, the constraint, the technical approach, and the measurable result."
          />
          <Button asChild className="h-10 w-fit">
            <Link href="/contact">
              Share a project brief
              <ArrowRight data-icon="inline-end" />
            </Link>
          </Button>
        </div>
      </section>

      <CTASection />
    </>
  );
}
