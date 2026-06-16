import type { Metadata } from "next";
import { PageHeader } from "@/components/site/page-header";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Nikolay Nanov Consulting.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Privacy"
        title="Privacy Policy"
        description="This page explains what personal information may be collected through the website and how it is handled."
      />
      <section className="section-y bg-background">
        <div className="container-site max-w-3xl space-y-8 text-sm leading-7 text-muted-foreground">
          <LegalBlock title="Controller">
            <p>
              {siteConfig.legalName}, based in {siteConfig.location}, is responsible
              for personal data submitted through this website. Final registration,
              address, and VAT details should be updated after incorporation.
            </p>
          </LegalBlock>
          <LegalBlock title="Data collected">
            <p>
              The website may collect information you choose to send by email or
              contact form, such as name, email address, company name, and project
              details.
            </p>
          </LegalBlock>
          <LegalBlock title="Purpose">
            <p>
              Submitted information is used to respond to inquiries, evaluate project
              fit, prepare proposals, and manage business communication.
            </p>
          </LegalBlock>
          <LegalBlock title="Retention">
            <p>
              Inquiry data should be kept only as long as needed for communication,
              legal obligations, or legitimate business records.
            </p>
          </LegalBlock>
          <LegalBlock title="Contact">
            <p>
              For privacy questions, email{" "}
              <a className="font-medium text-primary underline" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
              .
            </p>
          </LegalBlock>
        </div>
      </section>
    </>
  );
}

function LegalBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-xl font-semibold tracking-tight text-foreground">{title}</h2>
      <div className="mt-3">{children}</div>
    </div>
  );
}
