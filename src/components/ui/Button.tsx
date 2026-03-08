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
    style?: React.CSSProperties;
}

const variants = {
    primary:
        "bg-gradient-to-r from-teal-500 to-teal-400 text-white hover:brightness-110 shadow-[0_0_20px_rgba(5,200,173,0.2)] hover:shadow-[0_0_30px_rgba(5,200,173,0.4)]",
    secondary:
        "bg-surface-100 text-site-text hover:bg-surface-200 border border-surface-300 hover:border-teal-500/40 shadow-sm",
    outline:
        "bg-transparent text-teal-400 border border-teal-500/30 hover:bg-teal-500/5 hover:border-teal-500/60 shadow-sm",
    ghost:
        "bg-transparent text-site-text-muted hover:text-site-text hover:bg-surface-200",
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
    style = {},
}: ButtonProps) {
    const baseClasses = `inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-300 cursor-pointer ${variants[variant]} ${sizes[size]} ${className}`;

    const finalStyle = {
        ...style,
        ...(style.backgroundColor ? { backgroundImage: "none" } : {}),
    };

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
                    style={finalStyle}
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
                    style={finalStyle}
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
            style={finalStyle}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
        >
            {content}
        </motion.button>
    );
}
