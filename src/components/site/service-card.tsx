import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { services } from "@/data/site";
import { type Locale, getDictionary, localizeHref } from "@/data/i18n";

type Service = (typeof services)[number];

export function ServiceCard({
  service,
  locale = "en",
}: {
  service: Service;
  locale?: Locale;
}) {
  const Icon = service.icon;
  const dictionary = getDictionary(locale);

  return (
    <Card className="rounded-lg border-border/80 bg-card transition-colors hover:border-primary/30">
      <CardHeader>
        <div className="mb-5 flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Icon className="size-5" />
        </div>
        <p className="text-sm font-medium text-primary">{service.eyebrow}</p>
        <CardTitle className="text-xl">{service.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col">
        <p className="text-sm leading-7 text-muted-foreground">{service.summary}</p>
      </CardContent>
    </Card>
  );
}
