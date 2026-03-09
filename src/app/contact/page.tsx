"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
    HiOutlineEnvelope,
    HiOutlineMapPin,
    HiOutlinePaperAirplane,
    HiOutlineCheckCircle,
    HiOutlineSquares2X2,
} from "react-icons/hi2";
import { FaGithub, FaLinkedinIn, FaStackOverflow, FaMedium, FaDev, FaGoogle } from "react-icons/fa6";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import PageTransition from "@/components/ui/PageTransition";
import { siteConfig } from "@/data/site";

const socials = [
    { icon: FaGithub, href: siteConfig.socials.github, label: "GitHub", color: "hover:text-white" },
    { icon: FaLinkedinIn, href: siteConfig.socials.linkedin, label: "LinkedIn", color: "hover:text-blue-400" },
    { icon: HiOutlineSquares2X2, href: siteConfig.socials.uiverse, label: "Uiverse", color: "hover:text-teal-400" },
    { icon: FaGoogle, href: siteConfig.socials.googleDev, label: "Google Devs", color: "hover:text-yellow-400" },
    { icon: FaStackOverflow, href: siteConfig.socials.stackOverflow, label: "Stack Overflow", color: "hover:text-orange-400" },
    { icon: FaMedium, href: siteConfig.socials.medium, label: "Medium", color: "hover:text-site-text" },
    { icon: FaDev, href: siteConfig.socials.devto, label: "Dev.to", color: "hover:text-site-text" },
];

export default function ContactPage() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Email integration placeholder
        console.log("Form submitted:", formState);
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
        setFormState({ name: "", email: "", subject: "", message: "" });
    };

    return (
        <PageTransition>
            {/* Hero */}
            <section className="pt-32 pb-16 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        label="Contact"
                        title="Let's Build Something Amazing Together"
                        subtitle="Looking to hire a Freelance Web Developer in Udaipur? As the Best Web Developer in Udaipur, I'd love to hear about your project and discuss how we can bring your digital vision to life."
                    />
                </div>
            </section>

            {/* Contact Content */}
            <section className="pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                        {/* Contact Info */}
                        <div className="lg:col-span-2 space-y-8">
                            <Card delay={0.1} className="p-8">
                                <h3 className="text-site-text font-semibold text-xl mb-6 font-heading">
                                    Get In Touch
                                </h3>

                                <div className="space-y-6">
                                    <a
                                        href={`mailto:${siteConfig.email}`}
                                        className="flex items-start gap-4 group"
                                    >
                                        <div className="w-10 h-10 shrink-0 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 group-hover:bg-teal-500/20 transition-colors">
                                            <HiOutlineEnvelope className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-site-text-muted text-xs uppercase tracking-wider font-medium mb-0.5">
                                                Email
                                            </p>
                                            <p className="text-site-text text-sm group-hover:text-teal-400 transition-colors">
                                                {siteConfig.email}
                                            </p>
                                        </div>
                                    </a>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 shrink-0 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
                                            <HiOutlineMapPin className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-site-text-muted text-xs uppercase tracking-wider font-medium mb-0.5">
                                                Location
                                            </p>
                                            <p className="text-site-text text-sm">
                                                {siteConfig.location}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Card>

                            <Card delay={0.2} className="p-8">
                                <h3 className="text-site-text font-semibold text-lg mb-4 font-heading">
                                    Follow Me
                                </h3>
                                <div className="grid grid-cols-2 gap-3">
                                    {socials.map((social) => (
                                        <a
                                            key={social.label}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`flex items-center gap-3 px-4 py-3 rounded-xl bg-surface-200 border border-surface-300 text-site-text-muted ${social.color} hover:border-teal-500/30 hover:bg-teal-500/10 transition-all duration-300 group`}
                                        >
                                            <social.icon className="w-5 h-5" />
                                            <span className="text-sm font-medium">{social.label}</span>
                                        </a>
                                    ))}
                                </div>
                            </Card>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-3">
                            <Card delay={0.15} className="p-8">
                                {submitted ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-12"
                                    >
                                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400">
                                            <HiOutlineCheckCircle className="w-8 h-8" />
                                        </div>
                                        <h3 className="text-site-text font-semibold text-xl mb-2 font-heading">
                                            Message Sent!
                                        </h3>
                                        <p className="text-site-text-muted">
                                            Thank you for reaching out. I&apos;ll get back to you within 24 hours.
                                        </p>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <h3 className="text-site-text font-semibold text-xl mb-2 font-heading">
                                            Send a Message
                                        </h3>
                                        <p className="text-site-text-muted text-sm mb-6">
                                            Fill out the form below and I&apos;ll respond as soon as possible.
                                        </p>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            <div>
                                                <label
                                                    htmlFor="name"
                                                    className="block text-site-text-muted text-sm font-medium mb-2"
                                                >
                                                    Name
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    required
                                                    value={formState.name}
                                                    onChange={(e) =>
                                                        setFormState({ ...formState, name: e.target.value })
                                                    }
                                                    className="w-full px-4 py-3 rounded-xl bg-surface-100 border border-surface-300 text-site-text placeholder-site-text-muted/50 focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/20 transition-all duration-300 text-sm"
                                                    placeholder="Your name"
                                                />
                                            </div>
                                            <div>
                                                <label
                                                    htmlFor="email"
                                                    className="block text-site-text-muted text-sm font-medium mb-2"
                                                >
                                                    Email
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    required
                                                    value={formState.email}
                                                    onChange={(e) =>
                                                        setFormState({ ...formState, email: e.target.value })
                                                    }
                                                    className="w-full px-4 py-3 rounded-xl bg-surface-100 border border-surface-300 text-site-text placeholder-site-text-muted/50 focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/20 transition-all duration-300 text-sm"
                                                    placeholder="your@email.com"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="subject"
                                                className="block text-site-text-muted text-sm font-medium mb-2"
                                            >
                                                Subject
                                            </label>
                                            <input
                                                type="text"
                                                id="subject"
                                                required
                                                value={formState.subject}
                                                onChange={(e) =>
                                                    setFormState({ ...formState, subject: e.target.value })
                                                }
                                                className="w-full px-4 py-3 rounded-xl bg-surface-100 border border-surface-300 text-site-text placeholder-site-text-muted/50 focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/20 transition-all duration-300 text-sm"
                                                placeholder="Project inquiry"
                                            />
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="message"
                                                className="block text-site-text-muted text-sm font-medium mb-2"
                                            >
                                                Message
                                            </label>
                                            <textarea
                                                id="message"
                                                required
                                                rows={6}
                                                value={formState.message}
                                                onChange={(e) =>
                                                    setFormState({ ...formState, message: e.target.value })
                                                }
                                                className="w-full px-4 py-3 rounded-xl bg-surface-100 border border-surface-300 text-site-text placeholder-site-text-muted/50 focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/20 transition-all duration-300 text-sm resize-none"
                                                placeholder="Tell me about your project..."
                                            />
                                        </div>

                                        <Button
                                            type="submit"
                                            size="lg"
                                            icon={<HiOutlinePaperAirplane />}
                                            className="w-full sm:w-auto"
                                        >
                                            Send Message
                                        </Button>
                                    </form>
                                )}
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </PageTransition>
    );
}
