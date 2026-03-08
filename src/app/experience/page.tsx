"use client";

import { motion } from "framer-motion";
import {
    HiOutlineBriefcase,
    HiOutlineCheckBadge,
} from "react-icons/hi2";
import SectionHeading from "@/components/ui/SectionHeading";
import PageTransition from "@/components/ui/PageTransition";
import CTASection from "@/components/ui/CTASection";
import Card from "@/components/ui/Card";
import { experiences } from "@/data/site";

export default function ExperiencePage() {
    return (
        <PageTransition>
            {/* Hero Section */}
            <section className="pt-40 pb-20 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        label="Trajectory"
                        title="Career Progression"
                        subtitle="A chronicle of my professional evolution in web engineering, from foundational internships to advanced full-stack leadership."
                    />
                </div>
            </section>

            {/* Timeline Section */}
            <section className="pb-32 relative">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative">
                        {/* vertical decorative line */}
                        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-teal-500 via-surface-300 to-transparent md:-translate-x-px opacity-30" />

                        {experiences.map((exp, i) => (
                            <motion.div
                                key={exp.role + i}
                                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
                                className={`relative flex flex-col md:flex-row gap-12 mb-24 last:mb-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                    }`}
                            >
                                {/* Central Node Decoration */}
                                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-teal-500 border-2 border-site-bg -translate-x-[7.5px] md:-translate-x-[8px] z-10 hidden md:block">
                                    <div className="absolute inset-0 rounded-full bg-teal-500 animate-ping opacity-25" />
                                </div>

                                {/* Experience Display Card */}
                                <div className={`md:w-1/2 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                                    <div className={`flex flex-col ${i % 2 === 0 ? "md:items-end" : "md:items-start"} gap-4`}>
                                        <div className="w-16 h-16 rounded-2xl bg-surface-100 border border-surface-300 flex items-center justify-center text-teal-400 shadow-xl group">
                                            <HiOutlineBriefcase className="w-8 h-8 group-hover:scale-110 transition-transform" />
                                        </div>
                                        <span className="px-4 py-1.5 rounded-full bg-teal-500/10 text-teal-400 text-xs font-bold uppercase tracking-widest border border-teal-500/20">
                                            {exp.period}
                                        </span>
                                        <h3 className="text-3xl font-black text-site-text tracking-tighter leading-none">
                                            {exp.role}
                                        </h3>
                                        <p className="text-teal-400 font-bold uppercase tracking-widest text-sm">
                                            {exp.company}
                                        </p>
                                    </div>
                                </div>

                                <div className="md:w-1/2">
                                    <Card className="h-full hover:bg-surface-100 transition-colors border-surface-300/50">
                                        <p className="text-site-text-muted text-base leading-relaxed mb-8 font-medium italic opacity-90">
                                            &ldquo;{exp.description}&rdquo;
                                        </p>

                                        {/* Key Responsibilities */}
                                        <div className="mb-8">
                                            <h4 className="text-site-text font-black text-xs uppercase tracking-[0.2em] mb-4 opacity-50">
                                                Technical Execution
                                            </h4>
                                            <ul className="space-y-3">
                                                {exp.responsibilities.map((resp) => (
                                                    <li key={resp} className="flex items-start gap-3 text-site-text-muted text-sm font-medium">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 shrink-0 shadow-[0_0_8px_rgba(5,200,173,0.5)]" />
                                                        {resp}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* High-Impact Achievements */}
                                        <div className="mb-8">
                                            <h4 className="text-site-text font-black text-xs uppercase tracking-[0.2em] mb-4 opacity-50">
                                                KPI Achievements
                                            </h4>
                                            <div className="grid grid-cols-1 gap-3">
                                                {exp.achievements.map((ach) => (
                                                    <div key={ach} className="flex items-center gap-3 p-3 rounded-xl bg-teal-500/5 border border-teal-500/10 transition-colors hover:bg-teal-500/10">
                                                        <HiOutlineCheckBadge className="w-5 h-5 text-teal-400 shrink-0" />
                                                        <span className="text-site-text-muted text-xs font-bold">{ach}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Technology Array */}
                                        <div className="flex flex-wrap gap-2 pt-6 border-t border-surface-300">
                                            {exp.technologies.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-md bg-surface-200 text-site-text-muted border border-surface-300"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </Card>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            <CTASection />
        </PageTransition>
    );
}
