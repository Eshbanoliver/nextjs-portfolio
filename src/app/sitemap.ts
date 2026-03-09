import { MetadataRoute } from "next";
import { siteConfig, certifications } from "@/data/site";

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

    // SEO Landing Pages
    const seoRoutes = [
        "web-developer-in-udaipur",
        "wordpress-developer-in-udaipur",
        "frontend-developer-in-udaipur",
        "freelance-web-developer-in-udaipur",
        "software-developer-in-rajasthan",
        "digital-marketing-expert-in-udaipur",
        "digital-marketing-expert-in-rajasthan",
        "responsive-website-design-services",
    ].map((slug) => ({
        url: `${baseUrl}/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.9,
    }));

    // Dynamic Certifications
    const certificationRoutes = certifications.map((_, index) => {
        const id = (index + 1).toString().padStart(2, '0');
        return {
            url: `${baseUrl}/certifications/cert-${id}`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.5,
        };
    });

    return [...routes, ...toolkitRoutes, ...industryRoutes, ...seoRoutes, ...certificationRoutes];
}
