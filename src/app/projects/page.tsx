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
                        subtitle="A showcase of technical expertise, creative problem-solving, and professional web development across diverse industries."
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
                            {filteredProjects.map((project, i) => (
                                <motion.div
                                    key={project.title}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4, delay: i * 0.05 }}
                                >
                                    <Card className="h-full group flex flex-col p-0 overflow-hidden bg-surface-100/50 backdrop-blur-md hover:bg-surface-100 transition-colors">
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
                                                <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full bg-teal-500 text-white border border-teal-400/20 backdrop-blur-md shadow-lg">
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
                                        <div className="p-8 flex flex-col flex-grow">
                                            <h3 className="text-site-text font-black text-2xl mb-4 group-hover:text-teal-400 transition-colors leading-tight">
                                                {project.title}
                                            </h3>
                                            <p className="text-site-text-muted text-sm leading-relaxed mb-8 line-clamp-4 font-medium">
                                                {project.description}
                                            </p>

                                            <div className="flex flex-wrap gap-2 mb-10">
                                                {project.technologies.slice(0, 5).map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="px-3 py-1 text-[10px] font-bold uppercase tracking-tighter rounded-md bg-surface-300/50 text-site-text border border-surface-300"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Action Buttons */}
                                            <div className="grid grid-cols-2 gap-4 mt-auto">
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
                                                <Button
                                                    href={project.liveUrl}
                                                    variant="primary"
                                                    size="sm"
                                                    external
                                                    icon={<HiOutlineArrowTopRightOnSquare className="w-4 h-4" />}
                                                    className="w-full text-[10px] font-black uppercase tracking-widest"
                                                >
                                                    Live View
                                                </Button>
                                            </div>
                                        </div>
                                    </Card>
                                </motion.div>
                            ))}
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
