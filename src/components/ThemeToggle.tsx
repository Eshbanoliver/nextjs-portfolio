"use client";

import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi2";
import { useTheme } from "@/components/ThemeProvider";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl bg-surface-800/50 border border-surface-700/30 text-surface-400 hover:text-teal-400 hover:border-teal-500/30 transition-all duration-300"
            aria-label="Toggle theme"
        >
            <AnimatePresence mode="wait">
                <motion.div
                    key={theme}
                    initial={{ opacity: 0, rotate: -30, scale: 0.8 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 30, scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center justify-center h-5 w-5"
                >
                    {theme === "dark" ? (
                        <HiOutlineMoon className="w-5 h-5 text-teal-400" />
                    ) : (
                        <HiOutlineSun className="w-5 h-5 text-yellow-500" />
                    )}
                </motion.div>
            </AnimatePresence>
        </button>
    );
}
