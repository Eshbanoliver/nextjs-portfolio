"use client";

import { motion } from "framer-motion";
import { SEOPageData } from "@/data/seoPages";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import PageTransition from "@/components/ui/PageTransition";
import CTASection from "@/components/ui/CTASection";
import { HiOutlineCheckCircle, HiOutlineQuestionMarkCircle, HiOutlineCodeBracket, HiOutlineComputerDesktop, HiOutlineRocketLaunch, HiOutlineSquares2X2, HiOutlineChatBubbleLeftRight, HiOutlineGlobeAlt, HiOutlineDevicePhoneMobile, HiOutlineMagnifyingGlass } from "react-icons/hi2";
import Image from "next/image";
import { projects } from "@/data/site";
import { FaGithub } from "react-icons/fa6";

const vibrantColors = ["#06b6d4", "#8b5cf6", "#f43f5e", "#f59e0b", "#10b981", "#3b82f6"];

const iconMap: Record<string, any> = {
    HiOutlineCodeBracket,
    HiOutlineComputerDesktop,
    HiOutlineRocketLaunch,
    HiOutlineSquares2X2,
    HiOutlineChatBubbleLeftRight,
    HiOutlineGlobeAlt,
    HiOutlineDevicePhoneMobile,
    HiOutlineMagnifyingGlass,
};

export default function SEOLandingTemplate({ data }: { data: SEOPageData }) {
    const featuredProjects = projects.filter(p => p.featured).slice(0, 3);

    return (
        <PageTransition>
            {/* Hero Section */}
            <section className="pt-48 pb-24 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.05)_0%,transparent_70%)] pointer-events-none" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 text-teal-400 border border-teal-500/20 text-[10px] font-black uppercase tracking-widest mb-8">
                            Premium Digital Services
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-site-text mb-8 tracking-tighter leading-[1.1]">
                            {data.title}
                        </h1>
                        <p className="text-site-text-muted text-xl leading-relaxed mb-12 font-medium">
                            {data.intro}
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button href="/contact" variant="primary" size="lg">Start Your Project</Button>
                            <Button href="/projects" variant="outline" size="lg">Browse Portfolio</Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="py-24 bg-surface-100/30">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="prose prose-invert prose-teal max-w-none">
                        <p className="text-lg text-site-text-muted leading-loose mb-8">
                            {data.mainContent}
                        </p>
                        <p className="text-lg text-site-text-muted leading-loose">
                            My expertise as a <strong>{data.keyword}</strong> ensures that your business doesn't just have a website, but a powerful digital asset. In Udaipur and throughout Rajasthan, the competition is growing, and a professional online presence is the most effective way to stand out. I focus on high-performance architectures, ensuring that every site is fast, secure, and ready to convert visitors into customers.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        label="Specializations"
                        title="Key Service Offerings"
                        subtitle={`Comprehensive solutions tailored for businesses looking for a ${data.keyword}.`}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                        {data.services.map((service, i) => {
                            const Icon = iconMap[service.icon] || HiOutlineCodeBracket;
                            const color = vibrantColors[i % vibrantColors.length];
                            return (
                                <Card key={service.title} delay={i * 0.1} accentColor={color} className="p-8 group">
                                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border" style={{ backgroundColor: `${color}1a`, borderColor: `${color}33`, color: color }}>
                                        <Icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-xl font-black text-site-text mb-4 tracking-tight">{service.title}</h3>
                                    <p className="text-site-text-muted text-sm leading-relaxed">{service.description}</p>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-24 bg-surface-100/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-black text-site-text mb-8 tracking-tighter">
                                {data.benefitsHeader}
                            </h2>
                            <div className="space-y-6">
                                {data.benefits.map((benefit, i) => (
                                    <div key={i} className="flex items-start gap-4">
                                        <div className="mt-1 w-6 h-6 shrink-0 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-400">
                                            <HiOutlineCheckCircle className="w-4 h-4" />
                                        </div>
                                        <p className="text-site-text-muted font-medium">{benefit}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <Card className="p-10 border-teal-500/20 bg-teal-500/5 backdrop-blur-3xl overflow-hidden group">
                                <h3 className="text-2xl font-black text-site-text mb-6">Partner with Udaipur's Leading Developer</h3>
                                <p className="text-site-text-muted leading-relaxed mb-8">
                                    I combine local market awareness with international development standards. Whether you're in Udaipur or anywhere in Rajasthan, let's build something that truly represents your brand.
                                </p>
                                <Button href="/contact" size="md">Get a Free Consultation</Button>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio Preview */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        label="Work"
                        title="Recent Projects"
                        subtitle="Take a look at some of the high-performance websites I've built for clients across various industries."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                        {featuredProjects.map((project, i) => (
                            <Card key={project.title} delay={i * 0.1} className="overflow-hidden p-0 group" accentColor={vibrantColors[i % vibrantColors.length]}>
                                <div className="relative h-48 overflow-hidden">
                                    <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg font-black text-site-text mb-2">{project.title}</h3>
                                    <p className="text-xs text-site-text-muted line-clamp-2 mb-4">{project.description}</p>
                                    <Button href={project.liveUrl} size="sm" variant="outline" className="text-[10px] uppercase font-black">View Live</Button>
                                </div>
                            </Card>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <Button href="/projects" variant="primary">Explore Full Portfolio</Button>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-surface-100/30">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 mb-4 text-teal-400">
                            <HiOutlineQuestionMarkCircle className="w-6 h-6" />
                            <span className="text-xs font-black uppercase tracking-widest">Questions</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-site-text tracking-tighter">Frequently Asked Questions</h2>
                    </div>
                    <div className="space-y-4">
                        {data.faqs.map((faq, i) => (
                            <Card key={i} className="p-6">
                                <h3 className="text-lg font-black text-site-text mb-3">{faq.question}</h3>
                                <p className="text-site-text-muted text-sm leading-relaxed">{faq.answer}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection />
        </PageTransition>
    );
}
