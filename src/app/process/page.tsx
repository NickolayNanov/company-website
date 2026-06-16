import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { CTASection } from "@/components/site/cta-section";
import { PageHeader } from "@/components/site/page-header";
import { SectionHeading } from "@/components/site/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { processSteps } from "@/data/site";

export const metadata: Metadata = {
  title: "Process",
  description:
    "A practical software consulting process covering discovery, scope, build, launch, and improvement.",
  alternates: {
    canonical: "/process",
  },
};

export default function ProcessPage() {
  return (
    <>
      <PageHeader
        eyebrow="Process"
        title="A calm delivery process for business-critical software work."
        description="The process is designed to reduce ambiguity before writing too much code, then create useful progress through small working milestones."
      />

      <section className="section-y bg-background">
        <div className="container-site">
          <div className="grid gap-5">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <Card key={step.title} className="rounded-lg">
                  <CardHeader className="gap-4 sm:grid-cols-[auto_1fr_auto] sm:items-center">
                    <div className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <p className="font-mono text-xs text-muted-foreground">
                        Step 0{index + 1}
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
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-y border-y border-border bg-brand-paper">
        <div className="container-site flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="First step"
            title="Start with a discovery conversation."
            description="The first useful output is often not code. It is a clearer picture of the business goal, risks, constraints, and sensible next milestone."
          />
          <Button asChild className="h-10 w-fit">
            <Link href="/contact">
              Start discovery
              <ArrowRight data-icon="inline-end" />
            </Link>
          </Button>
        </div>
      </section>

      <CTASection />
    </>
  );
}
