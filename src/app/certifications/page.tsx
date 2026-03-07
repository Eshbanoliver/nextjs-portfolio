"use client";

import Image from "next/image";
import {
    HiOutlineTrophy,
    HiOutlineCheckBadge,
    HiOutlineIdentification,
} from "react-icons/hi2";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import PageTransition from "@/components/ui/PageTransition";
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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {certifications.map((cert, i) => (
                            <Card
                                key={cert.title + i}
                                delay={i * 0.04}
                                className="group relative overflow-hidden flex flex-col h-full bg-surface-100/50 backdrop-blur-md border border-surface-300 hover:border-teal-500/40 hover:bg-surface-100 transition-all duration-500 p-0"
                            >
                                {/* Platform Badge */}
                                <div className="absolute top-4 right-4 z-20">
                                    <span className="px-3 py-1 text-[9px] font-black uppercase tracking-[0.1em] rounded-md bg-white/10 text-white border border-white/20 backdrop-blur-md shadow-xl">
                                        {cert.year}
                                    </span>
                                </div>

                                {/* Preview Image Container */}
                                <div className="relative h-44 overflow-hidden bg-surface-200/50 shrink-0 group-hover:bg-surface-200 transition-colors">
                                    <Image
                                        src={cert.image}
                                        alt={cert.title}
                                        fill
                                        className="object-contain p-6 scale-95 group-hover:scale-110 transition-transform duration-700"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                    />
                                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-surface-100 to-transparent opacity-60" />
                                </div>

                                {/* Content Body */}
                                <div className="p-6 flex-grow flex flex-col">
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 group-hover:bg-teal-500 group-hover:text-white transition-all duration-300">
                                            <HiOutlineTrophy className="w-4 h-4" />
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <HiOutlineCheckBadge className="w-4 h-4 text-teal-400" />
                                            <span className="text-teal-400 text-[10px] font-black uppercase tracking-widest leading-none">
                                                {cert.platform}
                                            </span>
                                        </div>
                                    </div>

                                    <h3 className="text-site-text font-bold text-base mb-3 leading-snug font-heading group-hover:text-teal-400 transition-colors line-clamp-2 min-h-[2.5rem]">
                                        {cert.title}
                                    </h3>

                                    <p className="text-site-text-muted text-[11px] leading-relaxed font-medium line-clamp-3 mb-6">
                                        {cert.description}
                                    </p>

                                    {/* Credential Data Tag */}
                                    <div className="mt-auto pt-4 border-t border-surface-300 flex items-center gap-2">
                                        <HiOutlineIdentification className="w-3.5 h-3.5 text-site-text-muted opacity-50" />
                                        <span className="text-site-text-muted text-[9px] font-mono tracking-tighter uppercase opacity-80">
                                            ID: {cert.credentialId}
                                        </span>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </PageTransition>
    );
}
