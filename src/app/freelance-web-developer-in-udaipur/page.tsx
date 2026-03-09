import { seoPages } from "@/data/seoPages";
import SEOLandingTemplate from "@/components/layout/SEOLandingTemplate";
import { Metadata } from "next";

const pageData = seoPages["freelance-web-developer-in-udaipur"];

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.intro,
    keywords: [pageData.keyword, "Freelance Developer Rajasthan", "Hire Web Developer Udaipur", "Independent Developer Udaipur"],
};

export default function Page() {
    return <SEOLandingTemplate data={pageData} />;
}
