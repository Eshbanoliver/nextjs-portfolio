"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";
import { siteConfig } from "@/data/site";
import ThemeToggle from "@/components/ThemeToggle";
import Logo from "@/components/ui/Logo";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setScrolled(currentScrollY > 20);
            setLastScrollY(currentScrollY);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    return (
        <>
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{
                    y: 0,
                    opacity: 1,
                }}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "pt-3 px-4 md:px-6 lg:px-8" : "pt-4 px-4 md:px-6 lg:px-8"
                    }`}
            >
                <nav
                    className={`max-w-6xl mx-auto transition-all duration-500 ${scrolled
                        ? "bg-site-bg/70 backdrop-blur-2xl border border-surface-300 shadow-2xl shadow-black/10 rounded-2xl"
                        : "bg-transparent rounded-2xl"
                        }`}
                >
                    <div className="flex items-center justify-between h-14 md:h-16 px-4 md:px-6">
                        {/* Logo */}
                        <Link href="/" className="shrink-0">
                            <Logo />
                        </Link>

                        {/* Desktop Navigation — Centered Pill */}
                        <div className="hidden lg:flex items-center">
                            <div className="flex items-center gap-0.5 px-1.5 py-1 rounded-xl bg-surface-100/60 backdrop-blur-md border border-surface-300/50">
                                {siteConfig.nav.map((item) => {
                                    const isActive =
                                        pathname === item.href ||
                                        (item.href !== "/" && pathname.startsWith(item.href));
                                    return (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            className={`relative px-3 py-1.5 text-[13px] font-medium rounded-lg transition-all duration-300 ${isActive
                                                ? "text-teal-400"
                                                : "text-site-text-muted hover:text-site-text"
                                                }`}
                                        >
                                            <span className="relative z-10">{item.label}</span>
                                            {isActive && (
                                                <motion.div
                                                    layoutId="floating-nav-indicator"
                                                    className="absolute inset-0 bg-teal-500/10 rounded-lg border border-teal-500/20"
                                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                                />
                                            )}
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Right Side: CTA + Theme + Mobile Toggle */}
                        <div className="flex items-center gap-2.5 shrink-0">
                            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                                <Link
                                    href="/contact"
                                    className="hidden md:inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold rounded-xl bg-gradient-to-r from-teal-500 to-teal-600 text-white hover:from-teal-400 hover:to-teal-500 transition-all duration-300 shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40"
                                >
                                    Let&apos;s Talk
                                </Link>
                            </motion.div>

                            <div className="hidden md:block">
                                <ThemeToggle />
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setIsOpen(!isOpen)}
                                className="lg:hidden p-2 rounded-xl text-site-text-muted hover:text-site-text hover:bg-surface-200 transition-colors border border-transparent hover:border-surface-300"
                                aria-label="Toggle menu"
                            >
                                <AnimatePresence mode="wait" initial={false}>
                                    {isOpen ? (
                                        <motion.div
                                            key="close"
                                            initial={{ rotate: -90, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: 90, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <HiOutlineXMark className="w-5 h-5" />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="open"
                                            initial={{ rotate: 90, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: -90, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <HiOutlineBars3 className="w-5 h-5" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.button>
                        </div>
                    </div>
                </nav>
            </motion.header>

            {/* Mobile Menu — Floating Panel */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 lg:hidden"
                    >
                        <div
                            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                            onClick={() => setIsOpen(false)}
                        />
                        <motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="absolute top-20 left-4 right-4 mx-auto max-w-md bg-site-bg/95 backdrop-blur-2xl border border-surface-300 shadow-2xl shadow-black/20 rounded-2xl overflow-hidden"
                        >
                            <div className="p-4 space-y-1">
                                {siteConfig.nav.map((item, i) => {
                                    const isActive =
                                        pathname === item.href ||
                                        (item.href !== "/" && pathname.startsWith(item.href));
                                    return (
                                        <motion.div
                                            key={item.href}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.04 }}
                                        >
                                            <Link
                                                href={item.href}
                                                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${isActive
                                                    ? "bg-teal-500/10 text-teal-400 border border-teal-500/20"
                                                    : "text-site-text-muted hover:text-site-text hover:bg-surface-200"
                                                    }`}
                                            >
                                                {isActive && (
                                                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0" />
                                                )}
                                                {item.label}
                                            </Link>
                                        </motion.div>
                                    );
                                })}
                            </div>

                            <div className="p-4 pt-2 border-t border-surface-300 flex items-center gap-3">
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="flex-1"
                                >
                                    <Link
                                        href="/contact"
                                        className="block text-center px-6 py-3 rounded-xl bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold shadow-lg shadow-teal-500/20 text-sm"
                                    >
                                        Let&apos;s Talk
                                    </Link>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.45 }}
                                >
                                    <ThemeToggle />
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
