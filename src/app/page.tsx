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
} from "react-icons/hi2";
import { FaGithub } from "react-icons/fa6";
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

export default function HomePage() {
  return (
    <PageTransition>
      {/* Hero Section */}
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

      {/* Stats Section */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <Card key={stat.label} delay={i * 0.1} className="text-center py-10">
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

      {/* Project Marquee Section */}
      <section className="py-24 relative overflow-hidden bg-surface-50/50 border-y border-surface-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <SectionHeading
            label="Ecosystem"
            title="Professional Portfolio Showcase"
            subtitle="A curated journey through high-performance web applications and creative digital strategies."
          />
        </div>
        <div className="relative group">
          <div className="flex animate-marquee gap-8 px-4">
            {[...projectMarquee, ...projectMarquee].map((item, i) => (
              <div
                key={`${item.title}-${i}`}
                className="flex-shrink-0 w-80 glass-card rounded-2xl p-8 border border-surface-300 hover:border-teal-500/40 transition-all duration-500"
              >
                <h3 className="text-site-text font-bold text-xl mb-3 font-heading group-hover:text-teal-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-site-text-muted text-sm leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-12">
          <Button href="/projects" variant="outline" size="lg" icon={<HiOutlineArrowRight />}>
            Discover All Projects
          </Button>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-32 bg-site-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Specialization"
            title="Core Expertise & Tech Focus"
            subtitle="Bridging the gap between complex logic and stunning visual experiences using modern technologies."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((item, i) => {
              const Icon = expertiseIcons[i % expertiseIcons.length];
              return (
                <Card key={item.title} delay={i * 0.1} className="group h-full flex flex-col items-start text-left p-8">
                  <div className="w-14 h-14 rounded-2xl bg-teal-500/10 flex items-center justify-center text-teal-400 mb-6 group-hover:scale-110 group-hover:bg-teal-500/20 transition-all duration-500 border border-teal-500/20">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-site-text font-bold text-xl mb-4 group-hover:text-teal-400 transition-colors">
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

      {/* Featured Projects Grid */}
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

      {/* Experience Section */}
      <section className="py-32 bg-surface-50/30 border-y border-surface-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Journey"
            title="Professional Experience"
            subtitle="Delivering high-value digital solutions across various industries and technological landscapes."
          />
          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <Card key={exp.company + i} delay={i * 0.1} className="relative p-10 group overflow-hidden">
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

      {/* CTA Section */}
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
              Ready to build something <br />
              <span className="gradient-text italic">legendary?</span>
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
