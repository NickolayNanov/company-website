import Link from "next/link";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { navItems, services, siteConfig } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-brand-ink text-white">
      <div className="container-site py-12 sm:py-14">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.8fr_0.8fr_0.8fr]">
          <div className="max-w-md">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-lg bg-white text-sm font-semibold text-brand-ink">
                NN
              </span>
              <span className="font-semibold tracking-tight">{siteConfig.name}</span>
            </Link>
            <p className="mt-5 text-sm leading-7 text-white/72">
              B2B software consulting from Bulgaria for companies that need reliable
              web applications, automation, internal tools, and practical technical
              direction.
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

          <FooterColumn title="Explore">
            {navItems.slice(0, 5).map((item) => (
              <FooterLink key={item.href} href={item.href}>
                {item.label}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Services">
            {services.slice(0, 4).map((service) => (
              <FooterLink key={service.slug} href={`/services/${service.slug}`}>
                {service.title}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Company">
            <FooterLink href="/legal">Legal notice</FooterLink>
            <FooterLink href="/privacy">Privacy policy</FooterLink>
            <FooterLink href="/cookies">Cookie policy</FooterLink>
            <FooterLink href="/contact">Contact</FooterLink>
          </FooterColumn>
        </div>

        <Separator className="my-8 bg-white/12" />

        <div className="flex flex-col gap-3 text-xs text-white/56 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center gap-1 transition-colors hover:text-white"
          >
            Discuss a project
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
