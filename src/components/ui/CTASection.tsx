"use client";

import { motion } from "framer-motion";
import Button from "./Button";
import { HiOutlineArrowRight } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa";
import { siteConfig } from "@/data/site";

export default function CTASection() {
    return (
        <section className="py-24 relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-12">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                className="relative overflow-hidden rounded-[2.5rem] p-12 md:p-24 bg-surface-200/50 backdrop-blur-3xl border border-surface-300 shadow-2xl text-center"
            >
                {/* Decorative background glows */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-teal-500/10 via-transparent to-indigo-500/10 pointer-events-none" />
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-teal-500/20 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px] pointer-events-none" />

                <div className="relative z-10">
                    <span className="inline-block px-5 py-2 mb-8 text-xs font-black tracking-[0.25em] uppercase text-teal-400 bg-teal-500/10 border border-teal-500/20 rounded-full shadow-lg shadow-teal-500/5">
                        Next Steps
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black text-site-text mb-6 tracking-tighter leading-tight text-balance">
                        Ready to kickstart your <br className="hidden md:block" />
                        <span className="gradient-text italic">next digital project?</span>
                    </h2>
                    <p className="text-site-text-muted text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-medium text-balance">
                        Whether you need a full-scale web application or a sleek business presence, I am here to turn your vision into a digital reality.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-5">
                        <Button href="/contact" size="lg" className="rounded-full px-8 py-4 bg-site-text text-site-bg border-none hover:opacity-90 transition-opacity font-bold">
                            Let's Talk <HiOutlineArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                        <Button href={siteConfig.socials.github} variant="outline" size="lg" external className="rounded-full px-8 py-4 border-surface-400/50 hover:border-teal-400 hover:text-teal-400 font-bold transition-colors">
                            <FaGithub className="w-5 h-5 mr-2" /> View Source Code
                        </Button>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
