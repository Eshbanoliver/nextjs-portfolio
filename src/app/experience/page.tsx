"use client";

import { motion } from "framer-motion";
import {
    HiOutlineBriefcase,
    HiOutlineCheckBadge,
} from "react-icons/hi2";
import SectionHeading from "@/components/ui/SectionHeading";
import PageTransition from "@/components/ui/PageTransition";
import { experiences } from "@/data/site";

export default function ExperiencePage() {
    return (
        <PageTransition>
            {/* Hero */}
            <section className="pt-32 pb-16 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        label="Career"
                        title="Professional Experience - Web Developer & UI/UX Designer"
                        subtitle="My professional journey and career milestones."
                    />
                </div>
            </section>

            {/* Timeline */}
            <section className="pb-24 relative">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-teal-500/50 via-surface-300 to-transparent md:-translate-x-px" />

                        {experiences.map((exp, i) => (
                            <motion.div
                                key={exp.role}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: i * 0.15 }}
                                className={`relative flex flex-col md:flex-row gap-8 mb-16 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                    }`}
                            >
                                {/* Timeline Node */}
                                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-teal-500 border-4 border-site-bg -translate-x-[7px] md:-translate-x-[8px] z-10 shadow-lg shadow-teal-500/30" />

                                {/* Content Card */}
                                <div
                                    className={`md:w-1/2 ml-8 md:ml-0 ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"
                                        }`}
                                >
                                    <div className="glass-card rounded-2xl p-6 hover:border-teal-500/20">
                                        <div className="flex items-start gap-4 mb-4">
                                            <div className="w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br from-teal-500/20 to-navy-500/20 border border-teal-500/20 flex items-center justify-center text-teal-400">
                                                <HiOutlineBriefcase className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h3 className="text-site-text font-semibold text-xl font-heading">
                                                    {exp.role}
                                                </h3>
                                                <p className="text-teal-400 text-sm font-medium">
                                                    {exp.company}
                                                </p>
                                                <p className="text-site-text-muted text-xs mt-0.5">
                                                    {exp.period}
                                                </p>
                                            </div>
                                        </div>

                                        <p className="text-site-text-muted text-sm leading-relaxed mb-4">
                                            {exp.description}
                                        </p>

                                        {/* Responsibilities */}
                                        <div className="mb-4">
                                            <h4 className="text-site-text-muted text-xs font-semibold uppercase tracking-wider mb-2">
                                                Key Responsibilities
                                            </h4>
                                            <ul className="space-y-2">
                                                {exp.responsibilities.map((resp) => (
                                                    <li
                                                        key={resp}
                                                        className="flex items-start gap-2 text-site-text-muted text-sm"
                                                    >
                                                        <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-1.5 shrink-0" />
                                                        {resp}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Achievements */}
                                        <div className="mb-4">
                                            <h4 className="text-site-text-muted text-xs font-semibold uppercase tracking-wider mb-2">
                                                Achievements
                                            </h4>
                                            <div className="space-y-2">
                                                {exp.achievements.map((ach) => (
                                                    <div
                                                        key={ach}
                                                        className="flex items-center gap-2 text-sm"
                                                    >
                                                        <HiOutlineCheckBadge className="w-4 h-4 text-accent-400 shrink-0" />
                                                        <span className="text-site-text-muted">{ach}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Technologies */}
                                        <div className="flex flex-wrap gap-2 pt-2 border-t border-surface-300">
                                            {exp.technologies.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-2.5 py-1 text-xs rounded-md bg-surface-200 text-site-text-muted border border-surface-300 hover:text-teal-400 hover:border-teal-500"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </PageTransition>
    );
}
