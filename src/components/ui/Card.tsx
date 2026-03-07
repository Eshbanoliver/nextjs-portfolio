"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
    className?: string;
    hover?: boolean;
    delay?: number;
}

export default function Card({
    children,
    className = "",
    hover = true,
    delay = 0,
}: CardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, delay }}
            className={`glass-card rounded-2xl p-6 ${hover ? "" : "hover:transform-none"} ${className}`}
        >
            {children}
        </motion.div>
    );
}
