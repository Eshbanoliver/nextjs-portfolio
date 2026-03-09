import { seoPages } from "@/data/seoPages";
import SEOLandingTemplate from "@/components/layout/SEOLandingTemplate";
import { Metadata } from "next";

const pageData = seoPages["frontend-developer-in-udaipur"];

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.intro,
    keywords: [pageData.keyword, "React Developer Udaipur", "Nextjs Developer Rajasthan", "UI/UX Developer Udaipur"],
};

export default function Page() {
    return <SEOLandingTemplate data={pageData} />;
}
