"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    HiOutlineGlobeAlt,
    HiOutlineShoppingBag,
    HiOutlineComputerDesktop,
    HiOutlineDevicePhoneMobile,
    HiOutlineDeviceTablet,
    HiOutlineRocketLaunch,
    HiOutlineServerStack,
    HiOutlineArrowRight,
} from "react-icons/hi2";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import PageTransition from "@/components/ui/PageTransition";
import { toolkitServices } from "@/data/site";

const iconMap: Record<string, React.ElementType> = {
    HiOutlineGlobeAlt,
    HiOutlineShoppingBag,
    HiOutlineComputerDesktop,
    HiOutlineDevicePhoneMobile,
    HiOutlineDeviceTablet,
    HiOutlineRocketLaunch,
    HiOutlineServerStack,
};

const colorMap: Record<string, { bg: string; border: string; text: string; hover: string }> = {
    teal: {
        bg: "bg-teal-500/10",
        border: "border-teal-500/20",
        text: "text-teal-400",
        hover: "group-hover:bg-teal-500/20",
    },
    accent: {
        bg: "bg-accent-500/10",
        border: "border-accent-500/20",
        text: "text-accent-400",
        hover: "group-hover:bg-accent-500/20",
    },
    navy: {
        bg: "bg-navy-500/10",
        border: "border-navy-500/20",
        text: "text-navy-400",
        hover: "group-hover:bg-navy-500/20",
    },
};

export default function ToolkitPage() {
    return (
        <PageTransition>
            {/* Hero */}
            <section className="pt-32 pb-16 relative overflow-hidden">
                <div className="absolute top-1/4 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-[128px]" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500/10 rounded-full blur-[128px]" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        label="Services"
                        title="Developer Toolkit"
                        subtitle="Comprehensive digital solutions designed to help your business thrive in the modern digital landscape"
                    />
                </div>
            </section>

            {/* Service Cards */}
            <section className="pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {toolkitServices.map((service, i) => {
                            const Icon = iconMap[service.icon] || HiOutlineGlobeAlt;
                            const c = colorMap[service.color] || colorMap.teal;

                            return (
                                <Card key={service.slug} delay={i * 0.1} className="group flex flex-col">
                                    <div
                                        className={`w-14 h-14 mb-5 rounded-xl ${c.bg} ${c.border} border flex items-center justify-center ${c.text} ${c.hover} transition-all duration-300`}
                                    >
                                        <Icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-white font-semibold text-lg mb-3 font-heading">
                                        {service.title}
                                    </h3>
                                    <p className="text-surface-400 text-sm leading-relaxed mb-6 flex-grow">
                                        {service.shortDesc}
                                    </p>
                                    <Link
                                        href={`/toolkit/${service.slug}`}
                                        className={`inline-flex items-center gap-2 ${c.text} text-sm font-medium hover:gap-3 transition-all duration-300`}
                                    >
                                        Learn More <HiOutlineArrowRight className="w-4 h-4" />
                                    </Link>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-surface-900/30">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
                            Not Sure What You Need?
                        </h2>
                        <p className="text-surface-400 text-lg mb-8 leading-relaxed">
                            Let&apos;s have a conversation about your goals and find the perfect
                            solution for your business.
                        </p>
                        <Button href="/contact" size="lg" icon={<HiOutlineArrowRight />}>
                            Start a Conversation
                        </Button>
                    </motion.div>
                </div>
            </section>
        </PageTransition>
    );
}
