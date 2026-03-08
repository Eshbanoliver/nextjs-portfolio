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
import { FaWhatsapp } from "react-icons/fa";
import PageTransition from "@/components/ui/PageTransition";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { industryDetails } from "@/data/industryDetails";
import { siteConfig } from "@/data/site";

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
            "Responsive Website Design",
            data.name
        ],
    };
}

export default async function IndustrySubpage({ params }: PageProps) {
    const { slug } = await params;
    const data = industryDetails[slug];

    if (!data) {
        notFound();
    }

    return (
        <PageTransition>
            <article className="pt-32 pb-24 relative">
                {/* Hero Header */}
                <header className="py-20 bg-surface-100/30 border-b border-surface-300 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />
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
                                    {data.benefits.map((benefit, idx) => (
                                        <Card key={idx} className="p-6 border-surface-300">
                                            <div className="flex items-start gap-4">
                                                <div className="w-10 h-10 mt-1 shrink-0 bg-teal-500/10 rounded-full flex items-center justify-center text-teal-400">
                                                    <HiOutlineCheckCircle className="w-6 h-6" />
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-site-text text-lg mb-2">{benefit.title}</h3>
                                                    <p className="text-site-text-muted text-sm leading-relaxed">{benefit.description}</p>
                                                </div>
                                            </div>
                                        </Card>
                                    ))}
                                </div>
                            </section>

                            {/* What Makes Me Better Section */}
                            <section className="bg-surface-200/50 rounded-3xl p-8 md:p-12 border border-surface-300 relative overflow-hidden">
                                <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-accent-500/10 rounded-full blur-[80px]" />
                                <h2 className="text-3xl font-black text-site-text mb-8 relative z-10">What Makes Me Better?</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
                                    {data.whatMakesMeBetter.map((item, idx) => (
                                        <div key={idx}>
                                            <h3 className="text-teal-400 font-bold mb-2 flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                                                {item.title}
                                            </h3>
                                            <p className="text-site-text-muted text-sm leading-relaxed pl-3.5">
                                                {item.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        {/* RIGHT COLUMN: Sidebar */}
                        <aside className="xl:col-span-1 space-y-8">

                            {/* Contact Card */}
                            <Card className="p-8 border-teal-500/20 shadow-2xl shadow-teal-500/5 bg-surface-100" accentColor="#2dd4bf">
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
                                    <Button href={`https://wa.me/91${siteConfig.phone.replace(/[^0-9]/g, '')}`} external variant="outline" className="w-full justify-center border-green-500/30 text-green-500 hover:bg-green-500/10 hover:border-green-500">
                                        <FaWhatsapp className="w-5 h-5 mr-2" /> WhatsApp Me
                                    </Button>
                                </div>
                            </Card>

                            {/* FAQ Section */}
                            <Card className="p-8 border-surface-300 bg-surface-100/50">
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
        </PageTransition>
    );
}
