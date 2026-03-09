import { seoPages } from "@/data/seoPages";
import SEOLandingTemplate from "@/components/layout/SEOLandingTemplate";
import { Metadata } from "next";

const pageData = seoPages["software-developer-in-rajasthan"];

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.intro,
    keywords: [pageData.keyword, "Software Engineering Rajasthan", "Nodejs Developer Rajasthan", "Backend Developer Rajasthan"],
};

export default function Page() {
    return <SEOLandingTemplate data={pageData} />;
}
