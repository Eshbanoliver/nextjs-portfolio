"use client";

import { motion } from "framer-motion";
import {
    HiOutlineHomeModern,
    HiOutlineHeart,
    HiOutlineAcademicCap,
    HiOutlineBuildingOffice2,
    HiOutlineShoppingCart,
    HiOutlineBriefcase,
    HiOutlineStar,
    HiOutlineCalendarDays,
} from "react-icons/hi2";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import PageTransition from "@/components/ui/PageTransition";
import { industries } from "@/data/site";

const iconMap: Record<string, React.ElementType> = {
    HiOutlineHomeModern,
    HiOutlineHeart,
    HiOutlineAcademicCap,
    HiOutlineBuildingOffice2,
    HiOutlineShoppingCart,
    HiOutlineBriefcase,
    HiOutlineStar,
    HiOutlineCalendarDays,
};

const colors = [
    "teal", "accent", "navy", "teal", "accent", "navy", "teal", "accent",
];

export default function IndustriesPage() {
    return (
        <PageTransition>
            {/* Hero */}
            <section className="pt-32 pb-16 relative overflow-hidden">
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent-500/10 rounded-full blur-[128px]" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-[128px]" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        label="Industries"
                        title="Industries I've Worked With"
                        subtitle="Delivering tailored digital solutions across a wide range of business sectors and verticals"
                    />
                </div>
            </section>

            {/* Industry Cards */}
            <section className="pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {industries.map((industry, i) => {
                            const Icon = iconMap[industry.icon] || HiOutlineBriefcase;
                            const color = colors[i % colors.length];
                            const colorClasses: Record<string, { bg: string; border: string; text: string }> = {
                                teal: { bg: "bg-teal-500/10", border: "border-teal-500/20", text: "text-teal-400" },
                                accent: { bg: "bg-accent-500/10", border: "border-accent-500/20", text: "text-accent-400" },
                                navy: { bg: "bg-navy-500/10", border: "border-navy-500/20", text: "text-navy-400" },
                            };
                            const c = colorClasses[color];

                            return (
                                <Card key={industry.name} delay={i * 0.1} className="group">
                                    <div className="flex items-start gap-5">
                                        <div
                                            className={`w-14 h-14 shrink-0 rounded-xl ${c.bg} ${c.border} border flex items-center justify-center ${c.text} group-hover:scale-110 transition-transform duration-300`}
                                        >
                                            <Icon className="w-7 h-7" />
                                        </div>
                                        <div>
                                            <h3 className="text-white font-semibold text-lg mb-2 font-heading">
                                                {industry.name}
                                            </h3>
                                            <p className="text-surface-400 text-sm leading-relaxed mb-3">
                                                {industry.description}
                                            </p>
                                            <div className="flex items-start gap-2 p-3 rounded-lg bg-surface-800/30 border border-surface-700/20">
                                                <span className="text-xs font-medium text-teal-400 shrink-0 mt-0.5">
                                                    Solution:
                                                </span>
                                                <p className="text-surface-400 text-xs leading-relaxed">
                                                    {industry.solution}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>
        </PageTransition>
    );
}
