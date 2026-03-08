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
    HiOutlineChatBubbleLeftRight,
} from "react-icons/hi2";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import PageTransition from "@/components/ui/PageTransition";
import CTASection from "@/components/ui/CTASection";
import {
    siteConfig,
    stats,
    futurePlans,
    aboutHero,
    aboutStory,
    expectFromMe,
    professionalSkills
} from "@/data/site";

const iconMap: Record<string, any> = {
    HiOutlineLightBulb,
    HiOutlineEye,
    HiOutlineChatBubbleLeftRight,
    HiOutlineArrowPath,
};

export default function AboutPage() {
    return (
        <PageTransition>
            {/* Hero Section */}
            <section className="pt-48 pb-24 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col gap-12 max-w-5xl mx-auto text-center mb-20">
                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                        >
                            <div className="flex items-center justify-center gap-2 mb-8">
                                <span className="px-4 py-1.5 text-[10px] font-black tracking-[0.3em] uppercase rounded-full bg-teal-500/10 text-teal-400 border border-teal-500/20">
                                    Full Stack Intelligence
                                </span>
                                <span className="text-[10px] font-black text-site-text-muted opacity-50 uppercase tracking-[0.2em]">
                                    EST. 2020
                                </span>
                            </div>

                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-site-text mb-8 tracking-tighter leading-[0.9] font-heading">
                                {aboutHero.title.split(' — ')[0]} <br />
                                <span className="gradient-text italic">{aboutHero.title.split(' — ')[1]}</span>
                            </h1>

                            <p className="text-site-text-muted text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto mb-12 font-medium">
                                &ldquo;{aboutHero.description}&rdquo;
                            </p>

                            {/* Stats Bar */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto p-8 rounded-3xl bg-surface-100 border border-surface-300 shadow-2xl shadow-teal-500/5 backdrop-blur-sm">
                                {stats.map((stat, i) => (
                                    <div key={i} className="flex flex-col items-center">
                                        <div className="text-3xl md:text-4xl font-black text-teal-400 tracking-tighter mb-1">{stat.value}</div>
                                        <div className="text-[10px] font-black uppercase tracking-[0.1em] text-site-text-muted text-center max-w-[80px]">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    <div className="flex flex-wrap gap-5 justify-center mb-32">
                        <Button
                            href="/industries"
                            size="lg"
                            className="rounded-full px-10 py-5 bg-site-text text-site-bg border-none hover:opacity-90 transition-opacity"
                        >
                            Explore Industries
                        </Button>
                        <Button href="/toolkit" variant="outline" size="lg" className="rounded-full px-10 py-5 border-surface-400/50 hover:border-teal-400 hover:text-teal-400 transition-colors">
                            Developer Toolkit
                        </Button>
                    </div>
                </div>
            </section>

            {/* Story & Standards Cards */}
            <section className="pb-32 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main Description */}
                        <div className="lg:col-span-1">
                            <Card className="p-10 h-full border-emerald-500/20 shadow-2xl shadow-emerald-500/10 hover:shadow-emerald-500/20 transition-all duration-300" accentColor="#10b981">
                                <h2 className="text-2xl font-black text-site-text tracking-tighter mb-6">{aboutStory.title}</h2>
                                <p className="text-site-text-muted leading-relaxed font-medium">
                                    {aboutStory.description}
                                </p>
                            </Card>
                        </div>

                        {/* Expectations Cards */}
                        <div className="lg:col-span-2 space-y-8">
                            <Card className="p-10 border-indigo-500/20 shadow-2xl shadow-indigo-500/10 hover:shadow-indigo-500/20 transition-all duration-300" accentColor="#6366f1">
                                <h2 className="text-2xl font-black text-site-text tracking-tighter mb-8">What You Expect From Me?</h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    {expectFromMe.map((item, i) => (
                                        <div key={i} className="flex flex-col gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                                                <HiOutlineCheckCircle className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h3 className="text-sm font-black text-site-text uppercase tracking-wider mb-2">{item.title}</h3>
                                                <p className="text-xs text-site-text-muted leading-relaxed font-medium">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Professional Arsenal Grid */}
            <section className="py-32 bg-surface-100/30 border-y border-surface-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        label="Values"
                        title="Core Professional Skills"
                        subtitle="The architectural pillars of my engineering approach and product development standards."
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {professionalSkills.map((skill, i) => {
                            const Icon = iconMap[skill.icon];
                            const cardStyles = [
                                {
                                    colorClass: "text-blue-500",
                                    bgClass: "bg-blue-500/10",
                                    borderClass: "border-blue-500/20",
                                    shadowClass: "shadow-blue-500/10 hover:shadow-blue-500/20",
                                    accentHex: "#3b82f6",
                                },
                                {
                                    colorClass: "text-purple-500",
                                    bgClass: "bg-purple-500/10",
                                    borderClass: "border-purple-500/20",
                                    shadowClass: "shadow-purple-500/10 hover:shadow-purple-500/20",
                                    accentHex: "#a855f7",
                                },
                                {
                                    colorClass: "text-rose-500",
                                    bgClass: "bg-rose-500/10",
                                    borderClass: "border-rose-500/20",
                                    shadowClass: "shadow-rose-500/10 hover:shadow-rose-500/20",
                                    accentHex: "#f43f5e",
                                },
                                {
                                    colorClass: "text-amber-500",
                                    bgClass: "bg-amber-500/10",
                                    borderClass: "border-amber-500/20",
                                    shadowClass: "shadow-amber-500/10 hover:shadow-amber-500/20",
                                    accentHex: "#f59e0b",
                                }
                            ];
                            const style = cardStyles[i % cardStyles.length];

                            return (
                                <Card key={skill.title} delay={i * 0.05} className={`group p-10 border-surface-300/50 hover:bg-surface-200 transition-all duration-300 flex flex-col items-center text-center shadow-xl ${style.shadowClass}`} accentColor={style.accentHex}>
                                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border ${style.bgClass} ${style.borderClass} ${style.colorClass}`}>
                                        {Icon && <Icon className="w-8 h-8" />}
                                    </div>
                                    <h3 className={`text-site-text font-black text-lg tracking-tight mb-4 transition-colors group-hover:${style.colorClass}`}>
                                        {skill.title}
                                    </h3>
                                    <p className="text-site-text-muted text-sm leading-relaxed font-medium">
                                        {skill.description}
                                    </p>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Roadmap - Future Plans */}
            <section className="py-32 relative overflow-hidden bg-surface-100/30">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-transparent to-rose-500/10 opacity-30" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <SectionHeading
                                label="Vision"
                                title="The Roadmap"
                                subtitle="My trajectory for continuous professional evolution and technical mastery."
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
                                        <p className="text-site-text-muted text-lg font-medium leading-relaxed group-hover:text-site-text transition-colors">
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
                                    <h3 className="text-3xl font-black text-site-text tracking-tighter mb-6">
                                        Building for <br />
                                        <span className="text-teal-400 italic">Tomorrow.</span>
                                    </h3>
                                    <p className="text-site-text-muted text-base leading-relaxed mb-10 font-medium">
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
            <CTASection />
        </PageTransition>
    );
}
