"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    siteConfig,
    stats,
    skills,
    mission,
    aboutHero,
    aboutStory,
    experiences,
    industries,
    toolkitServices,
    education,
    projects,
    certifications,
    expertise,
    coreValues,
    technicalProficiency,
} from "@/data/site";

/* ── types ─────────────────────────────────────────────────────────── */
interface Message {
    id: string;
    role: "user" | "assistant";
    text: string;
    timestamp: Date;
}

/* ── suggested quick-reply chips ───────────────────────────────────── */
const SUGGESTIONS = [
    "Who is Eshban?",
    "What skills do you have?",
    "Show me projects",
    "Your certifications?",
    "How to contact you?",
    "Your experience?",
    "Services you offer?",
    "Education details?",
];

/* ── knowledge base builder ────────────────────────────────────────── */
function buildAnswer(query: string): string {
    const q = query.toLowerCase().trim();

    /* ── greetings ─────────────────────────────────────────────────── */
    if (/^(hi|hello|hey|howdy|greetings|sup|yo)[\s!?.]*$/i.test(q)) {
        return `Hello! 👋 I'm Eshban's AI assistant. I can tell you about his **skills**, **projects**, **certifications**, **experience**, **education**, and more. What would you like to know?`;
    }

    /* ── who / about ───────────────────────────────────────────────── */
    if (
        q.includes("who") ||
        q.includes("about") ||
        q.includes("tell me") ||
        q.includes("introduce") ||
        q.includes("yourself")
    ) {
        return `**${siteConfig.name}** is a ${aboutHero.subtitle}\n\n${aboutStory.description}\n\n📍 Based in **${siteConfig.location}**\n📧 ${siteConfig.email}\n📞 ${siteConfig.phone}`;
    }

    /* ── skills / technologies ─────────────────────────────────────── */
    if (
        q.includes("skill") ||
        q.includes("tech") ||
        q.includes("stack") ||
        q.includes("language") ||
        q.includes("framework") ||
        q.includes("tool")
    ) {
        const front = skills.frontend.join(", ");
        const back = skills.backend.join(", ");
        const mob = skills.mobile.join(", ");
        const devTools = skills.tools.join(", ");
        const proficiency = technicalProficiency
            .map((t) => `• ${t.skill}: **${t.level}%**`)
            .join("\n");
        return `## 🛠️ Technical Skills\n\n**Frontend:** ${front}\n**Backend:** ${back}\n**Mobile:** ${mob}\n**Tools:** ${devTools}\n\n**Proficiency Levels:**\n${proficiency}`;
    }

    /* ── projects ──────────────────────────────────────────────────── */
    if (
        q.includes("project") ||
        q.includes("portfolio") ||
        q.includes("work") ||
        q.includes("website") ||
        q.includes("built")
    ) {
        const featured = projects.filter((p) => p.featured);
        const total = projects.length;
        const featuredList = featured
            .map(
                (p) =>
                    `⭐ **${p.title}** — ${p.technologies.join(", ")} → [Live](${p.liveUrl})`
            )
            .join("\n");
        const cats = [...new Set(projects.map((p) => p.category))].join(", ");
        return `## 🚀 Projects (${total} Total)\n\n**Featured Projects:**\n${featuredList}\n\n**Categories covered:** ${cats}\n\nVisit the [Projects](/projects) page to explore them all!`;
    }

    /* ── certifications ────────────────────────────────────────────── */
    if (
        q.includes("certif") ||
        q.includes("credential") ||
        q.includes("course") ||
        q.includes("certificate")
    ) {
        const total = certifications.length;
        const platforms = [
            ...new Set(certifications.map((c) => c.platform)),
        ].join(", ");
        const recent = certifications
            .slice(0, 5)
            .map((c) => `🎓 **${c.title}** — ${c.platform} (${c.year})`)
            .join("\n");
        return `## 🎓 Certifications (${total} Total)\n\n**Platforms:** ${platforms}\n\n**Recent Highlights:**\n${recent}\n\nExplore all on the [Certifications](/certifications) page!`;
    }

    /* ── experience ────────────────────────────────────────────────── */
    if (
        q.includes("experience") ||
        q.includes("work history") ||
        q.includes("job") ||
        q.includes("company") ||
        q.includes("career") ||
        q.includes("employ")
    ) {
        const exp = experiences
            .map(
                (e) =>
                    `### ${e.role} at ${e.company}\n📅 ${e.period}\n${e.description}\n**Tech:** ${e.technologies.join(", ")}`
            )
            .join("\n\n");
        return `## 💼 Professional Experience\n\n${exp}\n\nMore details on the [Experience](/experience) page.`;
    }

    /* ── education ─────────────────────────────────────────────────── */
    if (
        q.includes("education") ||
        q.includes("degree") ||
        q.includes("university") ||
        q.includes("college") ||
        q.includes("study") ||
        q.includes("qualification") ||
        q.includes("school")
    ) {
        const edu = education
            .map(
                (e) =>
                    `🎓 **${e.degree}**\n🏛️ ${e.institution}\n📅 ${e.year} | Grade: ${e.grade}`
            )
            .join("\n\n");
        return `## 📚 Education\n\n${edu}\n\nVisit the [Education](/education) page for full details.`;
    }

    /* ── services / toolkit ────────────────────────────────────────── */
    if (
        q.includes("service") ||
        q.includes("offer") ||
        q.includes("toolkit") ||
        q.includes("hire") ||
        q.includes("what do you do") ||
        q.includes("help me")
    ) {
        const services = toolkitServices
            .map((s) => `• **${s.title}**: ${s.shortDesc}`)
            .join("\n");
        return `## 🧰 Services Offered\n\n${services}\n\nExplore in detail on the [Toolkit](/toolkit) page!`;
    }

    /* ── industries ────────────────────────────────────────────────── */
    if (
        q.includes("industr") ||
        q.includes("sector") ||
        q.includes("domain") ||
        q.includes("niche")
    ) {
        const ind = industries
            .map((i) => `• **${i.name}** — ${i.description}`)
            .join("\n");
        return `## 🏭 Industries Served\n\n${ind}\n\nMore on the [Industries](/industries) page.`;
    }

    /* ── contact ───────────────────────────────────────────────────── */
    if (
        q.includes("contact") ||
        q.includes("email") ||
        q.includes("phone") ||
        q.includes("reach") ||
        q.includes("hire") ||
        q.includes("connect") ||
        q.includes("talk")
    ) {
        return `## 📬 Get in Touch\n\n📧 **Email:** ${siteConfig.email}\n📞 **Phone:** ${siteConfig.phone}\n📍 **Location:** ${siteConfig.location}\n\n**Social Links:**\n• [GitHub](${siteConfig.socials.github})\n• [LinkedIn](${siteConfig.socials.linkedin})\n• [Stack Overflow](${siteConfig.socials.stackOverflow})\n• [UIverse](${siteConfig.socials.uiverse})\n\nOr visit the [Contact](/contact) page directly!`;
    }

    /* ── location ──────────────────────────────────────────────────── */
    if (
        q.includes("where") ||
        q.includes("location") ||
        q.includes("based") ||
        q.includes("city") ||
        q.includes("udaipur")
    ) {
        return `📍 Eshban is based in **${siteConfig.location}**. He works with clients globally and locally. Reach out via the [Contact](/contact) page!`;
    }

    /* ── mission / values ──────────────────────────────────────────── */
    if (
        q.includes("mission") ||
        q.includes("value") ||
        q.includes("vision") ||
        q.includes("goal")
    ) {
        const vals = coreValues
            .map((v) => `• **${v.title}** — ${v.description}`)
            .join("\n");
        return `## 🎯 Mission\n\n*"${mission}"*\n\n## Core Values\n${vals}`;
    }

    /* ── stats ─────────────────────────────────────────────────────── */
    if (
        q.includes("stat") ||
        q.includes("number") ||
        q.includes("achievement") ||
        q.includes("how many")
    ) {
        const s = stats.map((st) => `• **${st.value}** ${st.label}`).join("\n");
        return `## 📊 Key Stats\n\n${s}`;
    }

    /* ── expertise ─────────────────────────────────────────────────── */
    if (q.includes("expert") || q.includes("specializ") || q.includes("best at")) {
        const exp = expertise
            .map((e) => `• **${e.title}** — ${e.description}`)
            .join("\n");
        return `## 🏆 Areas of Expertise\n\n${exp}`;
    }

    /* ── specific tech queries ─────────────────────────────────────── */
    const techMap: Record<string, string> = {
        react: "React / Next.js",
        "next.js": "Next.js",
        nextjs: "Next.js",
        javascript: "JavaScript",
        wordpress: "WordPress",
        "react native": "React Native",
        flutter: "Flutter",
        python: "Python",
        node: "Node.js",
        php: "PHP",
        mysql: "MySQL",
        firebase: "Firebase",
        tailwind: "Tailwind CSS",
        bootstrap: "Bootstrap",
        css: "CSS3",
        html: "HTML5",
        java: "Java",
    };

    for (const [key, label] of Object.entries(techMap)) {
        if (q.includes(key)) {
            const related = projects.filter((p) =>
                p.technologies.some((t) => t.toLowerCase().includes(key))
            );
            const relatedCerts = certifications.filter(
                (c) =>
                    c.title.toLowerCase().includes(key) ||
                    c.description.toLowerCase().includes(key)
            );
            let answer = `## ${label}\n\nEshban has strong experience with **${label}**.`;
            if (related.length > 0) {
                answer += `\n\n**Projects using ${label}:** ${related.length}\n`;
                answer += related
                    .slice(0, 4)
                    .map((p) => `• ${p.title}`)
                    .join("\n");
            }
            if (relatedCerts.length > 0) {
                answer += `\n\n**Related Certifications:**\n`;
                answer += relatedCerts.map((c) => `🎓 ${c.title}`).join("\n");
            }
            return answer;
        }
    }

    /* ── social links ──────────────────────────────────────────────── */
    if (
        q.includes("github") ||
        q.includes("linkedin") ||
        q.includes("social") ||
        q.includes("link")
    ) {
        return `## 🔗 Social Profiles\n\n• [GitHub](${siteConfig.socials.github})\n• [LinkedIn](${siteConfig.socials.linkedin})\n• [Google Dev](${siteConfig.socials.googleDev})\n• [UIverse](${siteConfig.socials.uiverse})\n• [Stack Overflow](${siteConfig.socials.stackOverflow})\n• [Medium](${siteConfig.socials.medium})\n• [Dev.to](${siteConfig.socials.devto})`;
    }

    /* ── thank you ─────────────────────────────────────────────────── */
    if (q.includes("thank") || q.includes("bye") || q.includes("goodbye")) {
        return `You're welcome! 😊 Feel free to come back anytime. You can also reach Eshban directly at **${siteConfig.email}**. Have a great day!`;
    }

    /* ── pricing / cost ────────────────────────────────────────────── */
    if (q.includes("price") || q.includes("cost") || q.includes("rate") || q.includes("charge") || q.includes("budget")) {
        return `💰 For pricing and project quotes, please contact Eshban directly:\n\n📧 **${siteConfig.email}**\n📞 **${siteConfig.phone}**\n\nOr visit the [Contact](/contact) page to send a message!`;
    }

    /* ── fallback ──────────────────────────────────────────────────── */
    return `I'm not sure about that, but I can help you with:\n\n• **About Eshban** — background & story\n• **Skills & Technologies** — tech stack\n• **Projects** — portfolio & featured work\n• **Certifications** — credentials\n• **Experience** — work history\n• **Education** — academic details\n• **Services** — what Eshban offers\n• **Contact** — how to reach him\n\nTry asking one of these! 😊`;
}

