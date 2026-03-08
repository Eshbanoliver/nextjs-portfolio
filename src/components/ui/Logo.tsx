"use client";

import { motion } from "framer-motion";

interface LogoProps {
    className?: string;
    showText?: boolean;
    size?: number;
}

export default function Logo({ className = "", showText = true, size = 40 }: LogoProps) {
    return (
        <div className={`flex items-center gap-3 ${className}`}>
            {/* Premium SVG Icon */}
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative flex items-center justify-center"
                style={{ width: size, height: size }}
            >
                <svg
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full drop-shadow-[0_0_8px_rgba(45,212,191,0.3)]"
                >
                    {/* Background Shape - Subtle Glassy Circle */}
                    <circle
                        cx="50"
                        cy="50"
                        r="48"
                        className="fill-surface-200/20 stroke-surface-300/30"
                        strokeWidth="1"
                    />

                    {/* Abstract Tech Grid Pattern (Very Subtle) */}
                    <path
                        d="M30 20V80M50 20V80M70 20V80M20 30H80M20 50H80M20 70H80"
                        stroke="currentColor"
                        strokeWidth="0.5"
                        strokeOpacity="0.1"
                    />

                    {/* The "EO" Monogram Symbol */}
                    <defs>
                        <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#2dd4bf" /> {/* Teal 400 */}
                            <stop offset="100%" stopColor="#6366f1" /> {/* Indigo 500 */}
                        </linearGradient>

                        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur stdDeviation="3" result="blur" />
                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                    </defs>

                    {/* Main "E" Path - Stylized as code brackets/bars */}
                    <motion.path
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        d="M35 30H65M35 50H55M35 70H65"
                        stroke="url(#logo-gradient)"
                        strokeWidth="8"
                        strokeLinecap="round"
                    />

                    {/* Main "O" Path - Stylized with a digital break */}
                    <motion.path
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
                        d="M50 15C69.33 15 85 30.67 85 50C85 69.33 69.33 85 50 85C30.67 85 15 69.33 15 50"
                        stroke="url(#logo-gradient)"
                        strokeWidth="8"
                        strokeLinecap="round"
                    />

                    {/* Tech Detail - Dot at the end of O */}
                    <motion.circle
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1.4, type: "spring" }}
                        cx="15"
                        cy="50"
                        r="4"
                        fill="#2dd4bf"
                    />
                </svg>

                {/* Ambient Glow behind */}
                <div className="absolute inset-0 bg-teal-500/20 blur-xl rounded-full -z-10 animate-pulse-slow" />
            </motion.div>

            {/* Wordmark */}
            {showText && (
                <div className="flex flex-col leading-none">
                    <span className="text-xl font-bold tracking-tight text-site-text font-heading">
                        ESHBAN<span className="text-teal-400">OLIVER</span>
                    </span>
                    <span className="text-[10px] font-medium tracking-[0.2em] text-site-text-muted uppercase">
                        Digital Solutionist
                    </span>
                </div>
            )}
        </div>
    );
}
