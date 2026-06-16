import { PageHeader } from "@/components/site/page-header";
import { buildPageMetadata } from "@/data/metadata";
import { getDictionary, type Locale } from "@/data/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dictionary = getDictionary(locale);

  return buildPageMetadata(locale, dictionary.legal.legal.title, dictionary.legal.legal.description, "/legal");
}

export default async function LocalizedLegalPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dictionary = getDictionary(locale);

  return (
    <>
      <PageHeader
        eyebrow={dictionary.pageHeaders.legal}
        title={dictionary.legal.legal.title}
        description={dictionary.legal.legal.description}
      />
      <section className="section-y bg-background">
        <div className="container-site max-w-3xl">
          <div className="overflow-hidden rounded-lg border border-border bg-card">
            {dictionary.legal.legal.rows.map((row) => (
              <div
                key={row.label}
                className="grid gap-2 border-b border-border px-5 py-4 last:border-b-0 sm:grid-cols-[12rem_1fr]"
              >
                <dt className="text-sm font-medium text-foreground">{row.label}</dt>
                <dd className="text-sm leading-6 text-muted-foreground">{row.value}</dd>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm leading-7 text-muted-foreground">
            {dictionary.legal.legal.note}
          </p>
        </div>
      </section>
    </>
  );
}
