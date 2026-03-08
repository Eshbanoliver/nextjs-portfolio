import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Industries Served | Web Developer in Rajasthan — Eshban Oliver",
    description: "Explore the different industries I serve as a Web Developer and Digital Marketing Expert in Rajasthan. Delivering bespoke software across eCommerce, Healthcare, and more.",
};

export default function IndustriesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
