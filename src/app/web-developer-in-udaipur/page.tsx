import { seoPages } from "@/data/seoPages";
import SEOLandingTemplate from "@/components/layout/SEOLandingTemplate";
import { Metadata } from "next";

const pageData = seoPages["web-developer-in-udaipur"];

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.intro,
    keywords: [pageData.keyword, "Web Development Udaipur", "Udaipur Developer", "Website services Udaipur"],
};

export default function Page() {
    return <SEOLandingTemplate data={pageData} />;
}
