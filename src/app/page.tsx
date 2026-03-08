"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  HiOutlineArrowRight,
  HiOutlineCodeBracket,
  HiOutlineRocketLaunch,
  HiOutlineCpuChip,
  HiOutlineSquares2X2,
  HiOutlineHeart,
  HiOutlineLightBulb,
  HiOutlineEye,
  HiOutlineArrowPath,
  HiOutlineShieldCheck,
  HiOutlineCheckCircle,
  HiOutlineChatBubbleLeftRight,
  HiOutlineAcademicCap,
  HiOutlineClock,
  HiOutlineUserGroup,
  HiOutlineSparkles,
  HiOutlinePuzzlePiece,
  HiOutlineBriefcase,
  HiOutlineTrophy,
  HiOutlineDocumentCheck,
  HiOutlineWrenchScrewdriver,
  HiOutlineClipboardDocumentCheck,
  HiOutlineBeaker,
  HiOutlineCommandLine,
  HiOutlinePaintBrush,
  HiOutlineGlobeAlt,
} from "react-icons/hi2";
import { FaGithub, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaWordpress, FaPhp, FaDatabase, FaBootstrap } from "react-icons/fa6";
import { SiTailwindcss, SiNextdotjs, SiFirebase, SiMysql, SiFlutter, SiExpress, SiCanva, SiFramer } from "react-icons/si";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import PageTransition from "@/components/ui/PageTransition";
import {
  siteConfig,
  stats,
  projects,
  toolkitServices,
  industries,
  experiences,
  softSkillsDetailed,
  technicalProficiency,
  projectMarquee,
  certifications,
  expertise,
  coreValues,
  workingProcess,
  skills,
} from "@/data/site";

const softSkillIcons = [
  HiOutlinePuzzlePiece,
  HiOutlineEye,
  HiOutlineChatBubbleLeftRight,
  HiOutlineArrowPath,
  HiOutlineClock,
  HiOutlineUserGroup,
  HiOutlineSparkles,
  HiOutlineAcademicCap,
  HiOutlineShieldCheck,
  HiOutlineRocketLaunch,
];

const expertiseIcons = [
  HiOutlineCodeBracket,
  HiOutlineCpuChip,
  HiOutlineLightBulb,
  HiOutlineSquares2X2,
  HiOutlineSparkles,
  HiOutlineRocketLaunch,
];

const valueIcons = [
  HiOutlineHeart,
  HiOutlineCodeBracket,
  HiOutlineLightBulb,
  HiOutlineShieldCheck,
  HiOutlineEye,
  HiOutlineArrowPath,
];

const processIcons = [
  HiOutlineClipboardDocumentCheck,
  HiOutlineDocumentCheck,
  HiOutlinePaintBrush,
  HiOutlineCommandLine,
  HiOutlineBeaker,
  HiOutlineRocketLaunch,
];

// Vibrant color palette for cards
const vibrantColors = [
  "#06b6d4", // cyan
  "#8b5cf6", // violet
  "#f43f5e", // rose
  "#f59e0b", // amber
  "#10b981", // emerald
  "#3b82f6", // blue
  "#ec4899", // pink
  "#14b8a6", // teal
  "#f97316", // orange
  "#6366f1", // indigo
  "#84cc16", // lime
  "#ef4444", // red
  "#a855f7", // purple
  "#22d3ee", // sky
  "#eab308", // yellow
  "#2dd4bf", // teal-light
];

const statColors = ["#06b6d4", "#8b5cf6", "#f59e0b", "#10b981"];
const expertiseColors = ["#3b82f6", "#8b5cf6", "#f59e0b", "#ec4899", "#06b6d4", "#10b981"];
const valueColors = ["#f43f5e", "#3b82f6", "#f59e0b", "#10b981", "#8b5cf6", "#06b6d4"];
const processColors = ["#06b6d4", "#8b5cf6", "#ec4899", "#f59e0b", "#10b981", "#3b82f6"];
const aboutColors = ["#06b6d4", "#8b5cf6", "#f59e0b", "#10b981"];
const certColors = ["#f43f5e", "#3b82f6", "#10b981", "#8b5cf6", "#f59e0b", "#06b6d4", "#ec4899", "#6366f1"];
const expColors = ["#06b6d4", "#8b5cf6"];

