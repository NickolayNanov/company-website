import type { Metadata } from "next";
import { PageHeader } from "@/components/site/page-header";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Cookie policy for Nikolay Nanov Consulting.",
  alternates: {
    canonical: "/cookies",
  },
};

export default function CookiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Cookies"
        title="Cookie Policy"
        description="This page describes how cookies and similar technologies may be used on the website."
      />
      <section className="section-y bg-background">
        <div className="container-site max-w-3xl space-y-8 text-sm leading-7 text-muted-foreground">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-foreground">
              Current use
            </h2>
            <p className="mt-3">
              The phase-1 website is designed to work without advertising cookies or
              tracking-heavy scripts. If analytics are added, use a privacy-conscious
              setup such as Plausible or a carefully configured Google Analytics
              property.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-foreground">
              Essential cookies
            </h2>
            <p className="mt-3">
              Essential cookies may be used if future features require security,
              session management, preferences, or protected client areas.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-foreground">
              Updates
            </h2>
            <p className="mt-3">
              This policy should be updated before adding analytics, chat widgets,
              embedded media, marketing pixels, or client login functionality.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-foreground">
              Contact
            </h2>
            <p className="mt-3">
              Questions can be sent to{" "}
              <a className="font-medium text-primary underline" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