/* ── simple markdown renderer ─────────────────────────────────────── */
function renderMarkdown(text: string) {
    const lines = text.split("\n");
    return lines.map((line, i) => {
        // h2
        if (line.startsWith("## ")) {
            return (
                <h3 key={i} className="text-sm font-bold text-teal-400 mt-3 mb-1">
                    {line.replace("## ", "")}
                </h3>
            );
        }
        // h3
        if (line.startsWith("### ")) {
            return (
                <h4
                    key={i}
                    className="text-xs font-semibold text-teal-300 mt-2 mb-0.5"
                >
                    {line.replace("### ", "")}
                </h4>
            );
        }
        // bullet
        if (line.startsWith("• ") || line.startsWith("- ")) {
            const content = line.replace(/^[•\-]\s*/, "");
            return (
                <p key={i} className="text-xs leading-relaxed pl-3 text-[var(--site-text-muted)]">
                    <span className="text-teal-400 mr-1">▸</span>
                    <InlineMarkdown text={content} />
                </p>
            );
        }
        // empty line
        if (line.trim() === "") return <br key={i} />;
        // regular paragraph
        return (
            <p key={i} className="text-xs leading-relaxed text-[var(--site-text-muted)]">
                <InlineMarkdown text={line} />
            </p>
        );
    });
}

