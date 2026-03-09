import { seoPages } from "@/data/seoPages";
import SEOLandingTemplate from "@/components/layout/SEOLandingTemplate";
import { Metadata } from "next";

const pageData = seoPages["responsive-website-design-services"];

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.intro,
    keywords: [pageData.keyword, "Mobile Friendly Website", "Responsive Design Udaipur", "Cross Browser Web Design"],
};

export default function Page() {
    return <SEOLandingTemplate data={pageData} />;
}
