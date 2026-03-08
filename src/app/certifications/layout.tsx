import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Certifications | Digital Marketing Expert in Udaipur — Eshban Oliver",
    description: "View certifications achieved by Eshban Oliver, verifying skills as a Digital Marketing Expert in Udaipur, Software Developer, and UI/UX Designer.",
};

export default function CertificationsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
