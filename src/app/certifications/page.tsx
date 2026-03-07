"use client";

import { motion } from "framer-motion";
import {
    HiOutlineTrophy,
    HiOutlineCheckBadge,
    HiOutlineCalendar,
    HiOutlineIdentification,
} from "react-icons/hi2";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import PageTransition from "@/components/ui/PageTransition";
import { certifications } from "@/data/site";

const colors = ["teal", "accent", "navy", "teal", "accent"];

export default function CertificationsPage() {
    return (
        <PageTransition>
            {/* Hero */}
            <section className="pt-32 pb-16 relative overflow-hidden">
                <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-[128px]" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-[128px]" />
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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {certifications.map((cert, i) => {
                            const color = colors[i % colors.length];
                            const colorClasses: Record<string, { bg: string; border: string; text: string; badgeBg: string }> = {
                                teal: { bg: "bg-teal-500/10", border: "border-teal-500/20", text: "text-teal-400", badgeBg: "bg-teal-500/20" },
                                accent: { bg: "bg-accent-500/10", border: "border-accent-500/20", text: "text-accent-400", badgeBg: "bg-accent-500/20" },
                                navy: { bg: "bg-navy-500/10", border: "border-navy-500/20", text: "text-navy-400", badgeBg: "bg-navy-500/20" },
                            };
                            const c = colorClasses[color];

                            return (
                                <Card key={cert.title} delay={i * 0.1} className="group relative overflow-hidden">
                                    {/* Decorative Gradient */}
                                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent ${color === "teal" ? "via-teal-500" : color === "accent" ? "via-accent-500" : "via-navy-500"} to-transparent opacity-50`} />

                                    <div className="pt-2">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className={`w-12 h-12 rounded-xl ${c.bg} ${c.border} border flex items-center justify-center ${c.text} group-hover:scale-110 transition-transform duration-300`}>
                                                <HiOutlineTrophy className="w-6 h-6" />
                                            </div>
                                            <span className={`px-3 py-1 text-xs font-medium rounded-full ${c.badgeBg} ${c.text} ${c.border} border`}>
                                                {cert.year}
                                            </span>
                                        </div>

                                        <h3 className="text-white font-semibold text-lg mb-2 font-heading">
                                            {cert.title}
                                        </h3>

                                        <div className="flex items-center gap-2 mb-3">
                                            <HiOutlineCheckBadge className={`w-4 h-4 ${c.text}`} />
                                            <p className={`${c.text} text-sm font-medium`}>
                                                {cert.platform}
                                            </p>
                                        </div>

                                        <p className="text-surface-400 text-sm leading-relaxed mb-4">
                                            {cert.description}
                                        </p>

                                        <div className="flex items-center gap-2 pt-3 border-t border-surface-700/30">
                                            <HiOutlineIdentification className="w-4 h-4 text-surface-500" />
                                            <span className="text-surface-500 text-xs font-mono">
                                                {cert.credentialId}
                                            </span>
                                        </div>
                                    </div>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>
        </PageTransition>
    );
}
