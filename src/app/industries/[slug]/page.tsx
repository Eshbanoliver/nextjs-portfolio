import { notFound } from "next/navigation";
import { Metadata } from "next";
import { motion } from "framer-motion";
import {
    HiOutlineMapPin,
    HiOutlineEnvelope,
    HiOutlinePhone,
    HiOutlineArrowRight,
    HiOutlineCheckCircle,
} from "react-icons/hi2";
import { FaGithub } from "react-icons/fa";
import PageTransition from "@/components/ui/PageTransition";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { industryDetails } from "@/data/industryDetails";
import { siteConfig } from "@/data/site";
import CTASection from "@/components/ui/CTASection";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const data = industryDetails[slug];
    if (!data) return { title: "Industry Not Found" };

    return {
        title: `${data.h1} | Eshban Oliver`,
        description: data.subheading,
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
            data.name
        ],
    };
}

export default async function IndustrySubpage({ params }: PageProps) {
    const { slug } = await params;
    const data = industryDetails[slug];
    const cardColors = ["#10b981", "#6366f1", "#f43f5e", "#f59e0b", "#a855f7", "#0ea5e9"];

    if (!data) {
        notFound();
    }

    return (
        <PageTransition>
            <article className="pt-32 pb-24 relative">
                {/* Hero Header */}
                <header className="py-20 bg-surface-100/30 border-b border-surface-300 relative overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <SectionHeading
                            label={data.name}
                            title={data.h1}
                            subtitle={data.subheading}
                            align="left"
                        />
                    </div>
                </header>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
                    <div className="grid grid-cols-1 xl:grid-cols-3 gap-12 lg:gap-20">

                        {/* LEFT COLUMN: Main Content */}
                        <div className="xl:col-span-2 space-y-16">
                            {/* Introduction */}
                            <section className="prose prose-lg prose-invert max-w-none text-site-text-muted">
                                {data.content.map((paragraph, idx) => (
                                    <p key={idx} className="leading-relaxed font-medium mb-6">{paragraph}</p>
                                ))}
                            </section>

                            {/* Benefits Section */}
                            <section>
                                <h2 className="text-3xl font-black text-site-text mb-8">Business Benefits</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {data.benefits.map((benefit, idx) => {
                                        const color = cardColors[idx % cardColors.length];
                                        return (
                                            <Card key={idx} className="p-6 border shadow-2xl bg-surface-100/50 transition-all hover:bg-surface-100" accentColor={color} style={{ borderColor: `${color}40`, boxShadow: `0 20px 40px -15px ${color}15` }}>
                                                <div className="flex items-start gap-4">
                                                    <div className="w-10 h-10 mt-1 shrink-0 rounded-full flex items-center justify-center border" style={{ backgroundColor: `${color}1a`, color: color, borderColor: `${color}33` }}>
                                                        <HiOutlineCheckCircle className="w-6 h-6" />
                                                    </div>
                                                    <div>
                                                        <h3 className="font-bold text-site-text text-lg mb-2">{benefit.title}</h3>
                                                        <p className="text-site-text-muted text-sm leading-relaxed">{benefit.description}</p>
                                                    </div>
                                                </div>
                                            </Card>
                                        );
                                    })}
                                </div>
                            </section>

                            {/* What Makes Me Better Section */}
                            <section>
                                <SectionHeading
                                    title="What Makes Me Better?"
                                    subtitle="Expert technical depth and strategic research specifically tailored to your industry."
                                    align="left"
                                />
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                                    {data.whatMakesMeBetter.map((item, idx) => {
                                        const color = cardColors[(idx + 2) % cardColors.length];
                                        return (
                                            <Card key={idx} className="p-8 border shadow-2xl bg-surface-100/50 transition-all hover:bg-surface-100" accentColor={color} style={{ borderColor: `${color}40`, boxShadow: `0 20px 40px -15px ${color}15` }}>
                                                <h3 className="text-xl font-bold mb-3 flex items-center gap-2" style={{ color: color }}>
                                                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
                                                    {item.title}
                                                </h3>
                                                <p className="text-site-text-muted text-base leading-relaxed pl-4">
                                                    {item.description}
                                                </p>
                                            </Card>
                                        );
                                    })}
                                </div>
                            </section>
                        </div>

                        {/* RIGHT COLUMN: Sidebar */}
                        <aside className="xl:col-span-1 space-y-8">

                            {/* Contact Card */}
                            <Card className="p-8 border shadow-2xl bg-surface-100/50" accentColor="#14b8a6" style={{ borderColor: `#14b8a640`, boxShadow: `0 20px 40px -15px #14b8a615` }}>
                                <h3 className="text-2xl font-black text-site-text tracking-tight mb-6 relative">
                                    Let's Work Together
                                </h3>

                                <div className="space-y-5 mb-8">
                                    <div className="flex items-center gap-4 text-site-text-muted">
                                        <div className="w-10 h-10 rounded-full bg-surface-300 flex items-center justify-center text-site-text shrink-0">
                                            <HiOutlineMapPin className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold uppercase tracking-wider text-teal-400 mb-0.5">Location</p>
                                            <p className="text-sm font-medium">Udaipur, Rajasthan</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 text-site-text-muted">
                                        <div className="w-10 h-10 rounded-full bg-surface-300 flex items-center justify-center text-site-text shrink-0">
                                            <HiOutlineEnvelope className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold uppercase tracking-wider text-teal-400 mb-0.5">Email</p>
                                            <p className="text-sm font-medium truncate max-w-[180px]">{siteConfig.email}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-3">
                                    <Button href={`mailto:${siteConfig.email}`} className="w-full justify-center">
                                        <HiOutlineEnvelope className="w-5 h-5 mr-2" /> Email Me
                                    </Button>
                                    <Button href={siteConfig.socials.github} external variant="outline" className="w-full justify-center border-surface-400/50 hover:border-teal-400 hover:text-teal-400 transition-colors">
                                        <FaGithub className="w-5 h-5 mr-2" /> View GitHub
                                    </Button>
                                </div>
                            </Card>

                            {/* FAQ Section */}
                            <Card className="p-8 border shadow-2xl bg-surface-100/50" accentColor="#eab308" style={{ borderColor: `#eab30840`, boxShadow: `0 20px 40px -15px #eab30815` }}>
                                <h3 className="text-xl font-black text-site-text mb-6">Frequently Asked Questions</h3>
                                <div className="space-y-6">
                                    {data.faqs.map((faq, idx) => (
                                        <div key={idx} className="border-b border-surface-300/50 pb-4 last:border-0 last:pb-0">
                                            <h4 className="font-bold text-site-text text-sm mb-2">{faq.question}</h4>
                                            <p className="text-xs text-site-text-muted leading-relaxed font-medium">{faq.answer}</p>
                                        </div>
                                    ))}
                                </div>
                            </Card>

                            {/* Sidebar CTA */}
                            <div className="p-8 rounded-2xl bg-gradient-to-br from-teal-500 to-indigo-600 text-white text-center shadow-xl">
                                <h3 className="text-xl font-black mb-4 tracking-tight">Need a professional website for your business in Udaipur or Rajasthan?</h3>
                                <div className="flex flex-col gap-3 mt-8">
                                    <a href="/contact" className="w-full py-3.5 rounded-xl bg-white text-teal-600 font-bold text-sm hover:scale-[1.02] transition-transform shadow-lg">Start Your Project</a>
                                    <a href="/projects" className="w-full py-3.5 rounded-xl bg-teal-700/50 text-white font-bold text-sm border border-white/20 hover:bg-teal-700 transition-colors">View Past Work</a>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </article>
            <CTASection />
        </PageTransition>
    );
}
