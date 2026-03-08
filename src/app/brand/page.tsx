"use client";

import Logo from "@/components/ui/Logo";
import { motion } from "framer-motion";

export default function DesignSystemPage() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-4 md:px-8 max-w-6xl mx-auto">
            <header className="mb-16">
                <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 gradient-text">
                    Brand Identity
                </h1>
                <p className="text-site-text-muted text-lg max-w-2xl">
                    A premium, high-end visual identity designed for Eshban Oliver.
                    Modern, minimal, and sophisticated.
                </p>
            </header>

            <div className="space-y-20">
                {/* Main Logo Variations */}
                <section>
                    <h2 className="text-2xl font-bold font-heading mb-8 border-l-4 border-teal-500 pl-4">
                        Main Logo
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-12 rounded-3xl bg-surface-100 border border-surface-300 flex items-center justify-center">
                            <div className="text-center">
                                <p className="text-[10px] uppercase tracking-widest text-site-text-muted mb-8 italic">Dark Mode Background</p>
                                <Logo size={80} />
                            </div>
                        </div>
                        <div className="p-12 rounded-3xl bg-white border border-surface-300 flex items-center justify-center">
                            <div className="text-center">
                                <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-8 italic">Light Mode Background</p>
                                <div className="text-slate-900 invert-0">
                                    <Logo size={80} className="text-slate-900" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Symbol / Icon Version */}
                <section>
                    <h2 className="text-2xl font-bold font-heading mb-8 border-l-4 border-teal-500 pl-4">
                        Symbol / Icon
                    </h2>
                    <div className="flex flex-wrap gap-8 items-center bg-surface-100/50 p-12 rounded-3xl border border-surface-300">
                        <div className="flex flex-col items-center gap-4">
                            <Logo showText={false} size={120} />
                            <span className="text-xs text-site-text-muted">Master Symbol (120px)</span>
                        </div>
                        <div className="flex flex-col items-center gap-4">
                            <Logo showText={false} size={64} />
                            <span className="text-xs text-site-text-muted">64px</span>
                        </div>
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-16 h-16 rounded-2xl bg-teal-500 flex items-center justify-center shadow-lg shadow-teal-500/30">
                                <Logo showText={false} size={32} className="text-white" />
                            </div>
                            <span className="text-xs text-site-text-muted">App Icon Style</span>
                        </div>
                        <div className="flex flex-col items-center gap-4">
                            <Logo showText={false} size={32} />
                            <span className="text-xs text-site-text-muted">Favicon</span>
                        </div>
                    </div>
                </section>

                {/* Color Palette */}
                <section>
                    <h2 className="text-2xl font-bold font-heading mb-8 border-l-4 border-teal-500 pl-4">
                        Visual Language
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="h-32 rounded-2xl bg-[#2dd4bf] flex items-end p-4">
                            <span className="text-white font-bold text-xs">Teal 400<br />#2DD4BF</span>
                        </div>
                        <div className="h-32 rounded-2xl bg-[#6366f1] flex items-end p-4">
                            <span className="text-white font-bold text-xs">Indigo 500<br />#6366F1</span>
                        </div>
                        <div className="h-32 rounded-2xl bg-[#0a0a0a] border border-surface-300 flex items-end p-4">
                            <span className="text-white font-bold text-xs">Site Background<br />#0A0A0A</span>
                        </div>
                        <div className="h-32 rounded-2xl bg-surface-100 border border-surface-300 flex items-end p-4">
                            <span className="text-site-text font-bold text-xs">Surface 100<br />Glass Accent</span>
                        </div>
                    </div>
                </section>

                {/* Typography */}
                <section>
                    <h2 className="text-2xl font-bold font-heading mb-8 border-l-4 border-teal-500 pl-4">
                        Typography
                    </h2>
                    <div className="p-8 rounded-3xl bg-surface-100 border border-surface-300">
                        <div className="space-y-8">
                            <div>
                                <p className="text-xs text-site-text-muted mb-2 uppercase tracking-widest">Heading - Outfit</p>
                                <p className="text-4xl font-bold font-heading">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                            </div>
                            <div>
                                <p className="text-xs text-site-text-muted mb-2 uppercase tracking-widest">Body - Inter</p>
                                <p className="text-3xl font-body">The quick brown fox jumps over the lazy dog.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
