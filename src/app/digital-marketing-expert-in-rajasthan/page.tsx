import { seoPages } from "@/data/seoPages";
import SEOLandingTemplate from "@/components/layout/SEOLandingTemplate";
import { Metadata } from "next";

const pageData = seoPages["digital-marketing-expert-in-rajasthan"];

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.intro,
    keywords: [pageData.keyword, "SEO Rajasthan", "Digital Strategy Rajasthan", "Jaipur Jodhpur Udaipur Marketing"],
};

export default function Page() {
    return <SEOLandingTemplate data={pageData} />;
}
