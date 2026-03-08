import type { Metadata, Viewport } from "next";
import { Inter, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";
import BackToTop from "@/components/ui/BackToTop";
import TechBackground from "@/components/TechBackground";
import AIChatbot from "@/components/AIChatbot";
import { siteConfig } from "@/data/site";
import { ThemeProvider } from "@/components/ThemeProvider";

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
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: [
    "Web Developer in Udaipur",
    "WordPress Developer in Udaipur",
    "Frontend Developer in Udaipur",
    "Freelance Web Developer in Udaipur",
    "Software Developer in Udaipur",
    "Web Developer in Rajasthan",
    "Best Web Developer in Udaipur",
    "Digital Marketing Expert in Udaipur",
    "Digital Marketing Expert in Rajasthan",
    "Responsive Website Design",
    "web developer",
    "frontend developer",
    "react native developer",
    "wordpress developer",
    "portfolio",
    "digital solutions",
    "eshban oliver",
    "react developer udaipur",
    "next.js developer india",
    "hire web developer udaipur",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    type: "website",
    url: siteConfig.url,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  icons: {
    icon: "/brand/logo-icon.svg",
    apple: "/brand/logo-icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#05c8ad", // Primary Brand Teal/Green
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://eshban.netlify.app/#person",
        "name": "Eshban Oliver",
        "url": "https://eshban.netlify.app",
        "image": "https://eshban.netlify.app/brand/logo-main.svg",
        "jobTitle": "Web Developer in Udaipur",
        "description": "Eshban Oliver is a Freelance Web Developer in Udaipur, Rajasthan specializing in Frontend Development, WordPress, and Responsive Website Design.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Udaipur",
          "addressRegion": "Rajasthan",
          "addressCountry": "IN"
        },
        "sameAs": [
          "https://github.com/Eshbanoliver",
          "https://in.linkedin.com/in/eshban-oliver-757352372",
          "https://g.dev/Eshbanoliver"
        ]
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://eshban.netlify.app/#business",
        "name": "Eshban Oliver — Web Developer in Udaipur",
        "url": "https://eshban.netlify.app",
        "telephone": "+919116315152",
        "email": "eshbanoliver@gmail.com",
        "description": "Professional Web Developer, WordPress Developer, and Digital Marketing Expert in Udaipur, Rajasthan offering Responsive Website Design and Digital Solutions.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Udaipur",
          "addressRegion": "Rajasthan",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "24.5854",
          "longitude": "73.7125"
        },
        "areaServed": [
          { "@type": "City", "name": "Udaipur" },
          { "@type": "State", "name": "Rajasthan" }
        ],
        "serviceType": [
          "Web Development",
          "WordPress Development",
          "Frontend Development",
          "Responsive Website Design",
          "Digital Marketing",
          "React Native Development"
        ],
        "priceRange": "₹₹"
      }
    ]
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-site-bg text-site-text antialiased overflow-x-hidden transition-colors duration-300">
        <ThemeProvider>
          <TechBackground />
          <ScrollProgress />
          <Navbar />
          <main className="min-h-screen relative z-10">{children}</main>
          <BackToTop />
          <AIChatbot />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
