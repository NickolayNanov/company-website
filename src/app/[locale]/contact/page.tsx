import { ArrowRight, Mail, MapPin, MessageSquare } from "lucide-react";
import { PageHeader } from "@/components/site/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { buildPageMetadata } from "@/data/metadata";
import { getDictionary, type Locale } from "@/data/i18n";
import { siteConfig } from "@/data/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dictionary = getDictionary(locale);

  return buildPageMetadata(locale, dictionary.pageHeaders.contact, dictionary.contact.description, "/contact");
}

export default async function LocalizedContactPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dictionary = getDictionary(locale);

  return (
    <>
      <PageHeader
        eyebrow={dictionary.pageHeaders.contact}
        title={dictionary.contact.title}
        description={dictionary.contact.description}
      />
      <section className="section-y bg-background">
        <div className="container-site grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-5">
            <Card className="rounded-lg">
              <CardHeader>
                <Mail className="mb-3 size-5 text-primary" />
                <CardTitle>{dictionary.contact.emailTitle}</CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-medium text-primary underline decoration-primary/30 transition-colors hover:decoration-primary"
                >
                  {siteConfig.email}
                </a>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {dictionary.contact.emailDescription}
                </p>
              </CardContent>
            </Card>
            <Card className="rounded-lg">
              <CardHeader>
                <MapPin className="mb-3 size-5 text-primary" />
                <CardTitle>{dictionary.contact.locationTitle}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-7 text-muted-foreground">
                  {dictionary.contact.locationDescription}
                </p>
              </CardContent>
            </Card>
            <Card className="rounded-lg">
              <CardHeader>
                <MessageSquare className="mb-3 size-5 text-primary" />
                <CardTitle>{dictionary.contact.detailsTitle}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm leading-7 text-muted-foreground">
                  {dictionary.contact.detailsList.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
          <Card className="rounded-lg">
            <CardHeader>
              <CardTitle className="text-2xl">{dictionary.contact.formTitle}</CardTitle>
            </CardHeader>
            <CardContent>
              <form action={`mailto:${siteConfig.email}`} method="post" encType="text/plain" className="grid gap-5">
                <div className="grid gap-2">
                  <Label htmlFor="name">{dictionary.contact.labels.name}</Label>
                  <Input id="name" name="name" autoComplete="name" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">{dictionary.contact.labels.email}</Label>
                  <Input id="email" name="email" type="email" autoComplete="email" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="company">{dictionary.contact.labels.company}</Label>
                  <Input id="company" name="company" autoComplete="organization" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">{dictionary.contact.labels.message}</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={8}
                    placeholder={dictionary.contact.messagePlaceholder}
                  />
                </div>
                <Button type="submit" className="h-11 w-fit">
                  {dictionary.contact.labels.submit}
                  <ArrowRight data-icon="inline-end" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
