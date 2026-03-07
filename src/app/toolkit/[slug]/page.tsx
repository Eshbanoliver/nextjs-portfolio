"use client";

import { notFound } from "next/navigation";
import { use } from "react";
import { motion } from "framer-motion";
import {
    HiOutlineCheckCircle,
    HiOutlineArrowRight,
    HiOutlineCog6Tooth,
    HiOutlineCpuChip,
    HiOutlineUserGroup,
    HiOutlineSparkles,
} from "react-icons/hi2";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import PageTransition from "@/components/ui/PageTransition";
import { toolkitServices } from "@/data/site";

export default function ToolkitDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = use(params);
    const service = toolkitServices.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    return (
        <PageTransition>
            {/* Hero */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute top-1/4 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-[128px]" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500/10 rounded-full blur-[128px]" />

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block mb-4 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] uppercase rounded-full bg-teal-500/10 text-teal-400 border border-teal-500/20">
                            Service
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading leading-tight">
                            {service.title}
                        </h1>
                        <p className="text-surface-400 text-lg max-w-3xl mx-auto leading-relaxed">
                            {service.heroDesc}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Features */}
            <section className="py-24 bg-surface-900/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        label="Features"
                        title="What This Service Includes"
                        subtitle="A comprehensive set of features designed to deliver exceptional results"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {service.features.map((feature, i) => (
                            <Card key={feature} delay={i * 0.08} className="flex items-start gap-4">
                                <div className="w-8 h-8 shrink-0 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
                                    <HiOutlineCheckCircle className="w-5 h-5" />
                                </div>
                                <p className="text-surface-300 text-sm leading-relaxed">{feature}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Who Is This For + Benefits */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Target Audience */}
                        <Card delay={0.1} className="p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-lg bg-accent-500/10 border border-accent-500/20 flex items-center justify-center text-accent-400">
                                    <HiOutlineUserGroup className="w-5 h-5" />
                                </div>
                                <h3 className="text-white font-semibold text-xl font-heading">
                                    Who Is This For?
                                </h3>
                            </div>
                            <p className="text-surface-400 leading-relaxed">
                                {service.targetAudience}
                            </p>
                        </Card>

                        {/* Benefits */}
                        <Card delay={0.2} className="p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
                                    <HiOutlineSparkles className="w-5 h-5" />
                                </div>
                                <h3 className="text-white font-semibold text-xl font-heading">
                                    Key Benefits
                                </h3>
                            </div>
                            <ul className="space-y-3">
                                {service.benefits.map((benefit) => (
                                    <li key={benefit} className="flex items-start gap-3 text-surface-400 text-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-1.5 shrink-0" />
                                        {benefit}
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Development Process */}
            <section className="py-24 bg-surface-900/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        label="Process"
                        title="Development Workflow"
                        subtitle="A proven step-by-step process to ensure your project is delivered on time and on budget"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {service.process.map((step, i) => (
                            <Card key={step} delay={i * 0.1} className="relative">
                                <span className="absolute top-4 right-4 text-4xl font-bold text-surface-800/40 font-heading">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <div className="relative">
                                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-500/20 to-navy-500/20 border border-teal-500/20 flex items-center justify-center text-teal-400 mb-4">
                                        <HiOutlineCog6Tooth className="w-5 h-5" />
                                    </div>
                                    <p className="text-surface-300 text-sm leading-relaxed">{step}</p>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technologies */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        label="Tech Stack"
                        title="Technologies Used"
                        subtitle="Industry-leading tools and frameworks for building robust solutions"
                    />
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        {service.technologies.map((tech, i) => (
                            <motion.div
                                key={tech}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="px-6 py-3 rounded-xl bg-surface-800/50 border border-surface-700/30 text-surface-300 font-medium hover:border-teal-500/30 hover:text-teal-400 transition-all duration-300"
                            >
                                <div className="flex items-center gap-2">
                                    <HiOutlineCpuChip className="w-4 h-4" />
                                    {tech}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-24 bg-surface-900/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        label="Examples"
                        title="Example Use Cases"
                        subtitle="Real-world scenarios where this service delivers exceptional value"
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
                        {service.useCases.map((useCase, i) => (
                            <Card key={useCase} delay={i * 0.1} className="flex items-center gap-4">
                                <div className="w-8 h-8 shrink-0 rounded-lg bg-accent-500/10 border border-accent-500/20 flex items-center justify-center text-accent-400">
                                    <HiOutlineCheckCircle className="w-5 h-5" />
                                </div>
                                <p className="text-surface-300 text-sm">{useCase}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
                            Ready to Get Started?
                        </h2>
                        <p className="text-surface-400 text-lg mb-8 leading-relaxed">
                            Let&apos;s discuss how {service.title.toLowerCase()} can help your
                            business grow. Get in touch for a free consultation.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button href="/contact" size="lg" icon={<HiOutlineArrowRight />}>
                                Start a Project
                            </Button>
                            <Button href="/toolkit" variant="secondary" size="lg">
                                View All Services
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </PageTransition>
    );
}
