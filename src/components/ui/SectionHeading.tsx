"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    label?: string;
    align?: "left" | "center";
}

export default function SectionHeading({
    title,
    subtitle,
    label,
    align = "center",
}: SectionHeadingProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}
        >
            {label && (
                <span className="inline-block mb-4 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] uppercase rounded-full bg-teal-500/10 text-teal-400 border border-teal-500/20">
                    {label}
                </span>
            )}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-site-text mb-4 text-balance">
                {title.split(" ").map((word, i, arr) =>
                    i >= arr.length - 2 ? (
                        <span key={i} className="gradient-text">
                            {word}{" "}
                        </span>
                    ) : (
                        <span key={i}>{word} </span>
                    )
                )}
            </h2>
            {subtitle && (
                <p className="text-surface-400 text-lg max-w-2xl mx-auto leading-relaxed">
                    {subtitle}
                </p>
            )}
        </motion.div>
    );
}