const techTools = [
  { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
  { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Node.js", icon: FaNodeJs, color: "#339933" },
  { name: "PHP", icon: FaPhp, color: "#777BB4" },
  { name: "WordPress", icon: FaWordpress, color: "#21759B" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "Python", icon: FaPython, color: "#3776AB" },
  { name: "React Native", icon: FaReact, color: "#61DAFB" },
  { name: "Flutter", icon: SiFlutter, color: "#02569B" },
  { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
  { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
  { name: "Express", icon: SiExpress, color: "#ffffff" },
  { name: "Canva", icon: SiCanva, color: "#00C4CC" },
  { name: "VS Code", icon: HiOutlineCodeBracket, color: "#007ACC" },
  { name: "Git", icon: HiOutlineCommandLine, color: "#F05032" },
];

export default function HomePage() {
  return (
    <PageTransition>
      {/* ===================== 1. HERO SECTION ===================== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 z-10">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 text-[11px] font-bold tracking-[0.2em] uppercase rounded-full bg-surface-100/50 backdrop-blur-md border border-white/10 text-teal-400 shadow-2xl">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                </span>
                Available for new projects
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
              className="text-5xl md:text-7xl lg:text-9xl font-black text-site-text mb-8 tracking-tighter leading-[0.9] text-balance"
            >
              Building digital{" "}
              <span className="gradient-text italic px-2">masterpieces</span>
              <br />
              for the modern web.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
              className="text-site-text-muted text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-medium"
            >
              {siteConfig.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <Button href="/projects" variant="primary" size="lg" icon={<HiOutlineArrowRight />}>
                Explore My Work
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Get In Touch
              </Button>
            </motion.div>
          </div>

          {/* Floating Tech Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-20 flex items-center justify-center gap-4 flex-wrap"
          >
            {["React", "Next.js", "JavaScript", "WordPress", "Tailwind"].map(
              (tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + i * 0.1, type: "spring" }}
                  className="px-5 py-2.5 text-xs font-bold uppercase tracking-[0.1em] rounded-xl bg-surface-100 backdrop-blur-lg border border-surface-300 text-site-text-muted hover:text-teal-400 hover:border-teal-500/50 transition-all duration-300 shadow-sm"
                >
                  {tech}
                </motion.span>
              )
            )}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-7 h-12 rounded-full border-2 border-surface-300 flex items-start justify-center p-2"
          >
            <motion.div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
          </motion.div>
        </motion.div>
      </section>

      {/* ===================== 2. STATS SECTION ===================== */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <Card key={stat.label} delay={i * 0.1} className="text-center py-10" accentColor={statColors[i % statColors.length]}>
                <div className="text-4xl md:text-5xl font-black text-site-text mb-3 tracking-tighter">
                  <AnimatedCounter
                    end={parseInt(stat.value)}
                    suffix={stat.value.includes("+") ? "+" : stat.value.includes("%") ? "%" : ""}
                  />
                </div>
                <p className="text-site-text-muted text-xs font-bold uppercase tracking-widest">{stat.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== 3. PROJECT MARQUEE SECTION ===================== */}
      <section className="py-24 relative overflow-hidden bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <SectionHeading
            label="Ecosystem"
            title="Professional Portfolio Showcase"
            subtitle="A curated journey through high-performance web applications and creative digital strategies."
          />
        </div>
        <div className="relative group">
          <div className="flex animate-marquee gap-8 px-4">
            {[...projectMarquee, ...projectMarquee].map((item, i) => {
              const color = vibrantColors[i % vibrantColors.length];
              return (
                <div
                  key={`${item.title}-${i}`}
                  className="flex-shrink-0 w-80 glass-card vibrant-card rounded-2xl p-8 transition-all duration-500"
                  style={{ '--card-accent': color, '--card-accent-10': `${color}1a`, '--card-accent-20': `${color}33`, '--card-accent-30': `${color}4d`, '--card-accent-40': `${color}66` } as React.CSSProperties}
                >
                  <h3 className="text-site-text font-bold text-xl mb-3 font-heading transition-colors" style={{ color: color }}>
                    {item.title}
                  </h3>
                  <p className="text-site-text-muted text-sm leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>);
            })}
          </div>
        </div>
        <div className="text-center mt-12">
          <Button href="/projects" variant="outline" size="lg" icon={<HiOutlineArrowRight />}>
            Discover All Projects
          </Button>
        </div>
      </section>

      {/* ===================== 4. FEATURED WORK / SELECTED PROJECTS ===================== */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Featured Work"
            title="Selected Projects"
            subtitle="A deep dive into complex web builds where performance meets pixel-perfect execution."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects
              .filter((p) => p.featured)
              .map((project, i) => (
                <Card key={project.title} delay={i * 0.1} className="group overflow-hidden p-0 flex flex-col h-full bg-surface-100">
                  <div className="relative h-60 overflow-hidden shrink-0">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-site-bg via-transparent to-transparent opacity-90" />
                    <span className="absolute top-4 left-4 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest rounded-full bg-teal-500/20 text-teal-400 border border-teal-500/20 backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-site-text font-bold text-2xl mb-3 group-hover:text-teal-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-site-text-muted text-sm leading-relaxed mb-6 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="px-3 py-1 text-[10px] uppercase font-bold tracking-widest rounded-md bg-surface-200 text-site-text-muted border border-surface-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
          </div>
          <div className="text-center mt-16">
            <Button href="/projects" size="lg" variant="primary" icon={<HiOutlineArrowRight />}>
              View Comprehensive Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* ===================== 5. ABOUT ME SECTION ===================== */}
      <section className="py-32 bg-white/[0.01] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Introduction"
            title="About Me"
            subtitle="Front-end Developer & React Native Enthusiast"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            >
              <div className="glass-card rounded-3xl p-10 border border-surface-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-[0.03]">
                  <HiOutlineCodeBracket className="w-40 h-40" />
                </div>
                <p className="text-site-text-muted text-lg leading-relaxed mb-6 relative z-10">
                  I&apos;m a passionate Frontend Web Developer specializing in HTML, CSS, JavaScript 👋 with a keen interest in React Native 📱. I believe in writing clean, maintainable code 🧼 and creating UI/UX Design for Responsive and User-Friendly Websites 😊 that provide AI-enhanced Digital Solutions for Modern Websites 🌍.
                </p>
                <div className="flex flex-wrap gap-3 relative z-10">
                  <Button href="/about" variant="primary" size="md" icon={<HiOutlineArrowRight />}>
                    About Me
                  </Button>
                  <Button href={siteConfig.socials.github} variant="outline" size="md" external icon={<FaGithub />}>
                    GitHub
                  </Button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1], delay: 0.2 }}
              className="space-y-6"
            >
              {[
                { label: "Specialization", value: "Frontend Development & UI/UX Design" },
                { label: "Focus", value: "Responsive Website Design & Interactive Web UI" },
                { label: "Technologies", value: "React, Next.js, JavaScript, WordPress" },
                { label: "Location", value: siteConfig.location },
              ].map((item, i) => (
                <div key={item.label} className="glass-card vibrant-card rounded-xl p-5 flex items-center gap-4 group transition-all duration-300" style={{ '--card-accent': aboutColors[i], '--card-accent-10': `${aboutColors[i]}1a`, '--card-accent-20': `${aboutColors[i]}33`, '--card-accent-30': `${aboutColors[i]}4d`, '--card-accent-40': `${aboutColors[i]}66` } as React.CSSProperties}>
                  <div className="w-2 h-2 rounded-full shrink-0 group-hover:scale-150 transition-transform" style={{ backgroundColor: aboutColors[i] }} />
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest" style={{ color: aboutColors[i] }}>{item.label}</span>
                    <p className="text-site-text font-semibold text-sm mt-1">{item.value}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===================== 6. TECHNOLOGIES & CREATIVE TOOLS ===================== */}
      <section className="py-32 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Tech Stack"
            title="Technologies & Creative Tools"
            subtitle="A comprehensive toolkit spanning frontend, backend, mobile, and design technologies."
          />

          <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-10 gap-4 md:gap-6">
            {techTools.map((tool, i) => {
              const Icon = tool.icon;
              return (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.4, delay: i * 0.03, type: "spring", stiffness: 200 }}
                  whileHover={{ y: -8, scale: 1.1 }}
                  className="flex flex-col items-center gap-3 group cursor-pointer"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl glass-card vibrant-card border flex items-center justify-center transition-all duration-300" style={{ '--card-accent': tool.color, '--card-accent-10': `${tool.color}1a`, '--card-accent-20': `${tool.color}33`, '--card-accent-30': `${tool.color}4d`, '--card-accent-40': `${tool.color}66` } as React.CSSProperties}>
                    <Icon className="w-8 h-8 md:w-10 md:h-10 transition-colors duration-300" style={{ color: tool.color }} />
                  </div>
                  <span className="text-site-text-muted text-[10px] md:text-xs font-bold uppercase tracking-wider text-center transition-colors" style={{ '--hover-color': tool.color } as React.CSSProperties}>
                    {tool.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================== 7. CORE SOFT SKILLS ===================== */}
      <section className="py-32 relative bg-white/[0.01] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Strengths"
            title="Core Soft Skills"
            subtitle="Beyond technical expertise — the professional qualities that drive impactful digital experiences."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {softSkillsDetailed.map((skill, i) => {
              const Icon = softSkillIcons[i % softSkillIcons.length];
              const color = vibrantColors[i % vibrantColors.length];
              return (
                <Card key={skill.title} delay={i * 0.05} className="group h-full flex flex-col items-center text-center p-6" accentColor={color}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-500 border" style={{ backgroundColor: `${color}1a`, borderColor: `${color}33`, color: color }}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-site-text font-bold text-sm mb-2 group-hover:transition-colors" style={{ '--hover-color': color } as React.CSSProperties}>
                    {skill.title}
                  </h3>
                  <p className="text-site-text-muted text-xs leading-relaxed">
                    {skill.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================== 8. PROFESSIONAL ACHIEVEMENTS (CERTIFICATIONS PREVIEW) ===================== */}
      <section className="py-32 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Credentials"
            title="Professional Achievements"
            subtitle="Verified certifications from industry-leading institutions and platforms."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.slice(0, 8).map((cert, i) => {
              const color = certColors[i % certColors.length];
              return (
                <Card key={cert.title} delay={i * 0.08} className="group overflow-hidden p-0 flex flex-col h-full bg-surface-100" accentColor={color}>
                  <div className="relative h-44 overflow-hidden shrink-0 bg-surface-200 flex items-center justify-center">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-site-bg via-transparent to-transparent opacity-60" />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="text-site-text font-bold text-sm mb-1.5 transition-colors line-clamp-2">
                      {cert.title}
                    </h3>
                    <p className="text-xs font-bold tracking-wider uppercase mb-2" style={{ color: color }}>
                      {cert.platform}
                    </p>
                    <p className="text-site-text-muted text-xs leading-relaxed line-clamp-2 mt-auto">
                      {cert.description}
                    </p>
                    <span className="inline-block mt-3 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest rounded w-fit" style={{ backgroundColor: `${color}1a`, color: color, border: `1px solid ${color}33` }}>
                      {cert.year}
                    </span>
                  </div>
                </Card>);
            })}
          </div>

          <div className="text-center mt-16">
            <Button href="/certifications" size="lg" variant="primary" icon={<HiOutlineArrowRight />}>
              All Certifications
            </Button>
          </div>
        </div>
      </section>

      {/* ===================== 9. EXPERTISE SECTION ===================== */}
      <section className="py-32 bg-white/[0.01] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Specialization"
            title="Core Expertise & Tech Focus"
            subtitle="Bridging the gap between complex logic and stunning visual experiences using modern technologies."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((item, i) => {
              const Icon = expertiseIcons[i % expertiseIcons.length];
              const color = expertiseColors[i % expertiseColors.length];
              return (
                <Card key={item.title} delay={i * 0.1} className="group h-full flex flex-col items-start text-left p-8" accentColor={color}>
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500 border" style={{ backgroundColor: `${color}1a`, borderColor: `${color}33`, color: color }}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-site-text font-bold text-xl mb-4 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-site-text-muted text-sm leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================== 10. CORE VALUES ===================== */}
      <section className="py-32 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Philosophy"
            title="My Core Values"
            subtitle="The guiding principles that define my approach to every project and professional relationship."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, i) => {
              const Icon = valueIcons[i % valueIcons.length];
              const color = valueColors[i % valueColors.length];
              return (
                <Card key={value.title} delay={i * 0.1} className="group relative overflow-hidden h-full p-8" accentColor={color}>
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500 border" style={{ backgroundColor: `${color}1a`, borderColor: `${color}33`, color: color }}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-site-text font-bold text-xl mb-4 transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-site-text-muted text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================== 11. TECHNICAL PROFICIENCY ===================== */}
      <section className="py-32 bg-white/[0.01] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Proficiency"
            title="Technical Proficiency"
            subtitle="A quantitative overview of my technical skills and proficiency levels. I constantly strive to learn and improve."
          />

          <div className="max-w-4xl mx-auto space-y-8">
            {technicalProficiency.map((item, i) => {
              const color = vibrantColors[i % vibrantColors.length];
              return (
                <motion.div
                  key={item.skill}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-site-text font-bold text-sm uppercase tracking-wider transition-colors" style={{ '--hover-color': color } as React.CSSProperties}>
                      {item.skill}
                    </span>
                    <span className="font-black text-lg tabular-nums" style={{ color: color }}>
                      {item.level}%
                    </span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-surface-200 border border-surface-300 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.level}%` }}
                      viewport={{ once: true, margin: "-30px" }}
                      transition={{ duration: 1.2, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
                      className="h-full rounded-full relative"
                      style={{ background: `linear-gradient(90deg, ${color}, ${color}99)` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 rounded-full" />
                    </motion.div>
                  </div>
                </motion.div>);
            })}
          </div>
        </div>
      </section>

      {/* ===================== 12. WORKING PROCESS ===================== */}
      <section className="py-32 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Workflow"
            title="My Working Process"
            subtitle="A structured, systematic approach to delivering exceptional digital products from concept to deployment."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {workingProcess.map((process, i) => {
              const Icon = processIcons[i % processIcons.length];
              const color = processColors[i % processColors.length];
              return (
                <Card key={process.title} delay={i * 0.1} className="group relative overflow-hidden h-full p-8" accentColor={color}>
                  {/* Step number background */}
                  <div className="absolute top-4 right-4 text-7xl font-black transition-colors duration-500 select-none leading-none" style={{ color: `${color}15` }}>
                    {process.step}
                  </div>
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500 border" style={{ backgroundColor: `${color}1a`, borderColor: `${color}33`, color: color }}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <div className="inline-block mb-3 px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full border" style={{ backgroundColor: `${color}1a`, color: color, borderColor: `${color}33` }}>
                      Step {process.step}
                    </div>
                    <h3 className="text-site-text font-bold text-xl mb-3 transition-colors">
                      {process.title}
                    </h3>
                    <p className="text-site-text-muted text-sm leading-relaxed">
                      {process.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================== 13. EXPERIENCE SECTION ===================== */}
      <section className="py-32 bg-white/[0.01] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Journey"
            title="Professional Experience"
            subtitle="Delivering high-value digital solutions across various industries and technological landscapes."
          />
          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <Card key={exp.company + i} delay={i * 0.1} className="relative p-10 group overflow-hidden" accentColor={expColors[i % expColors.length]}>
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
                  <HiOutlineBriefcase className="w-48 h-48" />
                </div>
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <h3 className="text-2xl font-bold text-site-text mb-2 group-hover:text-teal-400 transition-colors">{exp.role}</h3>
                    <p className="text-teal-400 font-bold tracking-wider uppercase text-sm mb-4">{exp.company}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="px-2.5 py-1 text-[10px] font-bold uppercase rounded bg-surface-200 text-site-text-muted border border-surface-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-left md:text-right">
                    <span className="px-4 py-1.5 rounded-full bg-surface-300 text-site-text text-xs font-bold uppercase tracking-widest border border-surface-400/20">
                      {exp.period}
                    </span>
                  </div>
                </div>
                <p className="text-site-text-muted text-base leading-relaxed max-w-4xl relative z-10">
                  {exp.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== 14. CTA SECTION ===================== */}
      <section className="py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-navy-500/5 -z-10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-site-text mb-8 tracking-tighter leading-tight">
              Ready to kickstart your <br />
              <span className="gradient-text italic">next digital project?</span>
            </h2>
            <p className="text-site-text-muted text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
              Whether you need a full-scale web application or a sleek business presence,
              I am here to turn your vision into a digital reality.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button href="/contact" size="lg" variant="primary" icon={<HiOutlineArrowRight />}>
                Start a Conversation
              </Button>
              <Button href={siteConfig.socials.github} variant="secondary" size="lg" external icon={<FaGithub />}>
                View Source Code
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
