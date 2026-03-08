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
import CTASection from "@/components/ui/CTASection";
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
            {/* Hero Section */}
            <section className="pt-48 pb-24 relative overflow-hidden">
                <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[128px] animate-pulse-slow" />
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-rose-500/10 rounded-full blur-[96px]" />

                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/5 border border-teal-500/10 text-teal-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-ping" />
                            Technical Vertical
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-site-text mb-8 tracking-tighter leading-[0.9] !bg-clip-text">
                            {service.title}
                        </h1>
                        <p className="text-site-text-muted text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-medium">
                            {service.heroDesc}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Core Capabilities - Features */}
            <section className="py-32 relative border-y border-surface-300/50 bg-surface-100/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        label="Capabilities"
                        title="Technical Scope"
                        subtitle="A deep dive into the specific engineering features and architectural patterns implemented in this vertical."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {service.features.map((feature, i) => (
                            <Card key={feature} delay={i * 0.05} className="group p-8 border-surface-300/50 hover:bg-surface-100 transition-all">
                                <div className="flex items-start gap-5">
                                    <div className="w-10 h-10 shrink-0 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 group-hover:scale-110 transition-transform shadow-lg shadow-teal-500/5">
                                        <HiOutlineCheckCircle className="w-6 h-6" />
                                    </div>
                                    <p className="text-site-text font-bold text-base leading-snug tracking-tight">{feature}</p>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Strategy & Outcomes */}
            <section className="py-32 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Target Audience */}
                        <Card delay={0.1} className="p-10 border-surface-300/50 group bg-surface-100/50">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-14 h-14 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 shadow-xl shadow-rose-500/5 group-hover:rotate-6 transition-transform">
                                    <HiOutlineUserGroup className="w-8 h-8" />
                                </div>
                                <h3 className="text-3xl font-black text-site-text tracking-tighter">
                                    Strategic Fit
                                </h3>
                            </div>
                            <p className="text-site-text-muted text-lg leading-relaxed font-medium">
                                {service.targetAudience}
                            </p>
                        </Card>

                        {/* Benefits */}
                        <Card delay={0.2} className="p-10 border-surface-300/50 group bg-teal-500/5">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-14 h-14 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 shadow-xl shadow-teal-500/5 group-hover:-rotate-6 transition-transform">
                                    <HiOutlineSparkles className="w-8 h-8" />
                                </div>
                                <h3 className="text-3xl font-black text-site-text tracking-tighter">
                                    KPI Impact
                                </h3>
                            </div>
                            <ul className="space-y-4">
                                {service.benefits.map((benefit) => (
                                    <li key={benefit} className="flex items-start gap-4 text-site-text-muted font-bold text-base">
                                        <span className="w-2 h-2 rounded-full bg-teal-400 mt-2 shrink-0 shadow-[0_0_8px_rgba(5,200,173,0.5)]" />
                                        {benefit}
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </div>
                </div>
            </section>

            {/* The Forge - Process */}
            <section className="py-32 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        label="The Forge"
                        title="Engineering Pipeline"
                        subtitle="A systematic, battle-tested workflow to ensure rapid development without compromising structural integrity."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {service.process.map((step, i) => (
                            <Card key={step} delay={i * 0.1} className="relative p-10 hover:bg-surface-100 transition-all group overflow-hidden border-surface-300/50">
                                <span className="absolute -right-4 -bottom-8 text-[10rem] font-black text-site-text opacity-[0.03] select-none group-hover:opacity-[0.06] transition-opacity">
                                    0{i + 1}
                                </span>
                                <div className="relative z-10">
                                    <div className="w-12 h-12 rounded-xl bg-site-text text-site-bg flex items-center justify-center mb-6 shadow-xl">
                                        <HiOutlineCog6Tooth className="w-6 h-6 animate-spin-slow" />
                                    </div>
                                    <p className="text-site-text font-black text-lg leading-tight tracking-tight mb-4">{step}</p>
                                    <div className="w-8 h-1 bg-teal-500/30 rounded-full" />
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Ecosystem - Technologies */}
            <section className="py-32 border-y border-surface-300/50 bg-teal-500/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <SectionHeading
                        label="Ecosystem"
                        title="The Tech Stack"
                        subtitle="Leveraging the latest production-grade frameworks and cloud infrastructure."
                    />
                    <div className="flex flex-wrap items-center justify-center gap-6">
                        {service.technologies.map((tech, i) => (
                            <motion.div
                                key={tech}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="px-8 py-4 rounded-2xl bg-site-bg border border-surface-300 text-site-text font-black text-xs uppercase tracking-widest hover:border-teal-500/50 hover:-translate-y-1 transition-all shadow-xl shadow-teal-500/5"
                            >
                                <div className="flex items-center gap-3">
                                    <HiOutlineCpuChip className="w-5 h-5 text-teal-400" />
                                    {tech}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industrial Scenarios - Use Cases */}
            <section className="py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        label="Scenarios"
                        title="Production Use Cases"
                        subtitle="Applied engineering for real-world industrial and commercial challenges."
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {service.useCases.map((useCase, i) => (
                            <Card key={useCase} delay={i * 0.1} className="flex items-center gap-6 p-8 border-surface-300/30 group hover:border-teal-500/20">
                                <div className="w-12 h-12 shrink-0 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 group-hover:scale-110 transition-transform shadow-inner">
                                    <HiOutlineCheckCircle className="w-6 h-6" />
                                </div>
                                <p className="text-site-text font-bold text-lg tracking-tight">{useCase}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom Final CTA */}
            <section className="py-32 relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-5xl md:text-7xl font-black text-site-text tracking-tighter mb-8 leading-[0.9]">
                            Scale Your <br />
                            <span className="text-teal-400">Digital Engine.</span>
                        </h2>
                        <p className="text-site-text-muted text-xl md:text-2xl mb-12 font-medium leading-relaxed">
                            Ready to implement this technical vertical for your specific project? Let&apos;s map out the architecture today.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Button href="/contact" size="lg" className="px-12 py-6 rounded-full bg-teal-500 text-site-bg border-none shadow-2xl shadow-teal-500/30">
                                Initialize Project
                            </Button>
                            <Button href="/toolkit" variant="secondary" size="lg" className="rounded-full px-12 py-6 border-surface-400/50">
                                Back to Toolkit
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>
            <CTASection />
        </PageTransition>
    );
}
