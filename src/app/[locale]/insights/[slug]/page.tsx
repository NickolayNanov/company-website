import { notFound } from "next/navigation";
import { buildPageMetadata } from "@/data/metadata";
import { getArticleBySlug, getDictionary, locales, type Locale } from "@/data/i18n";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getDictionary(locale).articles.map((article) => ({ locale, slug: article.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const article = getArticleBySlug(locale, slug);

  if (!article) {
    return {};
  }

  return buildPageMetadata(locale, article.title, article.description, `/insights/${article.slug}`);
}

export default async function LocalizedInsightArticlePage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const article = getArticleBySlug(locale, slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="container-site max-w-4xl py-14 sm:py-18 lg:py-20">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-primary">
        {article.category}
      </p>
      <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance text-foreground sm:text-5xl">
        {article.title}
      </h1>
      <p className="mt-5 text-sm text-muted-foreground">{article.readTime}</p>
      <p className="mt-6 text-base leading-8 text-muted-foreground">{article.description}</p>
      <div className="mt-10 space-y-5">
        {article.content.map((paragraph) => (
          <p key={paragraph} className="text-base leading-8 text-muted-foreground">
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );
}
