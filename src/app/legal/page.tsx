import type { Metadata } from "next";
import { PageHeader } from "@/components/site/page-header";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Legal Notice",
  description: "Legal notice and company information for Nikolay Nanov Consulting.",
  alternates: {
    canonical: "/legal",
  },
};

export default function LegalPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Legal Notice"
        description="Company identity and contact information for the website."
      />
      <section className="section-y bg-background">
        <div className="container-site max-w-3xl">
          <div className="overflow-hidden rounded-lg border border-border bg-card">
            <InfoRow label="Website owner" value={siteConfig.legalName} />
            <InfoRow label="Founder" value={siteConfig.founder} />
            <InfoRow label="Location" value={siteConfig.location} />
            <InfoRow label="Email" value={siteConfig.email} />
            <InfoRow
              label="Registration"
              value="Add company registration number after incorporation"
            />
            <InfoRow label="VAT" value="Add VAT number if applicable" />
          </div>
          <p className="mt-6 text-sm leading-7 text-muted-foreground">
            This page should be reviewed and completed after the Bulgarian company is
            registered. Add the official legal form, registered address, company
            identifier, VAT number if applicable, and any required professional or
            regulatory information.
          </p>
        </div>
      </section>
    </>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-2 border-b border-border px-5 py-4 last:border-b-0 sm:grid-cols-[12rem_1fr]">
      <dt className="text-sm font-medium text-foreground">{label}</dt>
      <dd className="text-sm leading-6 text-muted-foreground">{value}</dd>
    </div>
  );
}
