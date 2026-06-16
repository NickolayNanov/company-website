import type { Metadata } from "next";
import { ArrowRight, Mail, MapPin, MessageSquare } from "lucide-react";
import { PageHeader } from "@/components/site/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Nikolay Nanov Consulting to discuss web application development, business automation, internal tools, or technical consulting.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Share the business problem you want to solve."
        description="A good first message does not need to be long. Include the current workflow, what is not working, who uses it, and what a successful outcome would look like."
      />

      <section className="section-y bg-background">
        <div className="container-site grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-5">
            <Card className="rounded-lg">
              <CardHeader>
                <Mail className="mb-3 size-5 text-primary" />
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-medium text-primary underline decoration-primary/30 transition-colors hover:decoration-primary"
                >
                  {siteConfig.email}
                </a>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  Best for project briefs, consulting questions, and collaboration
                  requests.
                </p>
              </CardContent>
            </Card>
            <Card className="rounded-lg">
              <CardHeader>
                <MapPin className="mb-3 size-5 text-primary" />
                <CardTitle>Location</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-7 text-muted-foreground">
                  {siteConfig.location}. Available for remote collaboration with
                  Bulgarian and EU companies.
                </p>
              </CardContent>
            </Card>
            <Card className="rounded-lg">
              <CardHeader>
                <MessageSquare className="mb-3 size-5 text-primary" />
                <CardTitle>Useful details to include</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm leading-7 text-muted-foreground">
                  <li>Current tools or workflow</li>
                  <li>Business goal and timeline</li>
                  <li>Users, data, and integrations involved</li>
                  <li>Budget range or decision process if available</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="rounded-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Project inquiry</CardTitle>
            </CardHeader>
            <CardContent>
              <form
                action={`mailto:${siteConfig.email}`}
                method="post"
                encType="text/plain"
                className="grid gap-5"
              >
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" autoComplete="name" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" autoComplete="email" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" name="company" autoComplete="organization" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">What do you need help with?</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={8}
                    placeholder="Briefly describe the workflow, tool, automation, or technical decision you want to improve."
                  />
                </div>
                <Button type="submit" className="h-11 w-fit">
                  Send inquiry
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
