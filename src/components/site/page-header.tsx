import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function PageHeader({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <section className={cn("border-b border-border bg-background", className)}>
      <div className="container-site py-14 sm:py-18 lg:py-20">
        {eyebrow ? (
          <Badge variant="outline" className="mb-5 rounded-md border-primary/20 text-primary">
            {eyebrow}
          </Badge>
        ) : null}
        <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-balance text-foreground sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-pretty text-muted-foreground sm:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
