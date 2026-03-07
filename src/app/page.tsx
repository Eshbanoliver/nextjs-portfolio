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
} from "react-icons/hi2";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import PageTransition from "@/components/ui/PageTransition";
import { stats, projects, toolkitServices, industries, experiences, skills } from "@/data/site";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
};

export default function HomePage() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-[128px] animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-navy-500/10 rounded-full blur-[128px] animate-pulse-slow" style={{ animationDelay: "2s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-500/5 rounded-full blur-[150px]" />
          {/* Grid Pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

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
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] font-heading"
            >
              Building Modern Web
              <br />
              <span className="gradient-text">Experiences</span> &{" "}
              <span className="gradient-text-accent">Scalable</span>
              <br />
              Digital Solutions
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-surface-400 max-w-3xl mx-auto mb-10 leading-relaxed"
            >
              Frontend Developer specializing in high-performance websites,
              web applications, and modern UI systems. Transforming ideas into
              pixel-perfect, production-ready digital experiences.
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
              <Button href="/toolkit" variant="secondary" size="lg">
                Explore Toolkit
              </Button>
            </motion.div>

            {/* Floating Tech Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="mt-16 flex items-center justify-center gap-6 flex-wrap"
            >
              {["React", "Next.js", "TypeScript", "Node.js", "Tailwind"].map(
                (tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + i * 0.1 }}
                    className="px-4 py-2 text-xs font-medium rounded-full bg-surface-800/50 text-surface-400 border border-surface-700/30"
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
            className="w-6 h-10 rounded-full border-2 border-surface-600 flex items-start justify-center p-1.5"
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
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 font-heading">
                  <AnimatedCounter
                    end={parseInt(stat.value)}
                    suffix={stat.value.includes("+") ? "+" : ""}
                  />
                </div>
                <p className="text-surface-400 text-sm">{stat.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Portfolio"
            title="Featured Projects"
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
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-900 via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 px-3 py-1 text-xs font-medium rounded-full bg-teal-500/20 text-teal-400 border border-teal-500/20">
                      {project.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-2 font-heading">
                      {project.title}
                    </h3>
                    <p className="text-surface-400 text-sm leading-relaxed mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs rounded-md bg-surface-800/50 text-surface-400 border border-surface-700/30"
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

      {/* Toolkit Preview */}
      <section className="py-24 relative bg-surface-900/30">
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
                  <h3 className="text-white font-semibold mb-2 font-heading">
                    {service.title}
                  </h3>
                  <p className="text-surface-400 text-sm leading-relaxed mb-4">
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
                <h3 className="text-white text-sm font-semibold font-heading">
                  {industry.name}
                </h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Highlights */}
      <section className="py-24 relative bg-surface-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Career"
            title="Experience Highlights"
            subtitle="A track record of delivering exceptional results across leading tech companies"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experiences.slice(0, 2).map((exp, i) => (
              <Card key={exp.company} delay={i * 0.15}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br from-teal-500/20 to-navy-500/20 border border-teal-500/20 flex items-center justify-center text-teal-400 font-bold text-sm font-heading">
                    {exp.company
                      .split(" ")
                      .map((w) => w[0])
                      .join("")
                      .slice(0, 2)}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg font-heading">
                      {exp.role}
                    </h3>
                    <p className="text-teal-400 text-sm font-medium">
                      {exp.company}
                    </p>
                    <p className="text-surface-500 text-xs mt-1">{exp.period}</p>
                    <p className="text-surface-400 text-sm mt-3 leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs rounded-md bg-surface-800/50 text-surface-400 border border-surface-700/30"
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
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-teal-500/5 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-teal-500/10 rounded-full blur-[100px]" />
          <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-accent-500/10 rounded-full blur-[100px]" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-heading">
              Let&apos;s Build Something{" "}
              <span className="gradient-text">Amazing Together</span>
            </h2>
            <p className="text-surface-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Have a project in mind? I&apos;d love to discuss how we can work together
              to bring your vision to life with cutting-edge technology and
              stunning design.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contact" size="lg" icon={<HiOutlineArrowRight />}>
                Start a Conversation
              </Button>
              <Button href="/toolkit" variant="secondary" size="lg">
                View Services
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
