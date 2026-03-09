import { seoPages } from "@/data/seoPages";
import SEOLandingTemplate from "@/components/layout/SEOLandingTemplate";
import { Metadata } from "next";

const pageData = seoPages["digital-marketing-expert-in-udaipur"];

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.intro,
    keywords: [pageData.keyword, "SEO Services Udaipur", "Social Media Marketing Udaipur", "Udaipur Marketing Consultant"],
};

export default function Page() {
    return <SEOLandingTemplate data={pageData} />;
}
