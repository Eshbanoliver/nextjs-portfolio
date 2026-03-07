import type { Metadata } from "next";
import { Inter, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";
import BackToTop from "@/components/ui/BackToTop";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arjun Mehta — Full Stack Developer & Digital Solutions Architect",
  description:
    "Frontend Developer specializing in high-performance websites, web applications, and modern UI systems. Building scalable digital solutions for businesses worldwide.",
  keywords: [
    "web developer",
    "frontend developer",
    "full stack developer",
    "react developer",
    "next.js developer",
    "portfolio",
    "web applications",
    "digital solutions",
  ],
  authors: [{ name: "Arjun Mehta" }],
  openGraph: {
    title: "Arjun Mehta — Full Stack Developer",
    description:
      "Building modern web experiences and scalable digital solutions.",
    type: "website",
    url: "https://arjunmehta.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arjun Mehta — Full Stack Developer",
    description:
      "Building modern web experiences and scalable digital solutions.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-surface-950 text-surface-200 antialiased overflow-x-hidden">
        <ScrollProgress />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <BackToTop />
        <Footer />
      </body>
    </html>
  );
}
