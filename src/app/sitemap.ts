import type { MetadataRoute } from "next";
import { insights, services, siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseRoutes = [
    "",
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

  const serviceRoutes = services.map((service) => `/services/${service.slug}`);
  const insightRoutes = insights.map((insight) => insight.href);

  return [...baseRoutes, ...serviceRoutes, ...insightRoutes].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/services") ? 0.85 : 0.7,
  }));
}
