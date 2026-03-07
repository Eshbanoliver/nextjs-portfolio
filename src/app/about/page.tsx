"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
    HiOutlineArrowDown,
    HiOutlineHeart,
    HiOutlineLightBulb,
    HiOutlineCodeBracket,
    HiOutlineCheckCircle,
    HiOutlineEye,
    HiOutlineArrowPath,
    HiOutlineShieldCheck,
    HiOutlineRocketLaunch,
    HiOutlineSparkles,
    HiOutlineArrowRight,
} from "react-icons/hi2";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import PageTransition from "@/components/ui/PageTransition";
import { siteConfig, skills, stats, coreValues, workingProcess, futurePlans, mission } from "@/data/site";

const valueIcons = [
    HiOutlineHeart,
    HiOutlineCodeBracket,
    HiOutlineLightBulb,
    HiOutlineShieldCheck,
    HiOutlineEye,
    HiOutlineArrowPath,
];

export default function AboutPage() {
    return (
        <PageTransition>
            {/* Hero Section */}
            <section className="pt-48 pb-24 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                        >
                            <div className="flex items-center gap-2 mb-6">
                                <span className="px-4 py-1.5 text-[10px] font-black tracking-[0.3em] uppercase rounded-full bg-teal-500/10 text-teal-400 border border-teal-500/20">
                                    The Architect
                                </span>
                                <span className="text-[10px] font-black text-site-text-muted opacity-50 uppercase tracking-[0.2em]">
                                    EST. 2020
                                </span>
                            </div>

                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-site-text mb-8 tracking-tighter leading-[0.85] font-heading">
                                Meet Eshban <br />
                                <span className="gradient-text italic">Oliver.</span>
                            </h1>

                            <p className="text-site-text-muted text-xl md:text-2xl leading-relaxed mb-8 font-medium italic underline decoration-teal-500/20 underline-offset-8">
                                &ldquo;Passionate Front-end Developer 💻 and React Native Specialist 📱 based in Udaipur, Rajasthan.&rdquo;
                            </p>

                            <div className="p-8 rounded-3xl bg-surface-100 border border-surface-300 relative overflow-hidden group mb-10 shadow-2xl shadow-teal-500/5">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                                <div className="relative z-10">
                                    <h2 className="text-xs font-black text-teal-400 uppercase tracking-[0.2em] mb-4">Strategic Mission</h2>
                                    <p className="text-site-text-muted leading-relaxed text-lg font-medium">
                                        {mission}
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-5">
                                <Button
                                    href="/Eshban_Oliver_Resume.pdf"
                                    external
                                    size="lg"
                                    className="rounded-full px-10 py-5 bg-site-text text-site-bg border-none"
                                >
                                    Download Dossier
                                </Button>
                                <Button href="/contact" variant="outline" size="lg" className="rounded-full px-10 py-5 border-surface-400/50">
                                    Start Collaboration
                                </Button>
                            </div>
                        </motion.div>

                        {/* Image Showcase */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
                            className="relative"
                        >
                            <div className="relative w-full max-w-lg mx-auto aspect-[4/5] bg-surface-100 rounded-[3rem] border border-surface-300 shadow-2xl p-4 overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-t from-site-bg via-transparent to-transparent z-10 opacity-60" />
                                <Image
                                    src="https://eshban.netlify.app/assets/img/hero/hero-img.png"
                                    alt={siteConfig.name}
                                    fill
                                    className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                                />

                                {/* Experience Overlay Badge */}
                                <div className="absolute bottom-10 left-10 z-20">
                                    <div className="glass-card p-6 border border-teal-500/30 backdrop-blur-2xl rounded-2xl shadow-2xl flex items-center gap-5">
                                        <div className="text-4xl font-black text-teal-400 tracking-tighter">60+</div>
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white opacity-50">Projects</p>
                                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Delivered</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Arsenal Grid */}
            <section className="py-32 bg-surface-100/30 border-y border-surface-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        label="Arsenal"
                        title="Technical Capability"
                        subtitle="A curated stack of production-grade technologies, frameworks, and engineering tools."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {Object.entries(skills).map(([category, items], i) => (
                            <Card key={category} delay={i * 0.05} className="group p-8 border-surface-300/50 hover:bg-surface-200 transition-all">
                                <h3 className="text-teal-400 font-black text-xs uppercase tracking-[0.3em] mb-6">
                                    {category}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {items.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest rounded-md bg-surface-300 text-site-text border border-surface-400/30 hover:border-teal-400 transition-colors"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Roadmap - Future Plans */}
            <section className="py-32 relative overflow-hidden bg-site-text text-site-bg">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-transparent to-rose-500/10 opacity-30" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <SectionHeading
                                label="Vision"
                                title="The Roadmap"
                                subtitle="My trajectory for continuous professional evolution and technical mastery."
                                dark
                            />
                            <div className="space-y-6 mt-12">
                                {futurePlans.map((plan, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-start gap-6 group"
                                    >
                                        <div className="w-10 h-10 shrink-0 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 group-hover:bg-teal-500 group-hover:text-site-text transition-all">
                                            <HiOutlineRocketLaunch className="w-5 h-5" />
                                        </div>
                                        <p className="text-site-bg/60 text-lg font-medium leading-relaxed group-hover:text-site-bg/90 transition-colors">
                                            {plan}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <Card className="p-12 border-teal-500/30 bg-teal-500/5 backdrop-blur-3xl overflow-hidden group">
                                <HiOutlineSparkles className="absolute -top-10 -right-10 text-[15rem] text-teal-400 opacity-[0.05] group-hover:scale-125 transition-transform duration-1000" />
                                <div className="relative z-10">
                                    <h3 className="text-3xl font-black text-site-bg tracking-tighter mb-6">
                                        Building for <br />
                                        <span className="text-teal-400 italic">Tomorrow.</span>
                                    </h3>
                                    <p className="text-site-bg/50 text-base leading-relaxed mb-10 font-medium">
                                        I am constantly exploring the boundaries of web engineering, currently focused on deep integration of AI with React environments.
                                    </p>
                                    <a href="/contact" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.3em] text-teal-400 hover:text-white transition-colors">
                                        GET INVOLVED <HiOutlineArrowRight className="w-4 h-4 ml-2" />
                                    </a>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final Methodology List */}
            <section className="py-32 border-t border-surface-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        label="Execution"
                        title="Production Workflow"
                        subtitle="A systematic, battle-tested approach to digital engineering and deployment."
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                        {workingProcess.map((item, i) => (
                            <div key={i} className="flex gap-6 group">
                                <div className="text-4xl font-black text-teal-400/20 group-hover:text-teal-400 transition-colors">
                                    {item.step}
                                </div>
                                <div>
                                    <h4 className="text-xl font-black text-site-text mb-2 tracking-tight">{item.title}</h4>
                                    <p className="text-site-text-muted text-sm font-medium leading-relaxed">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </PageTransition>
    );
}
