"use client";

import { motion } from "framer-motion";

export default function TechBackground() {
    return (
        <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden select-none bg-site-bg transition-colors duration-300" aria-hidden="true">
            {/* Base Background Surface - Theme Aware */}
            <div className="absolute inset-0 bg-site-bg transition-colors duration-300" />

            {/* Grid Pattern Layer - Theme Aware */}
            <div
                className="absolute inset-0 opacity-100 transition-opacity duration-300"
                style={{
                    backgroundImage: `
                        linear-gradient(var(--grid-color, rgba(255, 255, 255, 0.03)) 1px, transparent 1px), 
                        linear-gradient(90deg, var(--grid-color, rgba(255, 255, 255, 0.03)) 1px, transparent 1px)
                    `,
                    backgroundSize: '60px 60px'
                }}
            />

            {/* Ambient Glows - Theme Aware */}

            {/* Primary Glow - Top Left (Blue) */}
            <div
                className="absolute inset-0 transition-opacity duration-500"
                style={{
                    background: "radial-gradient(circle at 10% 20%, var(--glow-color-1, rgba(59, 130, 246, 0.08)) 0%, transparent 40%)"
                }}
            />

            {/* Secondary Glow - Bottom Right (Purple) */}
            <div
                className="absolute inset-0 transition-opacity duration-500"
                style={{
                    background: "radial-gradient(circle at 90% 80%, var(--glow-color-2, rgba(139, 92, 246, 0.08)) 0%, transparent 40%)"
                }}
            />

            {/* Central Soft Ambient Glow */}
            <div
                className="absolute inset-0 transition-opacity duration-500"
                style={{
                    background: "radial-gradient(circle at 50% 50%, var(--glow-color-3, rgba(59, 130, 246, 0.03)) 0%, transparent 60%)"
                }}
            />

            {/* Grain/Noise Overlay - Always subtle */}
            <div
                className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                }}
            />

            {/* Bottom Vignette for Depth - Theme Aware */}
            <div className="absolute inset-0 bg-gradient-to-t from-site-bg via-transparent to-transparent opacity-50 transition-colors duration-300" />

            <style jsx global>{`
                :root, [data-theme="dark"] {
                    --grid-color: rgba(255, 255, 255, 0.03);
                    --glow-color-1: rgba(59, 130, 246, 0.08);
                    --glow-color-2: rgba(139, 92, 246, 0.08);
                    --glow-color-3: rgba(59, 130, 246, 0.03);
                }
                [data-theme="light"] {
                    --grid-color: rgba(59, 130, 246, 0.05);
                    --glow-color-1: rgba(59, 130, 246, 0.04);
                    --glow-color-2: rgba(139, 92, 246, 0.04);
                    --glow-color-3: rgba(59, 130, 246, 0.02);
                }
            `}</style>
        </div>
    );
}
