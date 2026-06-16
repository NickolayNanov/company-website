import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { CTASection } from "@/components/site/cta-section";
import { PageHeader } from "@/components/site/page-header";
import { SectionHeading } from "@/components/site/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { capabilityAreas, principles, siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Nikolay Nanov, a Bulgaria-based software consultant helping companies build reliable web applications, automation, and internal tools.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title={`Meet ${siteConfig.founder}.`}
        description="The company is intentionally personal at phase 1: senior technical judgment, direct communication, and a practical delivery style without the overhead of a large agency."
      />

      <section className="section-y bg-background">
        <div className="container-site grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeading
              eyebrow="Positioning"
              title="A technical partner for companies that need clarity and execution."
              description="I work with businesses that need software to support operations, reporting, automation, customer workflows, or internal decision-making."
            />
          </div>
          <div className="space-y-5 text-base leading-8 text-muted-foreground">
            <p>
              The website is built around a simple promise: help companies understand
              what should be built, build the first useful version well, and leave a
              system that can be maintained and extended.
            </p>
            <p>
              That means technology choices are made with the business context in
              mind: who uses the system, what data matters, what risks exist, how the
              team will operate it, and what needs to remain flexible.
            </p>
            <p>
              Based in {siteConfig.location}, the company can serve Bulgarian and EU
              clients through remote-first collaboration, clear written scope, and
              regular working demos.
            </p>
          </div>
        </div>
      </section>

      <section className="section-y border-y border-border bg-brand-paper">
        <div className="container-site">
          <SectionHeading
            eyebrow="Principles"
            title="How the work should feel."
            description="Good consulting is not only about writing code. It is about helping the client make better decisions with less confusion."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {principles.map((principle) => {
              const Icon = principle.icon;

              return (
                <Card key={principle.title} className="rounded-lg">
                  <CardHeader>
                    <Icon className="mb-4 size-5 text-primary" />
                    <CardTitle>{principle.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-7 text-muted-foreground">
                      {principle.text}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-y bg-background">
        <div className="container-site grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Capabilities"
            title="A stack that supports a company website today and real backend features later."
            description="The site starts as a fast marketing and trust-building surface, but the architecture leaves space for forms, databases, portals, and automation."
          />
          <div className="grid gap-3">
            {capabilityAreas.map((area) => (
              <div key={area.label} className="flex gap-3 rounded-lg border border-border bg-card p-4">
                <CheckCircle2 className="mt-1 size-4 shrink-0 text-primary" />
                <div>
                  <h3 className="text-sm font-semibold text-foreground">{area.label}</h3>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    {area.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
