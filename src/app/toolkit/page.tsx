"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    HiOutlineGlobeAlt,
    HiOutlineShoppingBag,
    HiOutlineComputerDesktop,
    HiOutlineDevicePhoneMobile,
    HiOutlineDeviceTablet,
    HiOutlineRocketLaunch,
    HiOutlineServerStack,
    HiOutlineArrowRight,
} from "react-icons/hi2";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import PageTransition from "@/components/ui/PageTransition";
import CTASection from "@/components/ui/CTASection";
import { toolkitServices } from "@/data/site";

const iconMap: Record<string, React.ElementType> = {
    HiOutlineGlobeAlt,
    HiOutlineShoppingBag,
    HiOutlineComputerDesktop,
    HiOutlineDevicePhoneMobile,
    HiOutlineDeviceTablet,
    HiOutlineRocketLaunch,
    HiOutlineServerStack,
};

const colorMap: Record<string, { bg: string; border: string; text: string; light: string }> = {
    teal: {
        bg: "bg-teal-500/10",
        border: "border-teal-500/20",
        text: "text-teal-400",
        light: "bg-teal-500/5",
    },
    accent: {
        bg: "bg-rose-500/10",
        border: "border-rose-500/20",
        text: "text-rose-400",
        light: "bg-rose-500/5",
    },
    navy: {
        bg: "bg-blue-500/10",
        border: "border-blue-500/20",
        text: "text-blue-400",
        light: "bg-blue-500/5",
    },
};

export default function ToolkitPage() {
    return (
        <PageTransition>
            {/* Hero Section */}
            <section className="pt-40 pb-20 relative overflow-hidden">
                <div className="absolute top-1/4 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-[128px]" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        label="Service Stack"
                        title="The Developer Toolkit"
                        subtitle="End-to-end engineering solutions across the digital spectrum, from core architecture to cross-platform experiences."
                    />
                </div>
            </section>

            {/* Service Grid Section */}
            <section className="pb-32 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {toolkitServices.map((service, i) => {
                            const Icon = iconMap[service.icon] || HiOutlineGlobeAlt;
                            const cardColors = ["#10b981", "#6366f1", "#f43f5e", "#f59e0b", "#a855f7", "#0ea5e9"];
                            const color = cardColors[i % cardColors.length];

                            return (
                                <Card key={service.slug} delay={i * 0.1} className="group p-0 overflow-hidden border shadow-2xl transition-all flex flex-col md:flex-row" accentColor={color} style={{ borderColor: `${color}40`, boxShadow: `0 20px 40px -15px ${color}15` }}>
                                    {/* Icon Column */}
                                    <div className="md:w-32 py-10 flex items-center justify-center border-b md:border-b-0 md:border-r transition-colors" style={{ backgroundColor: `${color}08`, borderColor: `${color}26` }}>
                                        <div className="w-16 h-16 rounded-2xl border flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500" style={{ backgroundColor: `${color}1a`, borderColor: `${color}33`, color: color }}>
                                            <Icon className="w-8 h-8" />
                                        </div>
                                    </div>

                                    {/* Content Column */}
                                    <div className="flex-1 p-8 lg:p-10 flex flex-col justify-between">
                                        <div>
                                            <h3 className="text-3xl font-black text-site-text tracking-tighter mb-4 transition-colors" style={{ color: color }}>
                                                {service.title}
                                            </h3>
                                            <p className="text-site-text-muted text-lg leading-relaxed mb-8 font-medium italic opacity-80 underline decoration-teal-500/10 underline-offset-8">
                                                {service.shortDesc}
                                            </p>
                                        </div>

                                        <div className="flex items-center justify-between mt-auto pt-6 border-t border-surface-300/30">
                                            <Link
                                                href={`/toolkit/${service.slug}`}
                                                className="group/btn inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] transition-all hover:text-site-text"
                                                style={{ color: color }}
                                            >
                                                Explore Service <HiOutlineArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                                            </Link>

                                            {/* decorative tag */}
                                            <span className="text-[10px] font-black text-site-text-muted opacity-30 uppercase tracking-[0.3em]">
                                                READY TO SHIP
                                            </span>
                                        </div>
                                    </div>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Strategic Consultation CTA */}
            <section className="py-32 relative overflow-hidden bg-site-text text-site-bg">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 via-transparent to-rose-500/20 opacity-30" />

                <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-[0.9]">
                            Architecture First. <br />
                            <span className="text-teal-400">Code Second.</span>
                        </h2>
                        <p className="text-site-bg/70 text-xl md:text-2xl mb-12 font-medium leading-relaxed">
                            I help businesses navigate complex technical landscapes to build solutions that don't just work, but scale effortlessly.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Button href="/contact" size="lg" className="px-12 py-6 rounded-full bg-teal-500 text-site-bg border-none hover:bg-teal-400">
                                Start a Consultation
                            </Button>
                            <Link href="/projects" className="text-sm font-black uppercase tracking-[0.2em] hover:text-teal-400 transition-colors">
                                Browse Technical Case Studies
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
            <CTASection />
        </PageTransition>
    );
}
