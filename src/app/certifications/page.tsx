"use client";

import Image from "next/image";
import { motion } from "framer-motion";
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
            {/* Hero */}
            <section className="pt-32 pb-16 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        label="Credentials"
                        title="Professional Certifications"
                        subtitle="Recognized certifications that validate my expertise and commitment to continuous learning"
                    />
                </div>
            </section>

            {/* Certifications Grid */}
            <section className="pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {certifications.map((cert, i) => (
                            <Card
                                key={cert.title + i}
                                delay={i * 0.05}
                                className="group relative overflow-hidden flex flex-col h-full bg-surface-100 border border-surface-300 hover:border-teal-500/30 transition-all duration-300"
                            >
                                {/* Certificate Preview Image */}
                                <div className="relative h-40 overflow-hidden bg-surface-200 border-b border-surface-300 shrink-0">
                                    <Image
                                        src={cert.image}
                                        alt={cert.title}
                                        fill
                                        className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                {/* Main Content */}
                                <div className="p-5 flex-grow">
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
                                            <HiOutlineTrophy className="w-4 h-4" />
                                        </div>
                                        <span className="px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded-md bg-teal-500/10 text-teal-400 border border-teal-500/20">
                                            {cert.year}
                                        </span>
                                    </div>

                                    <h3 className="text-site-text font-semibold text-sm mb-1 line-clamp-2 font-heading h-10 group-hover:text-teal-400 transition-colors">
                                        {cert.title}
                                    </h3>

                                    <div className="flex items-center gap-1.5 mb-3">
                                        <HiOutlineCheckBadge className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                                        <p className="text-teal-400 text-xs font-medium">
                                            {cert.platform}
                                        </p>
                                    </div>

                                    <p className="text-site-text-muted text-[11px] leading-relaxed mb-4 line-clamp-3">
                                        {cert.description}
                                    </p>
                                </div>

                                {/* Footer Data */}
                                <div className="mt-auto px-5 pb-5 pt-4 border-t border-surface-300">
                                    <div className="flex items-center gap-2">
                                        <HiOutlineIdentification className="w-3.5 h-3.5 text-site-text-muted opacity-60" />
                                        <span className="text-site-text-muted text-[9px] font-mono tracking-tight uppercase opacity-70">
                                            {cert.credentialId}
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
