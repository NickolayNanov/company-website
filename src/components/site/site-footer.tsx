import Link from "next/link";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { type Locale, getDictionary, getServices, localizeHref } from "@/data/i18n";
import { siteConfig } from "@/data/site";

export function SiteFooter({ locale = "en" }: { locale?: Locale }) {
  const dictionary = getDictionary(locale);
  const services = getServices(locale);

  return (
    <footer className="border-t border-border bg-brand-ink text-white">
      <div className="container-site py-12 sm:py-14">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.8fr_0.8fr_0.8fr]">
          <div className="max-w-md">
            <Link href={localizeHref(locale, "/")} className="inline-flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-lg bg-white text-sm font-semibold text-brand-ink">
                NN
              </span>
              <span className="font-semibold tracking-tight">{siteConfig.name}</span>
            </Link>
            <p className="mt-5 text-sm leading-7 text-white/72">
              {dictionary.footer.description}
            </p>
            <div className="mt-6 space-y-3 text-sm text-white/78">
              <p className="flex items-center gap-2">
                <MapPin className="size-4 text-brand-amber" />
                {siteConfig.location}
              </p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 transition-colors hover:text-white"
              >
                <Mail className="size-4 text-brand-amber" />
                {siteConfig.email}
              </a>
            </div>
          </div>

          <FooterColumn title={dictionary.footer.explore}>
            {dictionary.nav.slice(0, 5).map((item) => (
              <FooterLink key={item.href} href={localizeHref(locale, item.href)}>
                {item.label}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title={dictionary.footer.services}>
            {services.slice(0, 4).map((service) => (
              <FooterLink
                key={service.slug}
                href={localizeHref(locale, `/services/${service.slug}`)}
              >
                {service.title}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title={dictionary.footer.company}>
            <FooterLink href={localizeHref(locale, "/legal")}>
              {dictionary.footer.legal}
            </FooterLink>
            <FooterLink href={localizeHref(locale, "/privacy")}>
              {dictionary.footer.privacy}
            </FooterLink>
            <FooterLink href={localizeHref(locale, "/cookies")}>
              {dictionary.footer.cookies}
            </FooterLink>
            <FooterLink href={localizeHref(locale, "/contact")}>
              {dictionary.footer.contact}
            </FooterLink>
          </FooterColumn>
        </div>

        <Separator className="my-8 bg-white/12" />

        <div className="flex flex-col gap-3 text-xs text-white/56 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}. {dictionary.footer.rights}
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center gap-1 transition-colors hover:text-white"
          >
            {dictionary.footer.discussProject}
            <ArrowUpRight className="size-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-sm font-semibold text-white">{title}</h2>
      <div className="mt-4 flex flex-col gap-3 text-sm text-white/68">{children}</div>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className="transition-colors hover:text-white">
      {children}
    </Link>
  );
}
