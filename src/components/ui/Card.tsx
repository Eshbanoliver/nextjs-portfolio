"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
    className?: string;
    hover?: boolean;
    delay?: number;
    accentColor?: string;
}

export default function Card({
    children,
    className = "",
    hover = true,
    delay = 0,
    accentColor,
}: CardProps) {
    const colorStyle = accentColor
        ? {
            "--card-accent": accentColor,
            "--card-accent-10": `${accentColor}1a`,
            "--card-accent-20": `${accentColor}33`,
            "--card-accent-30": `${accentColor}4d`,
            "--card-accent-40": `${accentColor}66`,
        } as React.CSSProperties
        : {};

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={hover ? { y: -8, transition: { duration: 0.3 } } : {}}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1], delay }}
            className={`glass-card rounded-2xl p-6 glass-shimmer ${accentColor ? "vibrant-card" : ""} ${className}`}
            style={colorStyle}
        >
            {children}
        </motion.div>
    );
}
