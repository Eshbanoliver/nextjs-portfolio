"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    href?: string;
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    icon?: ReactNode;
    className?: string;
    onClick?: () => void;
    type?: "button" | "submit";
    external?: boolean;
}

const variants = {
    primary:
        "bg-gradient-to-r from-teal-500 to-teal-600 text-white hover:from-teal-400 hover:to-teal-500 shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40",
    secondary:
        "bg-surface-800 text-white hover:bg-surface-700 border border-surface-600 hover:border-surface-500",
    outline:
        "bg-transparent text-teal-400 border border-teal-500/30 hover:bg-teal-500/10 hover:border-teal-500/60",
    ghost:
        "bg-transparent text-surface-300 hover:text-white hover:bg-surface-800/50",
};

const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
};

export default function Button({
    children,
    href,
    variant = "primary",
    size = "md",
    icon,
    className = "",
    onClick,
    type = "button",
    external,
}: ButtonProps) {
    const baseClasses = `inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-300 cursor-pointer ${variants[variant]} ${sizes[size]} ${className}`;

    const content = (
        <>
            {children}
            {icon && <span className="text-lg">{icon}</span>}
        </>
    );

    if (href) {
        if (external) {
            return (
                <motion.a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={baseClasses}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    {content}
                </motion.a>
            );
        }
        return (
            <Link href={href}>
                <motion.span
                    className={baseClasses}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    {content}
                </motion.span>
            </Link>
        );
    }

    return (
        <motion.button
            type={type}
            onClick={onClick}
            className={baseClasses}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
        >
            {content}
        </motion.button>
    );
}
