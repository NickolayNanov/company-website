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

  return buildPageMetadata(locale, dictionary.legal.privacy.title, dictionary.legal.privacy.description, "/privacy");
}

export default async function LocalizedPrivacyPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dictionary = getDictionary(locale);

  return (
    <>
      <PageHeader
        eyebrow={dictionary.pageHeaders.privacy}
        title={dictionary.legal.privacy.title}
        description={dictionary.legal.privacy.description}
      />
      <section className="section-y bg-background">
        <div className="container-site max-w-3xl space-y-8 text-sm leading-7 text-muted-foreground">
          {dictionary.legal.privacy.sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-xl font-semibold tracking-tight text-foreground">
                {section.title}
              </h2>
              <div className="mt-3">
                <p>{section.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
