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
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold tracking-[0.15em] uppercase rounded-full bg-teal-500/10 text-teal-400 border border-teal-500/20">
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                Available for new projects
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-site-text mb-6 leading-[1.1] font-heading"
            >
              Building Digital
              <br />
              <span className="gradient-text">Masterpieces</span> &{" "}
              <br />
              <span className="gradient-text-accent">Modern</span>
              <br />
              Web Solutions
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-site-text-muted max-w-3xl mx-auto mb-10 leading-relaxed"
            >
              Senior Frontend Developer &amp; UI/UX Designer specializing in Responsive Website Design,
              Interactive Web UI, and high-performance web experiences.
              Transforming ideas into pixel-perfect, production-ready digital experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button
                href="/projects"
                size="lg"
                icon={<HiOutlineArrowRight />}
              >
                View Projects
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                Contact Me
              </Button>
            </motion.div>

            {/* Floating Tech Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="mt-16 flex items-center justify-center gap-6 flex-wrap"
            >
              {["React", "Next.js", "JavaScript", "WordPress", "Tailwind"].map(
                (tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + i * 0.1 }}
                    className="px-4 py-2 text-xs font-medium rounded-full bg-surface-200 text-site-text-muted border border-surface-300"
                  >
                    {tech}
                  </motion.span>
                )
              )}
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 rounded-full border-2 border-surface-300 flex items-start justify-center p-1.5"
          >
            <motion.div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <Card key={stat.label} delay={i * 0.1} className="text-center py-8">
                <div className="text-3xl md:text-4xl font-bold text-site-text mb-2 font-heading">
                  <AnimatedCounter
                    end={parseInt(stat.value)}
                    suffix={stat.value.includes("+") ? "+" : stat.value.includes("%") ? "%" : ""}
                  />
                </div>
                <p className="text-site-text-muted text-sm">{stat.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Marquee / Portfolio Scroll */}
      <section className="py-16 relative overflow-hidden bg-surface-100/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <SectionHeading
            label="Portfolio"
            title="Professional Portfolio of Web Development Projects"
            subtitle="A glimpse into my diverse Web Development Portfolio of digital innovations and creative solutions."
          />
        </div>
        <div className="relative">
          <div className="flex animate-marquee gap-6 px-4">
            {[...projectMarquee, ...projectMarquee].map((item, i) => (
              <div
                key={`${item.title}-${i}`}
                className="flex-shrink-0 w-72 glass-card rounded-2xl p-6 border border-surface-300 hover:border-teal-500/30 transition-all duration-300"
              >
                <h3 className="text-site-text font-semibold text-lg mb-2 font-heading group-hover:text-teal-400 transition-colors duration-300">{item.title}</h3>
                <p className="text-site-text-muted text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-8">
          <Button href="/projects" variant="outline" icon={<HiOutlineArrowRight />}>
            Discover More Projects
          </Button>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Featured"
            title="Featured Work"
            subtitle="A selection of recent projects that showcase my expertise in building modern web applications"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects
              .filter((p) => p.featured)
              .map((project, i) => (
                <Card key={project.title} delay={i * 0.15} className="group overflow-hidden p-0">
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-site-bg via-transparent to-transparent opacity-80" />
                    <span className="absolute top-4 left-4 px-3 py-1 text-xs font-medium rounded-full bg-teal-500/20 text-teal-400 border border-teal-500/20">
                      {project.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-site-text mb-2 font-heading group-hover:text-teal-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-site-text-muted text-sm leading-relaxed mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs rounded-md bg-surface-200 text-site-text-muted border border-surface-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
          </div>
          <div className="text-center mt-12">
            <Button href="/projects" variant="outline" icon={<HiOutlineArrowRight />}>
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      {/* About Me Preview */}
      <section className="py-24 relative bg-surface-100/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block mb-4 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] uppercase rounded-full bg-teal-500/10 text-teal-400 border border-teal-500/20">
                About Me
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-site-text mb-6 font-heading">
                Front-end Developer &{" "}
                <span className="gradient-text">React Native Enthusiast</span>
              </h2>
              <p className="text-site-text-muted leading-relaxed mb-8">
                I&apos;m a passionate Frontend Web Developer specializing in HTML, CSS, JavaScript
                with a keen interest in React Native. I believe in writing clean, maintainable code
                and creating UI/UX Design for Responsive and User-Friendly Websites that provide
                AI-enhanced Digital Solutions for Modern Websites.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/about" icon={<HiOutlineArrowRight />}>
                  About Me
                </Button>
                <Button
                  href={siteConfig.socials.github}
                  variant="outline"
                  external
                  icon={<FaGithub />}
                >
                  GitHub
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full max-w-md mx-auto">
                <div className="relative rounded-2xl overflow-hidden border border-surface-300 shadow-2xl">
                  <Image
                    src="/images/profile.png"
                    alt={`${siteConfig.name} - Frontend Developer`}
                    width={500}
                    height={600}
                    className="object-cover"
                  />
                </div>
                {/* Floating Badge */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  className="absolute -bottom-4 -left-4 glass-card rounded-xl p-4 border border-teal-500/20 shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-400">
                      <HiOutlineCodeBracket className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-site-text text-sm font-semibold">{stats[0].value}</p>
                      <p className="text-site-text-muted text-xs">{stats[0].label}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Soft Skills */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Skills"
            title="Core Soft Skills"
            subtitle="The professional qualities that drive exceptional project outcomes"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {softSkillsDetailed.map((skill, i) => {
              const Icon = softSkillIcons[i % softSkillIcons.length];
              return (
                <Card key={skill.title} delay={i * 0.06} className="text-center group">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 group-hover:bg-teal-500/20 transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-site-text font-semibold text-sm mb-2 font-heading group-hover:text-teal-400 transition-colors">
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

      {/* Professional Achievements / Certifications Preview */}
      <section className="py-24 relative bg-surface-100/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Achievements"
            title="Professional Achievements"
            subtitle="Verified certifications from industry-leading institutions and platforms."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.slice(0, 4).map((cert, i) => (
              <Card key={cert.title} delay={i * 0.1} className="group">
                <div className="w-10 h-10 rounded-lg bg-accent-500/10 border border-accent-500/20 flex items-center justify-center text-accent-400 mb-3 group-hover:scale-110 transition-transform duration-300">
                  <HiOutlineTrophy className="w-5 h-5" />
                </div>
                <h3 className="text-site-text font-semibold text-sm mb-1 font-heading group-hover:text-teal-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-teal-400 text-xs font-medium mb-1">{cert.platform}</p>
                <p className="text-site-text-muted text-xs">{cert.year}</p>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button href="/certifications" variant="outline" icon={<HiOutlineArrowRight />}>
              All Certifications
            </Button>
          </div>
        </div>
      </section>

      {/* My Expertise */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Expertise"
            title="My Expertise"
            subtitle="Comprehensive skill set spanning the full development lifecycle"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.map((item, i) => {
              const Icon = expertiseIcons[i % expertiseIcons.length];
              return (
                <Card key={item.title} delay={i * 0.1} className="group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br from-teal-500/20 to-navy-500/20 border border-teal-500/20 flex items-center justify-center text-teal-400 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-site-text font-semibold text-lg mb-2 font-heading group-hover:text-teal-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-site-text-muted text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 relative bg-surface-100/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Values"
            title="My Core Values"
            subtitle="Core principles that guide every project and relationship"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, i) => {
              const Icon = valueIcons[i % valueIcons.length];
              return (
                <Card key={value.title} delay={i * 0.1} className="text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-site-text font-semibold mb-2 font-heading">
                    {value.title}
                  </h3>
                  <p className="text-site-text-muted text-sm leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical Proficiency */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Proficiency"
            title="Technical Proficiency"
            subtitle="A quantitative overview of my technical skills and proficiency levels. I constantly strive to learn and improve."
          />
          <div className="max-w-3xl mx-auto space-y-6">
            {technicalProficiency.map((item, i) => (
              <motion.div
                key={item.skill}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-site-text font-medium text-sm">{item.skill}</span>
                  <span className="text-teal-400 text-sm font-semibold">{item.level}%</span>
                </div>
                <div className="h-2.5 bg-surface-200 rounded-full overflow-hidden border border-surface-300">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: i * 0.1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-teal-500 to-teal-400 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Toolkit Preview */}
      <section className="py-24 relative bg-surface-100/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Services"
            title="Developer Toolkit"
            subtitle="Comprehensive digital solutions tailored for your business needs"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {toolkitServices.slice(0, 4).map((service, i) => {
              const icons = [
                HiOutlineCodeBracket,
                HiOutlineRocketLaunch,
                HiOutlineCpuChip,
                HiOutlineSquares2X2,
              ];
              const Icon = icons[i % icons.length];
              return (
                <Card key={service.slug} delay={i * 0.1} className="group text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 group-hover:bg-teal-500/20 transition-all duration-300">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-site-text font-semibold mb-2 font-heading group-hover:text-teal-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-site-text-muted text-sm leading-relaxed mb-4">
                    {service.shortDesc.slice(0, 80)}...
                  </p>
                  <Link
                    href={`/toolkit/${service.slug}`}
                    className="inline-flex items-center gap-1 text-teal-400 text-sm font-medium hover:gap-2 transition-all duration-300"
                  >
                    Learn More <HiOutlineArrowRight className="w-4 h-4" />
                  </Link>
                </Card>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Button href="/toolkit" variant="outline" icon={<HiOutlineArrowRight />}>
              Explore Full Toolkit
            </Button>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Industries"
            title="Industries Served"
            subtitle="Delivering tailored solutions across diverse business sectors"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.slice(0, 8).map((industry, i) => (
              <Card key={industry.name} delay={i * 0.08} className="text-center py-8 group">
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center text-accent-400 group-hover:bg-accent-500/20 transition-all duration-300">
                  <HiOutlineSquares2X2 className="w-6 h-6" />
                </div>
                <h3 className="text-site-text font-semibold text-sm font-heading group-hover:text-teal-400 transition-colors">
                  {industry.name}
                </h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* My Working Process */}
      <section className="py-24 relative bg-surface-100/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Process"
            title="My Working Process"
            subtitle="A proven methodology that ensures exceptional results every time"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {workingProcess.map((item, i) => (
              <Card key={item.step} delay={i * 0.1} className="relative">
                <span className="text-5xl font-bold text-surface-200 font-heading absolute top-4 right-4">
                  {item.step}
                </span>
                <div className="relative">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center text-white mb-4 shadow-lg shadow-teal-500/20">
                    <HiOutlineCheckCircle className="w-5 h-5" />
                  </div>
                  <h3 className="text-site-text font-semibold text-lg mb-2 font-heading">
                    {item.title}
                  </h3>
                  <p className="text-site-text-muted text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Highlights */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Career"
            title="Experience Highlights"
            subtitle="A track record of delivering exceptional results across leading tech companies"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experiences.slice(0, 2).map((exp, i) => (
              <Card key={exp.company + exp.role} delay={i * 0.15}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br from-teal-500/20 to-navy-500/20 border border-teal-500/20 flex items-center justify-center text-teal-400 font-bold text-sm font-heading">
                    {exp.company
                      .split(" ")
                      .map((w) => w[0])
                      .join("")
                      .slice(0, 2)}
                  </div>
                  <div>
                    <h3 className="text-site-text font-semibold text-lg font-heading group-hover:text-teal-400 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-teal-400 text-sm font-medium">
                      {exp.company}
                    </p>
                    <p className="text-site-text-muted text-xs mt-1">{exp.period}</p>
                    <p className="text-site-text-muted text-sm mt-3 leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs rounded-md bg-surface-200 text-site-text-muted border border-surface-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button href="/experience" variant="outline" icon={<HiOutlineArrowRight />}>
              Full Experience
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-site-text mb-6 font-heading">
              Ready to kickstart your next{" "}
              <span className="gradient-text">digital project?</span>
            </h2>
            <p className="text-site-text-muted text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Have a project in mind or just want to say hi? Feel free to reach out for
              Elementor Website Design, Graphic Design work, or Custom WordPress Development.
              I&apos;m currently open to new opportunities.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contact" size="lg" icon={<HiOutlineArrowRight />}>
                Contact Us
              </Button>
              <Button
                href={siteConfig.socials.github}
                variant="secondary"
                size="lg"
                external
                icon={<FaGithub />}
              >
                GitHub
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
