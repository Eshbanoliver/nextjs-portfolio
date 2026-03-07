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
} from "react-icons/hi2";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import PageTransition from "@/components/ui/PageTransition";
import { siteConfig, skills, stats, coreValues, workingProcess } from "@/data/site";

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
            {/* Hero */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Text */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                        >
                            <span className="inline-block mb-4 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] uppercase rounded-full bg-teal-500/10 text-teal-400 border border-teal-500/20">
                                About Me
                            </span>
                            <h1 className="text-4xl md:text-5xl font-bold text-site-text mb-6 font-heading leading-tight">
                                Hi, I&apos;m <span className="gradient-text">{siteConfig.name}</span>
                            </h1>
                            <p className="text-site-text-muted text-lg leading-relaxed mb-6">
                                {siteConfig.description}
                            </p>
                            <p className="text-site-text-muted leading-relaxed mb-8">
                                I&apos;m a passionate Frontend Web Developer specializing in HTML, CSS, JavaScript with a keen interest in React Native.
                                I believe in writing clean, maintainable code and creating UI/UX Design for Responsive and User-Friendly Websites
                                that provide AI-enhanced Digital Solutions for Modern Websites.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Button
                                    href="/Eshban_Oliver_Resume.pdf"
                                    external
                                    icon={<HiOutlineArrowDown />}
                                >
                                    Download Resume
                                </Button>
                                <Button href="/contact" variant="outline">
                                    Get In Touch
                                </Button>
                            </div>
                        </motion.div>

                        {/* Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="relative w-full max-w-md mx-auto">
                                <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-teal-500/20 to-navy-500/20 blur-xl" />
                                <div className="relative rounded-2xl overflow-hidden border border-surface-300 shadow-2xl">
                                    <Image
                                        src="/images/profile.png"
                                        alt={`${siteConfig.name} - ${siteConfig.title}`}
                                        width={500}
                                        height={600}
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                                {/* Floating Badge */}
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                                    className="absolute -bottom-4 -left-4 glass-card rounded-xl p-4 border border-teal-500/20 shadow-xl"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-400">
                                            <HiOutlineCodeBracket className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-site-text text-sm font-semibold">{stats[0].value}</p>
                                            <p className="text-site-text-muted text-xs">{stats[0].label}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Skills */}
            <section className="py-24 bg-surface-100/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        label="Skills"
                        title="Technologies & Tools"
                        subtitle="My technical toolkit spans across the full development spectrum"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {Object.entries(skills).map(([category, items], i) => (
                            <Card key={category} delay={i * 0.1}>
                                <h3 className="text-site-text font-semibold capitalize mb-4 font-heading text-lg">
                                    {category}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {items.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1.5 text-xs font-medium rounded-lg bg-surface-200 text-site-text-muted border border-surface-300 hover:border-teal-500/30 hover:text-teal-400 transition-all duration-300 cursor-default"
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

            {/* Core Values */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        label="Values"
                        title="My Core Values"
                        subtitle="Core principles that guide every project and relationship"
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {coreValues.map((value, i) => {
                            const Icon = valueIcons[i % valueIcons.length];
                            return (
                                <Card key={value.title} delay={i * 0.1} className="text-center">
                                    <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
                                        <Icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-site-text font-semibold mb-2 font-heading">
                                        {value.title}
                                    </h3>
                                    <p className="text-site-text-muted text-sm leading-relaxed">
                                        {value.description}
                                    </p>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Working Process */}
            <section className="py-24 bg-surface-100/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        label="Process"
                        title="My Working Process"
                        subtitle="A proven methodology that ensures exceptional results every time"
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {workingProcess.map((item, i) => (
                            <Card key={item.step} delay={i * 0.1} className="relative">
                                <span className="text-5xl font-bold text-surface-200 font-heading absolute top-4 right-4">
                                    {item.step}
                                </span>
                                <div className="relative">
                                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center text-white mb-4 shadow-lg shadow-teal-500/20">
                                        <HiOutlineCheckCircle className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-site-text font-semibold text-lg mb-2 font-heading">
                                        {item.title}
                                    </h3>
                                    <p className="text-site-text-muted text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </PageTransition>
    );
}
