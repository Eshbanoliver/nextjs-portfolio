import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Best Web Developer in Udaipur | About Eshban Oliver",
    description: "Learn more about Eshban Oliver, a Frontend Developer in Udaipur, Rajasthan. Experienced in delivering high-performance, SEO-optimized web solutions.",
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
