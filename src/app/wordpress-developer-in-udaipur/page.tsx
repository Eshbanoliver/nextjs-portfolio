import { seoPages } from "@/data/seoPages";
import SEOLandingTemplate from "@/components/layout/SEOLandingTemplate";
import { Metadata } from "next";

const pageData = seoPages["wordpress-developer-in-udaipur"];

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.intro,
    keywords: [pageData.keyword, "WordPress Website Udaipur", "WooCommerce Developer Rajasthan", "Udaipur WP Expert"],
};

export default function Page() {
    return <SEOLandingTemplate data={pageData} />;
}
