"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
    HiOutlineEnvelope,
    HiOutlineMapPin,
    HiOutlinePhone,
    HiOutlinePaperAirplane,
    HiOutlineCheckCircle,
} from "react-icons/hi2";
import { FaGithub, FaLinkedinIn, FaXTwitter, FaDribbble } from "react-icons/fa6";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import PageTransition from "@/components/ui/PageTransition";
import { siteConfig } from "@/data/site";

const socials = [
    { icon: FaGithub, href: siteConfig.socials.github, label: "GitHub", color: "hover:text-white" },
    { icon: FaLinkedinIn, href: siteConfig.socials.linkedin, label: "LinkedIn", color: "hover:text-blue-400" },
    { icon: FaXTwitter, href: siteConfig.socials.twitter, label: "Twitter", color: "hover:text-white" },
    { icon: FaDribbble, href: siteConfig.socials.dribbble, label: "Dribbble", color: "hover:text-pink-400" },
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
                <div className="absolute top-1/4 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-[128px]" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500/10 rounded-full blur-[128px]" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        label="Contact"
                        title="Let's Build Something Amazing Together"
                        subtitle="Have a project in mind? I'd love to hear about it. Let's discuss how we can work together to bring your vision to life."
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
                                <h3 className="text-white font-semibold text-xl mb-6 font-heading">
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
                                            <p className="text-surface-400 text-xs uppercase tracking-wider font-medium mb-0.5">
                                                Email
                                            </p>
                                            <p className="text-white text-sm group-hover:text-teal-400 transition-colors">
                                                {siteConfig.email}
                                            </p>
                                        </div>
                                    </a>

                                    <a
                                        href={`tel:${siteConfig.phone}`}
                                        className="flex items-start gap-4 group"
                                    >
                                        <div className="w-10 h-10 shrink-0 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 group-hover:bg-teal-500/20 transition-colors">
                                            <HiOutlinePhone className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-surface-400 text-xs uppercase tracking-wider font-medium mb-0.5">
                                                Phone
                                            </p>
                                            <p className="text-white text-sm group-hover:text-teal-400 transition-colors">
                                                {siteConfig.phone}
                                            </p>
                                        </div>
                                    </a>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 shrink-0 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
                                            <HiOutlineMapPin className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-surface-400 text-xs uppercase tracking-wider font-medium mb-0.5">
                                                Location
                                            </p>
                                            <p className="text-white text-sm">
                                                {siteConfig.location}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Card>

                            <Card delay={0.2} className="p-8">
                                <h3 className="text-white font-semibold text-lg mb-4 font-heading">
                                    Follow Me
                                </h3>
                                <div className="grid grid-cols-2 gap-3">
                                    {socials.map((social) => (
                                        <a
                                            key={social.label}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`flex items-center gap-3 px-4 py-3 rounded-xl bg-surface-800/50 border border-surface-700/30 text-surface-400 ${social.color} hover:border-surface-600 transition-all duration-300 group`}
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
                                        <h3 className="text-white font-semibold text-xl mb-2 font-heading">
                                            Message Sent!
                                        </h3>
                                        <p className="text-surface-400">
                                            Thank you for reaching out. I&apos;ll get back to you within 24 hours.
                                        </p>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <h3 className="text-white font-semibold text-xl mb-2 font-heading">
                                            Send a Message
                                        </h3>
                                        <p className="text-surface-400 text-sm mb-6">
                                            Fill out the form below and I&apos;ll respond as soon as possible.
                                        </p>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            <div>
                                                <label
                                                    htmlFor="name"
                                                    className="block text-surface-300 text-sm font-medium mb-2"
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
                                                    className="w-full px-4 py-3 rounded-xl bg-surface-800/50 border border-surface-700/30 text-white placeholder-surface-500 focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/20 transition-all duration-300 text-sm"
                                                    placeholder="Your name"
                                                />
                                            </div>
                                            <div>
                                                <label
                                                    htmlFor="email"
                                                    className="block text-surface-300 text-sm font-medium mb-2"
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
                                                    className="w-full px-4 py-3 rounded-xl bg-surface-800/50 border border-surface-700/30 text-white placeholder-surface-500 focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/20 transition-all duration-300 text-sm"
                                                    placeholder="your@email.com"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="subject"
                                                className="block text-surface-300 text-sm font-medium mb-2"
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
                                                className="w-full px-4 py-3 rounded-xl bg-surface-800/50 border border-surface-700/30 text-white placeholder-surface-500 focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/20 transition-all duration-300 text-sm"
                                                placeholder="Project inquiry"
                                            />
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="message"
                                                className="block text-surface-300 text-sm font-medium mb-2"
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
                                                className="w-full px-4 py-3 rounded-xl bg-surface-800/50 border border-surface-700/30 text-white placeholder-surface-500 focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/20 transition-all duration-300 text-sm resize-none"
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
