"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
    HiOutlineArrowTopRightOnSquare,
} from "react-icons/hi2";
import { FaGithub } from "react-icons/fa6";
import SectionHeading from "@/components/ui/SectionHeading";
import PageTransition from "@/components/ui/PageTransition";
import Button from "@/components/ui/Button";
import { projects, siteConfig } from "@/data/site";

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export default function ProjectsPage() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects =
        activeCategory === "All"
            ? projects
            : projects.filter((p) => p.category === activeCategory);

    return (
        <PageTransition>
            {/* Hero */}
            <section className="pt-32 pb-16 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        label="Portfolio"
                        title="Featured Projects"
                        subtitle="A curated collection of projects that showcase my expertise across industries and technologies"
                    />

                    {/* Category Filter */}
                    <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-5 py-2 text-sm font-medium rounded-xl transition-all duration-300 cursor-pointer ${activeCategory === category
                                    ? "bg-teal-500/20 text-teal-400 border border-teal-500/30"
                                    : "bg-surface-200 text-site-text-muted border border-surface-300 hover:text-teal-400 hover:border-teal-500"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCategory}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {filteredProjects.map((project, i) => (
                                <motion.div
                                    key={project.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="glass-card rounded-2xl overflow-hidden group flex flex-col h-full"
                                >
                                    {/* Image */}
                                    <div className="relative h-52 overflow-hidden shrink-0">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-site-bg via-transparent to-transparent opacity-60" />

                                        {/* Category Badge */}
                                        <span className="absolute top-4 left-4 px-3 py-1 text-xs font-medium rounded-full bg-teal-500/20 text-teal-400 border border-teal-500/20 backdrop-blur-sm">
                                            {project.category}
                                        </span>

                                        {project.featured && (
                                            <span className="absolute top-4 right-4 px-3 py-1 text-xs font-medium rounded-full bg-accent-500/20 text-accent-400 border border-accent-500/20 backdrop-blur-sm">
                                                Featured
                                            </span>
                                        )}
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex flex-col flex-grow">
                                        <h3 className="text-site-text font-semibold text-lg mb-2 font-heading group-hover:text-teal-400 transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-site-text-muted text-sm leading-relaxed mb-6 line-clamp-3">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mb-8">
                                            {project.technologies.slice(0, 4).map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-2.5 py-1 text-xs rounded-md bg-surface-200 text-site-text-muted border border-surface-300"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Actions */}
                                        <div className="grid grid-cols-2 gap-3 mt-auto">
                                            <Button
                                                href={project.githubUrl === "#" ? siteConfig.socials.github : project.githubUrl}
                                                variant="secondary"
                                                size="sm"
                                                external
                                                icon={<FaGithub className="w-4 h-4" />}
                                                className="w-full text-xs"
                                            >
                                                View on GitHub
                                            </Button>
                                            <Button
                                                href={project.liveUrl}
                                                variant="primary"
                                                size="sm"
                                                external
                                                icon={<HiOutlineArrowTopRightOnSquare className="w-4 h-4" />}
                                                className="w-full text-xs"
                                            >
                                                Live Preview
                                            </Button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>
        </PageTransition>
    );
}
