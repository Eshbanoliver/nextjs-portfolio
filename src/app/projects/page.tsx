"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
    HiOutlineArrowTopRightOnSquare,
    HiOutlineMagnifyingGlass,
} from "react-icons/hi2";
import { FaGithub } from "react-icons/fa6";
import SectionHeading from "@/components/ui/SectionHeading";
import PageTransition from "@/components/ui/PageTransition";
import CTASection from "@/components/ui/CTASection";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { projects, siteConfig } from "@/data/site";

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export default function ProjectsPage() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredProjects = projects.filter((p) => {
        const matchesCategory = activeCategory === "All" || p.category === activeCategory;
        const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <PageTransition>
            {/* Hero Section */}
            <section className="pt-32 pb-16 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        label="Portfolio"
                        title="Selected Projects"
                        subtitle="A showcase of technical expertise, creative problem-solving, and professional web development by the best Web Developer in Udaipur across diverse industries in Rajasthan."
                    />

                    {/* Filters & Search */}
                    <div className="mt-12 space-y-8">
                        {/* Search Bar */}
                        <div className="max-w-md mx-auto relative group">
                            <HiOutlineMagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 text-site-text-muted group-focus-within:text-teal-400 transition-colors w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search projects..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-surface-100 hover:bg-surface-200 focus:bg-surface-200 border border-surface-300 focus:border-teal-500/50 rounded-2xl py-3.5 pl-12 pr-4 text-site-text placeholder:text-site-text-muted transition-all outline-none"
                            />
                        </div>

                        {/* Category filter */}
                        <div className="flex flex-wrap items-center justify-center gap-2">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={`px-5 py-2.5 text-xs font-bold uppercase tracking-widest rounded-xl transition-all duration-300 ${activeCategory === category
                                        ? "bg-teal-500/10 text-teal-400 border border-teal-500/40 shadow-[0_0_20px_rgba(5,200,173,0.1)]"
                                        : "text-site-text-muted hover:text-site-text bg-transparent border border-transparent hover:border-surface-300"
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="pb-32 min-h-[400px]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatePresence mode="popLayout">
                        <motion.div
                            layout
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {filteredProjects.map((project, i) => {
                                const cardColors = ["#10b981", "#6366f1", "#f43f5e", "#f59e0b", "#a855f7", "#0ea5e9", "#14b8a6", "#ef4444", "#3b82f6", "#8b5cf6"];
                                const color = cardColors[i % cardColors.length];
                                return (
                                    <motion.div
                                        key={project.title}
                                        layout
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.4, delay: i * 0.05 }}
                                    >
                                        <Card
                                            accentColor={color}
                                            className="h-full group flex flex-col p-0 overflow-hidden bg-surface-100/50 backdrop-blur-md hover:bg-surface-100 transition-colors"
                                        >
                                            {/* Image Display */}
                                            <div className="relative h-60 overflow-hidden shrink-0 border-b border-surface-300">
                                                <Image
                                                    src={project.image}
                                                    alt={project.title}
                                                    fill
                                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-site-bg via-transparent to-transparent opacity-80" />

                                                <div className="absolute top-4 left-4 flex gap-2">
                                                    <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full text-white border backdrop-blur-md shadow-lg" style={{ backgroundColor: color, borderColor: `${color}80` }}>
                                                        {project.category}
                                                    </span>
                                                    {project.featured && (
                                                        <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full bg-accent-500 text-white border border-accent-400/20 backdrop-blur-md shadow-lg">
                                                            Featured
                                                        </span>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Project Info */}
                                            <div className="p-6 md:p-8 flex flex-col flex-grow">
                                                <h3 className="text-site-text font-black text-2xl mb-4 group-hover:text-teal-400 transition-colors leading-tight" style={{ color: color }}>
                                                    {project.title}
                                                </h3>
                                                <p className="text-site-text-muted text-sm leading-relaxed mb-8 line-clamp-4 font-medium">
                                                    {project.description}
                                                </p>

                                                <div className="flex flex-wrap gap-2 mb-10">
                                                    {project.technologies.slice(0, 5).map((tech) => (
                                                        <span
                                                            key={tech}
                                                            className="px-3 py-1 text-[10px] font-bold uppercase tracking-tighter rounded-md bg-surface-300/50 text-site-text border border-surface-300 group-hover:border-opacity-50 transition-all"
                                                            style={{ borderColor: `${color}30` }}
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>

                                                {/* Action Buttons */}
                                                <div className={`grid gap-3 mt-auto ${project.liveUrl !== "#" ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"}`}>
                                                    <Button
                                                        href={project.githubUrl === "#" ? siteConfig.socials.github : project.githubUrl}
                                                        variant="secondary"
                                                        size="sm"
                                                        external
                                                        icon={<FaGithub className="w-4 h-4" />}
                                                        className="w-full text-[10px] font-black uppercase tracking-widest border-surface-300 hover:bg-surface-200"
                                                    >
                                                        Github
                                                    </Button>
                                                    {project.liveUrl !== "#" && (
                                                        <Button
                                                            href={project.liveUrl}
                                                            variant="primary"
                                                            size="sm"
                                                            external
                                                            icon={<HiOutlineArrowTopRightOnSquare className="w-4 h-4" />}
                                                            className="w-full text-[10px] font-black uppercase tracking-widest !border-none shadow-lg"
                                                            style={{ backgroundColor: color, boxShadow: `0 10px 20px -5px ${color}40` }}
                                                        >
                                                            Live View
                                                        </Button>
                                                    )}
                                                </div>
                                            </div>
                                        </Card>
                                    </motion.div>
                                );
                            })}

                            {/* Final GitHub Open Source Card */}
                            {activeCategory === "All" && searchQuery === "" && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="h-full"
                                >
                                    <div className="h-full flex flex-col p-6 md:p-8 rounded-[2.5rem] border border-teal-500/20 bg-gradient-to-br from-teal-500/5 to-indigo-500/5 backdrop-blur-xl relative overflow-hidden group vibrant-card shadow-2xl" style={{ ["--card-accent-10" as any]: "#10b9811a", ["--card-accent-20" as any]: "#10b98133", ["--card-accent-30" as any]: "#10b9814d", ["--card-accent-40" as any]: "#10b98166", borderColor: "#10b98140", boxShadow: "0 20px 40px -15px rgba(16, 185, 129, 0.2)" }}>
                                        <div className="absolute -right-16 -top-16 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl group-hover:bg-teal-500/20 transition-all duration-700" />

                                        <div className="relative z-10 flex flex-col h-full">
                                            <div className="w-16 h-16 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 mb-8 group-hover:scale-110 transition-transform">
                                                <FaGithub className="w-8 h-8" />
                                            </div>

                                            <h3 className="text-3xl font-black text-site-text tracking-tighter mb-6 leading-tight">
                                                Exploring More <br />
                                                <span className="text-teal-400">Open Source?</span>
                                            </h3>

                                            <p className="text-site-text-muted text-lg leading-relaxed font-medium mb-10">
                                                I have delivered over 60+ successful professional projects. My GitHub repository contains experimental architectures, private-turned-public utilities, and more.
                                            </p>

                                            <div className="mt-auto">
                                                <Button
                                                    href={siteConfig.socials.github}
                                                    external
                                                    className="w-full !py-6 !rounded-2xl shadow-xl shadow-teal-500/20"
                                                    icon={<HiOutlineArrowTopRightOnSquare />}
                                                >
                                                    View All on GitHub
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </motion.div>
                    </AnimatePresence>

                    {filteredProjects.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="py-20 text-center"
                        >
                            <p className="text-site-text-muted text-xl font-medium mb-4">No projects found matching your search.</p>
                            <Button href="/projects" onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}>Reset Filters</Button>
                        </motion.div>
                    )}
                </div>
            </section>
            <CTASection />
        </PageTransition>
    );
}
