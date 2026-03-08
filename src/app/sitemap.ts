import { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = siteConfig.url;

    // Main pages
    const routes = siteConfig.nav.map((item) => ({
        url: `${baseUrl}${item.href === "/" ? "" : item.href}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: item.href === "/" ? 1.0 : 0.8,
    }));

    // Toolkit subpages
    const toolkitRoutes = [
        "informational-websites",
        "ecommerce-websites",
        "web-apps",
        "mobile-apps",
        "cross-platform-development",
        "landing-pages",
        "enterprise-solutions",
    ].map((slug) => ({
        url: `${baseUrl}/toolkit/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.7,
    }));

    // Industry subpages
    const industryRoutes = [
        "interior-architecture",
        "ecommerce",
        "healthcare",
        "education",
        "business-marketing",
        "hospitality-wellness",
    ].map((slug) => ({
        url: `${baseUrl}/industries/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.7,
    }));

    return [...routes, ...toolkitRoutes, ...industryRoutes];
}
