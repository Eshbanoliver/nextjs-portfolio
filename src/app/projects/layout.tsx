import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects by Web Developer in Udaipur | Eshban Oliver Portfolio",
    description: "Explore selected projects by Eshban Oliver, a top Software Developer in Udaipur. Featuring responsive website design, React Native apps, and digital platforms.",
};

export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
