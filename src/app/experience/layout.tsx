import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Professional Experience | Software Developer in Udaipur — Eshban Oliver",
    description: "View the work history and professional experience of Eshban Oliver, a skilled Frontend Developer and Web Developer in Udaipur, Rajasthan.",
};

export default function ExperienceLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
