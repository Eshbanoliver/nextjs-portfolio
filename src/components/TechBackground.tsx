"use client";

import { motion } from "framer-motion";

export default function TechBackground() {
    return (
        <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden select-none bg-site-bg transition-colors duration-300" aria-hidden="true">
            {/* Base Background Surface */}
            <div className="absolute inset-0 bg-site-bg" />

            {/* Grid Pattern Layer (Exact 60px size) */}
            <div
                className="absolute inset-0 opacity-100 transition-opacity duration-300"
                style={{
                    backgroundImage: `
            linear-gradient(var(--grid-color, rgba(0, 0, 0, 0.05)) 1px, transparent 1px), 
            linear-gradient(90deg, var(--grid-color, rgba(0, 0, 0, 0.05)) 1px, transparent 1px)
          `,
                    backgroundSize: '60px 60px'
                }}
            />
            <style jsx global>{`
        [data-theme="dark"] { --grid-color: rgba(255, 255, 255, 0.03); }
        [data-theme="light"] { --grid-color: rgba(59, 130, 246, 0.05); }
      `}</style>

            {/* Ambient Glows (Exact Reference Site Values) */}

            {/* Primary Glow - Top Left (Blue/Teal) */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0 opacity-20 [data-theme='dark']:opacity-100"
                style={{
                    background: "radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.05) 0%, transparent 40%)"
                }}
            />

            {/* Secondary Glow - Bottom Right (Purple/Accent) */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.2 }}
                className="absolute inset-0 opacity-20 [data-theme='dark']:opacity-100"
                style={{
                    background: "radial-gradient(circle at 90% 80%, rgba(139, 92, 246, 0.05) 0%, transparent 40%)"
                }}
            />

            {/* Central Soft Ambient Glow */}
            <div
                className="absolute inset-0 opacity-10 [data-theme='dark']:opacity-100"
                style={{
                    background: "radial-gradient(circle at center, rgba(59, 130, 246, 0.02) 0%, transparent 60%)"
                }}
            />

            {/* Atmospheric Vignette Filter */}
            <div className="absolute inset-0 bg-gradient-to-t from-site-bg via-transparent to-transparent opacity-40 transition-colors duration-300" />
        </div>
    );
}
