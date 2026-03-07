"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
    HiOutlineArrowDown,
    HiOutlineHeart,
    HiOutlineLightBulb,
    HiOutlineRocketLaunch,
    HiOutlineChatBubbleLeftRight,
    HiOutlineCodeBracket,
    HiOutlineCheckCircle,
} from "react-icons/hi2";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import PageTransition from "@/components/ui/PageTransition";
import { skills } from "@/data/site";

const values = [
    {
        icon: HiOutlineHeart,
        title: "Passion-Driven",
        description: "Every project gets my full commitment and creative energy. I genuinely care about delivering exceptional work.",
    },
    {
        icon: HiOutlineLightBulb,
        title: "Innovation First",
        description: "I stay ahead of the curve, adopting modern technologies to build future-proof solutions for every client.",
    },
    {
        icon: HiOutlineRocketLaunch,
        title: "Performance Focused",
        description: "Speed and efficiency are non-negotiable. Every application I build is optimized for peak performance.",
    },
    {
        icon: HiOutlineChatBubbleLeftRight,
        title: "Clear Communication",
        description: "Transparent, honest communication throughout every project. No surprises, just consistent progress updates.",
    },
];

const approach = [
    { step: "01", title: "Discover", description: "Deep dive into your goals, audience, and vision to create a strategic roadmap." },
    { step: "02", title: "Design", description: "Craft pixel-perfect wireframes and prototypes in Figma before writing any code." },
    { step: "03", title: "Develop", description: "Build with modern frameworks, clean architecture, and comprehensive testing." },
    { step: "04", title: "Deploy", description: "Launch with CI/CD, monitoring, and ongoing support to ensure long-term success." },
];

export default function AboutPage() {
    return (
        <PageTransition>
            {/* Hero */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute top-1/3 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-[128px]" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy-500/10 rounded-full blur-[128px]" />

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
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading leading-tight">
                                Hi, I&apos;m <span className="gradient-text">Arjun Mehta</span>
                            </h1>
                            <p className="text-surface-300 text-lg leading-relaxed mb-6">
                                A passionate Full Stack Developer with 6+ years of experience building
                                modern web applications, e-commerce platforms, and enterprise solutions.
                                I specialize in React, Next.js, and Node.js ecosystems.
                            </p>
                            <p className="text-surface-400 leading-relaxed mb-8">
                                My journey began with a fascination for how technology can solve real-world
                                problems. Over the years, I&apos;ve had the privilege of working with startups,
                                agencies, and enterprise teams — shipping products used by thousands of people
                                daily. I believe great software is built at the intersection of clean code,
                                thoughtful design, and deep empathy for users.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Button
                                    href="/Arjun_Mehta_Resume.pdf"
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
                                <div className="relative rounded-2xl overflow-hidden border border-surface-700/30 shadow-2xl">
                                    <Image
                                        src="/images/profile.png"
                                        alt="Arjun Mehta - Full Stack Developer"
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
                                    className="absolute -bottom-4 -left-4 glass-card rounded-xl p-4 border border-teal-500/20"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-400">
                                            <HiOutlineCodeBracket className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-white text-sm font-semibold">120+</p>
                                            <p className="text-surface-400 text-xs">Projects Delivered</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Skills */}
            <section className="py-24 bg-surface-900/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        label="Skills"
                        title="Technologies & Tools"
                        subtitle="My technical toolkit spans across the full development spectrum"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {Object.entries(skills).map(([category, items], i) => (
                            <Card key={category} delay={i * 0.1}>
                                <h3 className="text-white font-semibold capitalize mb-4 font-heading text-lg">
                                    {category}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {items.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1.5 text-xs font-medium rounded-lg bg-surface-800/50 text-surface-300 border border-surface-700/30 hover:border-teal-500/30 hover:text-teal-400 transition-all duration-300 cursor-default"
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
                        title="What Drives Me"
                        subtitle="Core principles that guide every project and relationship"
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, i) => (
                            <Card key={value.title} delay={i * 0.1} className="text-center">
                                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
                                    <value.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-white font-semibold mb-2 font-heading">
                                    {value.title}
                                </h3>
                                <p className="text-surface-400 text-sm leading-relaxed">
                                    {value.description}
                                </p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Working Approach */}
            <section className="py-24 bg-surface-900/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        label="Process"
                        title="My Working Approach"
                        subtitle="A proven methodology that ensures exceptional results every time"
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {approach.map((item, i) => (
                            <Card key={item.step} delay={i * 0.1} className="relative">
                                <span className="text-5xl font-bold text-surface-800/50 font-heading absolute top-4 right-4">
                                    {item.step}
                                </span>
                                <div className="relative">
                                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center text-white mb-4">
                                        <HiOutlineCheckCircle className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-white font-semibold text-lg mb-2 font-heading">
                                        {item.title}
                                    </h3>
                                    <p className="text-surface-400 text-sm leading-relaxed">
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
