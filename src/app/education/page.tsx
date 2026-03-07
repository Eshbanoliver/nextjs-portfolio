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
            {/* Hero Section */}
            <section className="pt-40 pb-20 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <SectionHeading
                        label="Foundation"
                        title="Academic Excellence"
                        subtitle="A record of rigorous academic training and continuous professional development."
                    />
                </div>
            </section>

            {/* Timeline-style Education Cards */}
            <section className="pb-32 relative">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-12">
                        {education.map((edu, i) => (
                            <motion.div
                                key={edu.degree + i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: i * 0.1 }}
                            >
                                <Card className="p-0 overflow-hidden border-surface-300/50 hover:bg-surface-100 transition-colors">
                                    <div className="flex flex-col md:flex-row">
                                        {/* Status Sidebar */}
                                        <div className="md:w-1/4 bg-surface-200/50 p-8 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-surface-300/50">
                                            <div className="w-16 h-16 rounded-2xl bg-teal-500/10 text-teal-400 flex items-center justify-center mb-4 shadow-inner">
                                                <HiOutlineAcademicCap className="w-8 h-8" />
                                            </div>
                                            <span className="text-teal-400 font-black text-sm uppercase tracking-widest">{edu.year}</span>
                                            <div className="mt-2 px-3 py-1 rounded-full bg-surface-300 text-site-text-muted text-[10px] font-bold uppercase tracking-widest border border-surface-400/30">
                                                {edu.grade}
                                            </div>
                                        </div>

                                        {/* Main Content */}
                                        <div className="md:w-3/4 p-8 md:p-12">
                                            <div className="mb-8">
                                                <h3 className="text-2xl md:text-3xl font-black text-site-text tracking-tighter mb-2">
                                                    {edu.degree}
                                                </h3>
                                                <p className="text-teal-400 font-bold uppercase tracking-widest text-sm">
                                                    {edu.institution}
                                                </p>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                {/* Achievements */}
                                                <div>
                                                    <h4 className="text-xs font-black text-site-text uppercase tracking-[0.2em] mb-4 opacity-50 flex items-center gap-2">
                                                        <HiOutlineTrophy className="w-4 h-4 text-teal-400" />
                                                        Distinctions
                                                    </h4>
                                                    <ul className="space-y-3">
                                                        {edu.achievements.map((ach) => (
                                                            <li key={ach} className="flex items-start gap-3 text-site-text-muted text-sm font-medium leading-snug">
                                                                <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-1.5 shrink-0 shadow-[0_0_8px_rgba(5,200,173,0.5)]" />
                                                                {ach}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                {/* Coursework */}
                                                <div>
                                                    <h4 className="text-xs font-black text-site-text uppercase tracking-[0.2em] mb-4 opacity-50 flex items-center gap-2">
                                                        <HiOutlineBookOpen className="w-4 h-4 text-teal-400" />
                                                        Key Curriculum
                                                    </h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {edu.coursework.map((course) => (
                                                            <span
                                                                key={course}
                                                                className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest rounded-md bg-surface-200 text-site-text-muted border border-surface-300"
                                                            >
                                                                {course}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications Preview Section */}
            <section className="py-32 bg-surface-100/30 border-y border-surface-300/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
                        <div className="max-w-2xl">
                            <SectionHeading
                                label="Credentials"
                                title="Validated Expertise"
                                subtitle="Professional certifications from global industry leaders."
                            />
                        </div>
                        <a
                            href="/certifications"
                            className="inline-flex items-center gap-2 px-8 py-3.5 text-xs font-black uppercase tracking-widest rounded-full bg-site-text text-site-bg hover:opacity-90 transition-all hover:-translate-y-1 shadow-xl"
                        >
                            View All {certifications.length} Credentials →
                        </a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {certifications.slice(0, 6).map((cert, i) => (
                            <Card key={cert.title + i} className="group hover:border-teal-500/30 transition-all">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-10 h-10 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 group-hover:scale-110 transition-transform">
                                        <HiOutlineTrophy className="w-5 h-5" />
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-teal-400">{cert.year}</span>
                                </div>
                                <h3 className="text-site-text font-black text-lg tracking-tight mb-1 group-hover:text-teal-400 transition-colors">
                                    {cert.title}
                                </h3>
                                <p className="text-site-text-muted text-xs font-bold uppercase tracking-widest opacity-60">
                                    {cert.platform}
                                </p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </PageTransition>
    );
}
