import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CTASection } from "@/components/site/cta-section";
import { PageHeader } from "@/components/site/page-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { insights } from "@/data/site";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Practical articles about custom software, business automation, internal tools, and technical consulting for B2B companies.",
  alternates: {
    canonical: "/insights",
  },
};

export default function InsightsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Insights"
        title="Useful thinking for companies deciding what to build next."
        description="These articles are written for business owners, managers, and teams who need practical software decisions, not vague technology noise."
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
                <p className="text-sm leading-7 text-muted-foreground">
                  {item.description}
                </p>
                <Link
                  href={item.href}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                >
                  Read article
                  <ArrowRight className="size-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
