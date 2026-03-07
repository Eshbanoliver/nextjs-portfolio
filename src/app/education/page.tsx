"use client";

import { motion } from "framer-motion";
import {
    HiOutlineAcademicCap,
    HiOutlineTrophy,
    HiOutlineBookOpen,
} from "react-icons/hi2";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import PageTransition from "@/components/ui/PageTransition";
import { education, certifications } from "@/data/site";

export default function EducationPage() {
    return (
        <PageTransition>
            {/* Hero */}
            <section className="pt-32 pb-16 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        label="Education"
                        title="Academic Background"
                        subtitle="My educational foundation and commitment to continuous learning"
                    />
                </div>
            </section>

            {/* Education Cards */}
            <section className="pb-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {education.map((edu, i) => (
                        <Card key={edu.degree} delay={i * 0.15} className="p-8 mb-8">
                            <div className="flex items-start gap-5 mb-6">
                                <div className="w-14 h-14 shrink-0 rounded-xl bg-gradient-to-br from-teal-500/20 to-navy-500/20 border border-teal-500/20 flex items-center justify-center text-teal-400">
                                    <HiOutlineAcademicCap className="w-7 h-7" />
                                </div>
                                <div>
                                    <h3 className="text-site-text font-semibold text-xl font-heading">
                                        {edu.degree}
                                    </h3>
                                    <p className="text-teal-400 font-medium">{edu.institution}</p>
                                    <p className="text-surface-500 text-sm mt-0.5">{edu.year} | {edu.grade}</p>
                                </div>
                            </div>

                            {/* Achievements */}
                            <div className="mb-6">
                                <h4 className="text-site-text text-sm font-semibold uppercase tracking-wider mb-3 flex items-center gap-2">
                                    <HiOutlineTrophy className="w-4 h-4 text-accent-400" />
                                    Key Achievements
                                </h4>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {edu.achievements.map((ach) => (
                                        <li key={ach} className="flex items-start gap-2 text-surface-400 text-sm">
                                            <span className="w-1.5 h-1.5 rounded-full bg-accent-400 mt-1.5 shrink-0" />
                                            {ach}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Coursework */}
                            <div>
                                <h4 className="text-site-text text-sm font-semibold uppercase tracking-wider mb-3 flex items-center gap-2">
                                    <HiOutlineBookOpen className="w-4 h-4 text-teal-400" />
                                    Relevant Coursework
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {edu.coursework.map((course) => (
                                        <span
                                            key={course}
                                            className="px-3 py-1.5 text-xs font-medium rounded-lg bg-surface-800/50 text-surface-300 border border-surface-700/30 hover:border-teal-500/30 hover:text-teal-400 transition-all duration-300 cursor-default"
                                        >
                                            {course}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Certifications Preview */}
            <section className="py-24 bg-surface-900/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        label="Certifications"
                        title="Professional Certifications"
                        subtitle="Recognized credentials that validate my expertise"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {certifications.slice(0, 6).map((cert, i) => (
                            <Card key={cert.title} delay={i * 0.1}>
                                <div className="w-10 h-10 rounded-lg bg-accent-500/10 border border-accent-500/20 flex items-center justify-center text-accent-400 mb-4">
                                    <HiOutlineTrophy className="w-5 h-5" />
                                </div>
                                <h3 className="text-site-text font-semibold mb-1 font-heading">
                                    {cert.title}
                                </h3>
                                <p className="text-teal-400 text-sm font-medium mb-1">
                                    {cert.platform}
                                </p>
                                <p className="text-surface-500 text-xs">{cert.year}</p>
                            </Card>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <a
                            href="/certifications"
                            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-xl bg-surface-800/50 text-teal-400 border border-teal-500/20 hover:bg-teal-500/10 hover:border-teal-500/30 transition-all duration-300"
                        >
                            View All {certifications.length} Certifications →
                        </a>
                    </div>
                </div>
            </section>
        </PageTransition>
    );
}
