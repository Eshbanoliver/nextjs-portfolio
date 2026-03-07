"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    HiOutlineEnvelope,
    HiOutlineMapPin,
    HiOutlinePhone,
} from "react-icons/hi2";
import { FaGithub, FaLinkedinIn, FaXTwitter, FaDribbble } from "react-icons/fa6";
import { siteConfig } from "@/data/site";

const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Experience", href: "/experience" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
];

const serviceLinks = [
    { label: "Informational Websites", href: "/toolkit/informational-websites" },
    { label: "E-commerce Websites", href: "/toolkit/ecommerce-websites" },
    { label: "Web Applications", href: "/toolkit/web-apps" },
    { label: "Mobile Applications", href: "/toolkit/mobile-apps" },
    { label: "Enterprise Solutions", href: "/toolkit/enterprise-solutions" },
];

const socials = [
    { icon: FaGithub, href: siteConfig.socials.github, label: "GitHub" },
    { icon: FaLinkedinIn, href: siteConfig.socials.linkedin, label: "LinkedIn" },
    { icon: FaXTwitter, href: siteConfig.socials.twitter, label: "Twitter" },
    { icon: FaDribbble, href: siteConfig.socials.dribbble, label: "Dribbble" },
];

export default function Footer() {
    return (
        <footer className="relative border-t border-surface-800/50 bg-surface-950">
            {/* Top Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white font-bold text-sm font-heading shadow-lg shadow-teal-500/20">
                                AM
                            </div>
                            <span className="text-lg font-bold text-white font-heading">
                                Arjun<span className="text-teal-400">.</span>dev
                            </span>
                        </Link>
                        <p className="text-surface-400 text-sm leading-relaxed mb-6">
                            Building modern web experiences and scalable digital solutions.
                            Turning ideas into high-performance applications.
                        </p>
                        <div className="flex items-center gap-3">
                            {socials.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="w-9 h-9 rounded-lg bg-surface-800/50 border border-surface-700/30 flex items-center justify-center text-surface-400 hover:text-teal-400 hover:border-teal-500/30 hover:bg-teal-500/10 transition-all duration-300"
                                >
                                    <social.icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-surface-400 hover:text-teal-400 text-sm transition-colors duration-300 flex items-center gap-2 group"
                                    >
                                        <span className="w-1 h-1 rounded-full bg-surface-600 group-hover:bg-teal-400 transition-colors" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Services */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
                            Services
                        </h3>
                        <ul className="space-y-3">
                            {serviceLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-surface-400 hover:text-teal-400 text-sm transition-colors duration-300 flex items-center gap-2 group"
                                    >
                                        <span className="w-1 h-1 rounded-full bg-surface-600 group-hover:bg-teal-400 transition-colors" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
                            Get In Touch
                        </h3>
                        <ul className="space-y-4">
                            <li>
                                <a
                                    href={`mailto:${siteConfig.email}`}
                                    className="flex items-start gap-3 text-surface-400 hover:text-teal-400 text-sm transition-colors group"
                                >
                                    <HiOutlineEnvelope className="w-4 h-4 mt-0.5 shrink-0 group-hover:text-teal-400" />
                                    {siteConfig.email}
                                </a>
                            </li>
                            <li>
                                <a
                                    href={`tel:${siteConfig.phone}`}
                                    className="flex items-start gap-3 text-surface-400 hover:text-teal-400 text-sm transition-colors group"
                                >
                                    <HiOutlinePhone className="w-4 h-4 mt-0.5 shrink-0 group-hover:text-teal-400" />
                                    {siteConfig.phone}
                                </a>
                            </li>
                            <li className="flex items-start gap-3 text-surface-400 text-sm">
                                <HiOutlineMapPin className="w-4 h-4 mt-0.5 shrink-0" />
                                {siteConfig.location}
                            </li>
                        </ul>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-surface-800/50 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-surface-500 text-sm">
                        © {new Date().getFullYear()} {siteConfig.name}. Crafted with precision & passion.
                    </p>
                    <div className="flex items-center gap-6">
                        <Link
                            href="/about"
                            className="text-surface-500 hover:text-teal-400 text-sm transition-colors"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="/about"
                            className="text-surface-500 hover:text-teal-400 text-sm transition-colors"
                        >
                            Terms of Use
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
