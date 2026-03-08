import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Web Development Services in Udaipur | Eshban Oliver Toolkit",
    description: "Discover the web development services, tech stack, and digital solutions offered by a leading Web Developer in Udaipur, Rajasthan. Building responsive digital assets.",
};

export default function ToolkitLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
