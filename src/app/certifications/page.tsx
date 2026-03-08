"use client";

import Image from "next/image";
import {
    HiOutlineTrophy,
    HiOutlineCheckBadge,
    HiOutlineIdentification,
    HiOutlineEye,
    HiOutlineShieldCheck
} from "react-icons/hi2";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import PageTransition from "@/components/ui/PageTransition";
import CTASection from "@/components/ui/CTASection";
import Button from "@/components/ui/Button";
import { certifications } from "@/data/site";

export default function CertificationsPage() {
    return (
        <PageTransition>
            {/* Hero Section */}
            <section className="pt-32 pb-16 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        label="Validated Expertise"
                        title="Professional Credentials"
                        subtitle="A comprehensive record of my commitment to continuous learning and mastery of modern software engineering and digital marketing."
                    />
                </div>
            </section>

            {/* Certifications Grid */}
            <section className="pb-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {certifications.map((cert, i) => {
                            const cardColors = ["#10b981", "#6366f1", "#f43f5e", "#f59e0b", "#a855f7", "#0ea5e9"];
                            const color = cardColors[i % cardColors.length];
                            return (
                                <Card
                                    key={cert.title + i}
                                    accentColor={color}
                                    delay={i * 0.04}
                                    className="group relative overflow-hidden flex flex-col h-full bg-surface-100/40 backdrop-blur-xl border transition-all duration-500 hover:shadow-2xl p-0 rounded-2xl"
                                    style={{
                                        borderColor: `${color}20`,
                                        boxShadow: `0 10px 40px -15px ${color}10`
                                    }}
                                >
                                    {/* Platform Badge */}
                                    <div className="absolute top-4 right-4 z-20">
                                        <span className="px-3 py-1 text-[9px] font-black uppercase tracking-[0.1em] rounded-full text-white border border-white/20 backdrop-blur-md shadow-lg" style={{ backgroundColor: color }}>
                                            {cert.year}
                                        </span>
                                    </div>

                                    {/* Preview Image Container */}
                                    <div className="relative h-48 overflow-hidden bg-surface-200/30 shrink-0 group-hover:bg-surface-200/50 transition-colors">
                                        <Image
                                            src={cert.image}
                                            alt={cert.title}
                                            fill
                                            className="object-contain p-8 scale-95 group-hover:scale-105 transition-transform duration-700"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-surface-100/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    </div>

                                    {/* Content Body */}
                                    <div className="p-6 flex-grow flex flex-col">
                                        <div className="flex items-center gap-2 mb-4">
                                            <div className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:shadow-lg group-hover:scale-110" style={{ backgroundColor: `${color}15`, border: `1px solid ${color}30`, color: color }}>
                                                <HiOutlineTrophy className="w-5 h-5" />
                                            </div>
                                            <div className="flex flex-col">
                                                <div className="flex items-center gap-1.5">
                                                    <HiOutlineCheckBadge className="w-3.5 h-3.5" style={{ color: color }} />
                                                    <span className="text-[10px] font-black uppercase tracking-widest leading-none opacity-80" style={{ color: color }}>
                                                        {cert.platform}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <h3 className="text-site-text font-black text-lg mb-3 leading-tight font-heading group-hover:text-site-text transition-colors line-clamp-2 min-h-[3rem]">
                                            {cert.title}
                                        </h3>

                                        <p className="text-site-text-muted text-xs leading-relaxed font-medium line-clamp-3 mb-6 opacity-70 group-hover:opacity-90 transition-opacity">
                                            {cert.description}
                                        </p>

                                        {/* Action Buttons */}
                                        <div className="mt-auto space-y-3">
                                            <div className="grid grid-cols-1 gap-2">
                                                <Button
                                                    href={cert.detailUrl}
                                                    variant="secondary"
                                                    className="w-full text-[11px] py-2.5 rounded-xl border-dashed group/btn"
                                                    style={{ borderColor: `${color}40`, color: color }}
                                                >
                                                    <HiOutlineEye className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                                                    View Certificate
                                                </Button>

                                                {/* Verification Button - Conditional or Placeholder */}
                                                <Button
                                                    href="#"
                                                    variant="outline"
                                                    className="w-full text-[11px] py-2.5 rounded-xl opacity-50 cursor-not-allowed"
                                                >
                                                    <HiOutlineShieldCheck className="w-4 h-4 mr-2" />
                                                    Verify Authenticity
                                                </Button>
                                            </div>

                                            {/* ID Tag */}
                                            <div className="pt-4 border-t border-surface-300/50 flex items-center gap-2">
                                                <HiOutlineIdentification className="w-3.5 h-3.5 text-site-text-muted opacity-40" />
                                                <span className="text-site-text-muted text-[9px] font-mono tracking-tighter uppercase opacity-50">
                                                    ID: {cert.credentialId}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>
            <CTASection />
        </PageTransition>
    );
}