function InlineMarkdown({ text }: { text: string }) {
    // bold + links
    const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);
    return (
        <>
            {parts.map((part, i) => {
                if (part.startsWith("**") && part.endsWith("**")) {
                    return (
                        <strong key={i} className="text-[var(--site-text)] font-semibold">
                            {part.slice(2, -2)}
                        </strong>
                    );
                }
                const linkMatch = part.match(/\[([^\]]+)\]\(([^)]+)\)/);
                if (linkMatch) {
                    return (
                        <a
                            key={i}
                            href={linkMatch[2]}
                            className="text-teal-400 underline underline-offset-2 hover:text-teal-300 transition-colors"
                            target={
                                linkMatch[2].startsWith("http") ? "_blank" : undefined
                            }
                            rel="noopener noreferrer"
                        >
                            {linkMatch[1]}
                        </a>
                    );
                }
                // italic
                if (part.startsWith("*") && part.endsWith("*")) {
                    return (
                        <em key={i} className="italic opacity-80">
                            {part.slice(1, -1)}
                        </em>
                    );
                }
                return <span key={i}>{part}</span>;
            })}
        </>
    );
}

/* ── main component ───────────────────────────────────────────────── */
export default function AIChatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "welcome",
            role: "assistant",
            text: `Hey there! 👋 I'm **Eshban's AI Assistant**. I know everything about this portfolio — ask me about skills, projects, certifications, experience, or anything else!`,
            timestamp: new Date(),
        },
    ]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const scrollToBottom = useCallback(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, []);

    useEffect(() => {
        scrollToBottom();
    }, [messages, scrollToBottom]);

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => inputRef.current?.focus(), 300);
        }
    }, [isOpen]);

    const handleSend = useCallback(
        (text?: string) => {
            const msg = text || input.trim();
            if (!msg) return;

            const userMsg: Message = {
                id: `user-${Date.now()}`,
                role: "user",
                text: msg,
                timestamp: new Date(),
            };

            setMessages((prev) => [...prev, userMsg]);
            setInput("");
            setIsTyping(true);

            // Simulate AI thinking delay
            setTimeout(() => {
                const answer = buildAnswer(msg);
                const aiMsg: Message = {
                    id: `ai-${Date.now()}`,
                    role: "assistant",
                    text: answer,
                    timestamp: new Date(),
                };
                setMessages((prev) => [...prev, aiMsg]);
                setIsTyping(false);
            }, 600 + Math.random() * 800);
        },
        [input]
    );

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    /* ── unread badge ──────────────────────────────────────────────── */
    const [hasInteracted, setHasInteracted] = useState(false);

    return (
        <>
            {/* ── floating toggle button (LEFT SIDE) ─────────────────────── */}
            <motion.button
                id="ai-chatbot-toggle"
                onClick={() => {
                    setIsOpen(!isOpen);
                    setHasInteracted(true);
                }}
                className="fixed left-5 bottom-6 md:bottom-8 z-[9999] w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center shadow-2xl cursor-pointer border-0 outline-none"
                style={{
                    background: "linear-gradient(135deg, #05c8ad, #4a38ed)",
                    boxShadow: isOpen
                        ? "0 0 0 3px rgba(5,200,173,0.3), 0 8px 32px rgba(5,200,173,0.4)"
                        : "0 8px 32px rgba(5,200,173,0.3), 0 0 60px rgba(5,200,173,0.1)",
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                animate={
                    !hasInteracted
                        ? {
                            scale: [1, 1.1, 1],
                            boxShadow: [
                                "0 8px 32px rgba(5,200,173,0.3)",
                                "0 8px 32px rgba(5,200,173,0.6)",
                                "0 8px 32px rgba(5,200,173,0.3)",
                            ],
                        }
                        : {}
                }
                transition={
                    !hasInteracted
                        ? { duration: 2, repeat: Infinity, ease: "easeInOut" }
                        : { duration: 0.2 }
                }
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.svg
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </motion.svg>
                    ) : (
                        <motion.svg
                            key="chat"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                        </motion.svg>
                    )}
                </AnimatePresence>

                {/* Notification dot */}
                {!hasInteracted && (
                    <motion.span
                        className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-accent-500 border-2 border-[var(--site-bg)] text-[8px] text-white flex items-center justify-center font-bold"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        1
                    </motion.span>
                )}
            </motion.button>

            {/* ── chat window ────────────────────────────────────────────── */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        id="ai-chatbot-window"
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="fixed left-4 bottom-22 md:left-5 md:bottom-24 z-[9998] w-[calc(100vw-32px)] md:w-[380px] rounded-2xl overflow-hidden flex flex-col"
                        style={{
                            height: "min(560px, calc(100vh - 120px))",
                            background: "var(--site-bg)",
                            border: "1px solid rgba(5,200,173,0.2)",
                            boxShadow:
                                "0 25px 80px -12px rgba(0,0,0,0.5), 0 0 40px rgba(5,200,173,0.08)",
                        }}
                    >
                        {/* ── header ───────────────────────────────────────────── */}
                        <div
                            className="px-5 py-4 flex items-center gap-3 shrink-0"
                            style={{
                                background:
                                    "linear-gradient(135deg, rgba(5,200,173,0.15), rgba(74,56,237,0.15))",
                                borderBottom: "1px solid rgba(5,200,173,0.15)",
                            }}
                        >
                            <div className="relative">
                                <div
                                    className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm"
                                    style={{
                                        background: "linear-gradient(135deg, #05c8ad, #4a38ed)",
                                    }}
                                >
                                    EO
                                </div>
                                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[var(--site-bg)]" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className="text-sm font-bold text-[var(--site-text)]">
                                    Eshban&apos;s AI Assistant
                                </h3>
                                <p className="text-[10px] text-teal-400 font-medium">
                                    ● Online — Ask me anything
                                </p>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="w-7 h-7 rounded-lg flex items-center justify-center hover:bg-[var(--surface-200)] transition-colors cursor-pointer border-0 bg-transparent"
                            >
                                <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="var(--site-text-muted)"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <polyline points="6 9 12 15 18 9" />
                                </svg>
                            </button>
                        </div>

                        {/* ── messages ─────────────────────────────────────────── */}
                        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 scroll-smooth"
                            style={{ scrollbarWidth: "thin" }}
                        >
                            {messages.map((msg) => (
                                <motion.div
                                    key={msg.id}
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                                >
                                    <div
                                        className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 ${msg.role === "user"
                                            ? "rounded-br-md text-white text-xs"
                                            : "rounded-bl-md"
                                            }`}
                                        style={
                                            msg.role === "user"
                                                ? {
                                                    background:
                                                        "linear-gradient(135deg, #05c8ad, #4a38ed)",
                                                }
                                                : {
                                                    background: "var(--surface-100)",
                                                    border: "1px solid var(--surface-300)",
                                                }
                                        }
                                    >
                                        {msg.role === "assistant" ? (
                                            <div className="chatbot-md">{renderMarkdown(msg.text)}</div>
                                        ) : (
                                            <p className="text-xs leading-relaxed">{msg.text}</p>
                                        )}
                                    </div>
                                </motion.div>
                            ))}

                            {/* typing indicator */}
                            {isTyping && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex justify-start"
                                >
                                    <div
                                        className="rounded-2xl rounded-bl-md px-4 py-3 flex gap-1.5"
                                        style={{
                                            background: "var(--surface-100)",
                                            border: "1px solid var(--surface-300)",
                                        }}
                                    >
                                        {[0, 1, 2].map((i) => (
                                            <motion.span
                                                key={i}
                                                className="w-2 h-2 rounded-full bg-teal-400"
                                                animate={{ y: [0, -6, 0] }}
                                                transition={{
                                                    duration: 0.6,
                                                    repeat: Infinity,
                                                    delay: i * 0.15,
                                                }}
                                            />
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            <div ref={messagesEndRef} />
                        </div>

                        {/* ── suggestion chips ─────────────────────────────────── */}
                        {messages.length <= 2 && (
                            <div className="px-4 pb-2 flex flex-wrap gap-1.5 shrink-0">
                                {SUGGESTIONS.slice(0, 4).map((s) => (
                                    <button
                                        key={s}
                                        onClick={() => handleSend(s)}
                                        className="text-[10px] px-2.5 py-1 rounded-full font-medium transition-all duration-200 cursor-pointer border-0"
                                        style={{
                                            background: "var(--surface-100)",
                                            color: "var(--site-text-muted)",
                                            border: "1px solid var(--surface-300)",
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.borderColor =
                                                "rgba(5,200,173,0.5)";
                                            e.currentTarget.style.color = "#05c8ad";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.borderColor = "var(--surface-300)";
                                            e.currentTarget.style.color = "var(--site-text-muted)";
                                        }}
                                    >
                                        {s}
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* ── input bar ────────────────────────────────────────── */}
                        <div
                            className="px-4 py-3 shrink-0 flex items-center gap-2"
                            style={{
                                borderTop: "1px solid var(--surface-300)",
                                background: "var(--surface-100)",
                            }}
                        >
                            <input
                                ref={inputRef}
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder="Ask me anything..."
                                className="flex-1 bg-transparent text-xs text-[var(--site-text)] placeholder:text-[var(--site-text-muted)] outline-none border-0"
                            />
                            <button
                                onClick={() => handleSend()}
                                disabled={!input.trim()}
                                className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 cursor-pointer border-0 shrink-0"
                                style={{
                                    background: input.trim()
                                        ? "linear-gradient(135deg, #05c8ad, #4a38ed)"
                                        : "var(--surface-200)",
                                    opacity: input.trim() ? 1 : 0.5,
                                }}
                            >
                                <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="white"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <line x1="22" y1="2" x2="11" y2="13" />
                                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                                </svg>
                            </button>
                        </div>

                        {/* ── footer branding ──────────────────────────────────── */}
                        <div className="text-center py-1.5 shrink-0"
                            style={{
                                background: "var(--surface-100)",
                                borderTop: "1px solid rgba(255,255,255,0.03)",
                            }}
                        >
                            <p className="text-[9px] text-[var(--site-text-muted)] opacity-50">
                                Powered by Eshban.dev • AI Portfolio Assistant
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
