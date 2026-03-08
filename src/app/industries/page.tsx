"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    HiOutlineHomeModern,
    HiOutlineHeart,
    HiOutlineAcademicCap,
    HiOutlineBuildingOffice2,
    HiOutlineShoppingCart,
    HiOutlineBriefcase,
    HiOutlineStar,
    HiOutlineCalendarDays,
    HiOutlineArrowRight,
} from "react-icons/hi2";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import PageTransition from "@/components/ui/PageTransition";
import CTASection from "@/components/ui/CTASection";
import { industries } from "@/data/site";

const iconMap: Record<string, React.ElementType> = {
    HiOutlineHomeModern,
    HiOutlineHeart,
    HiOutlineAcademicCap,
    HiOutlineBuildingOffice2,
    HiOutlineShoppingCart,
    HiOutlineBriefcase,
    HiOutlineStar,
    HiOutlineCalendarDays,
};

export default function IndustriesPage() {
    return (
        <PageTransition>
            {/* Hero Section */}
            <section className="pt-40 pb-20 relative overflow-hidden">
                {/* Decorative Blobs */}
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-[128px] animate-pulse-slow" />
                <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-[128px]" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        label="Expertise Verticals"
                        title="Industries Served"
                        subtitle="Tailored digital strategies and technical architectures for diverse business ecosystems."
                    />
                </div>
            </section>

            {/* Vertical Cards Grid */}
            <section className="pb-32 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {industries.map((industry, i) => {
                            const Icon = iconMap[industry.icon] || HiOutlineBriefcase;
                            const cardColors = ["#10b981", "#6366f1", "#f43f5e", "#f59e0b", "#a855f7", "#0ea5e9"];
                            const color = cardColors[i % cardColors.length];

                            return (
                                <Card key={industry.name} delay={i * 0.1} className="group h-full p-10 overflow-hidden relative border shadow-2xl transition-all flex flex-col" accentColor={color} style={{ borderColor: `${color}40`, boxShadow: `0 20px 40px -15px ${color}15` }}>
                                    {/* Decorative background number */}
                                    <div className="absolute -right-4 -bottom-8 text-[12rem] font-black text-site-text opacity-[0.02] select-none group-hover:opacity-[0.05] transition-opacity">
                                        0{i + 1}
                                    </div>

                                    <div className="flex flex-col sm:flex-row items-start gap-8 relative z-10">
                                        <div className="w-20 h-20 shrink-0 rounded-2xl bg-surface-100 border flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500" style={{ color: color, borderColor: `${color}33`, backgroundColor: `${color}08` }}>
                                            <Icon className="w-10 h-10" />
                                        </div>

                                        <div>
                                            <h3 className="text-3xl font-black text-site-text tracking-tighter mb-4 transition-colors" style={{ color: color }}>
                                                {industry.name}
                                            </h3>
                                            <p className="text-site-text-muted text-base leading-relaxed mb-6 font-medium">
                                                {industry.description}
                                            </p>

                                            {/* Solution Feature */}
                                            <div className="flex flex-col gap-2 p-5 rounded-2xl border transition-colors mt-auto mb-6" style={{ backgroundColor: `${color}08`, borderColor: `${color}1a` }}>
                                                <span className="text-[10px] font-black uppercase tracking-[0.2em]" style={{ color: color }}>
                                                    Strategic Solution
                                                </span>
                                                <p className="text-site-text font-bold text-sm leading-snug">
                                                    {industry.solution}
                                                </p>
                                            </div>

                                            <Link href={`/industries/${industry.slug}`} className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.3em] transition-colors mt-auto pt-4 border-t w-full cursor-pointer hover:text-site-text" style={{ color: color, borderColor: `${color}26` }}>
                                                DISCOVER MORE <HiOutlineArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                                            </Link>
                                        </div>
                                    </div>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Bottom CTA for Industries */}
            <section className="py-24 bg-surface-200/50 border-t border-surface-300/50">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-5xl font-black text-site-text tracking-tighter mb-6">
                        Need a Specialized Industry Solution?
                    </h2>
                    <p className="text-site-text-muted text-lg mb-10 font-medium">
                        I specialize in deep industry research to build solutions that solve specific vertical pain points.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <a href="/contact" className="px-10 py-4 rounded-full bg-teal-500 text-site-bg font-black uppercase tracking-widest text-xs hover:opacity-90 transition-all shadow-xl shadow-teal-500/20">
                            Book a Consultation
                        </a>
                        <a href="/projects" className="px-10 py-4 rounded-full bg-surface-300 text-site-text font-black uppercase tracking-widest text-xs border border-surface-400/50 hover:bg-surface-400 transition-all">
                            Browse Case Studies
                        </a>
                    </div>
                </div>
            </section>
            <CTASection />
        </PageTransition>
    );
}
