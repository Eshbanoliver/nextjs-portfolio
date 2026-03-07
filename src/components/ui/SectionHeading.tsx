"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    label?: string;
    align?: "left" | "center";
    dark?: boolean;
}

export default function SectionHeading({
    title,
    subtitle,
    label,
    align = "center",
    dark = false,
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
                <span className={`inline-block mb-4 px-4 py-1.5 text-xs font-bold tracking-[0.25em] uppercase rounded-full ${dark ? "bg-teal-500/20 text-teal-400 border-teal-500/30" : "bg-teal-500/10 text-teal-400 border-teal-500/20"
                    } border`}>
                    {label}
                </span>
            )}
            <h2 className={`text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight text-balance leading-[1.1] ${dark ? "text-site-bg" : "text-site-text"
                }`}>
                {title.split(" ").map((word, i, arr) =>
                    i >= arr.length - 2 ? (
                        <span key={i} className="gradient-text transition-all duration-300">
                            {word}{" "}
                        </span>
                    ) : (
                        <span key={i}>{word} </span>
                    )
                )}
            </h2>
            {subtitle && (
                <p className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium opacity-80 ${dark ? "text-site-bg/70" : "text-site-text-muted"
                    }`}>
                    {subtitle}
                </p>
            )}
        </motion.div>
    );
}
