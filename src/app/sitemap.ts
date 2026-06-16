import type { MetadataRoute } from "next";
import { getDictionary, getServices, locales, localizeHref } from "@/data/i18n";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseRoutes = [
    "/services",
    "/about",
    "/work",
    "/process",
    "/insights",
    "/contact",
    "/privacy",
    "/cookies",
    "/legal",
  ];

  return locales.flatMap((locale) => {
    const serviceRoutes = getServices(locale).map(
      (service) => `/services/${service.slug}`
    );
    const insightRoutes = getDictionary(locale).articles.map(
      (article) => `/insights/${article.slug}`
    );

    return ["/", ...baseRoutes, ...serviceRoutes, ...insightRoutes].map((route) => ({
      url: `${siteConfig.url}${localizeHref(locale, route)}`,
      lastModified: new Date(),
      changeFrequency: route === "/" ? "weekly" : "monthly",
      priority: route === "/" ? 1 : route.startsWith("/services") ? 0.85 : 0.7,
    }));
  });
}
