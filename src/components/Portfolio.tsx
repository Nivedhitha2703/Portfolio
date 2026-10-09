"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  ExternalLink,
  Github,
  GraduationCap,
  Mail,
  Menu,
  Rocket,
  Sparkles,
  X,
  Linkedin,
  Cpu,
  Database,
  Globe,
  Layers3,
  Lightbulb,
  Target,
  Award,
} from "lucide-react";

/* =========================================================
   PROFILE
========================================================= */

const profile = {
  name: "Nivedhitha J.",
  email: "nivedhitha2703@gmail.com",

  github: "https://github.com/Nivedhitha2703",

  linkedin:
    "https://www.linkedin.com/in/nivedhitha-jaysankar-841728382",

  leetcode: "https://leetcode.com/u/Nivedhitha_08/",

  hackerrank:
    "https://www.hackerrank.com/profile/nivedhitha2703",
};

/* =========================================================
   SKILLS
========================================================= */

const skills = [
  {
    title: "Programming",
    icon: Code2,
    description: "Languages for problem-solving and development.",
    items: ["Python", "Java", "C"],
  },
  {
    title: "Web Technologies",
    icon: Globe,
    description: "Building responsive web experiences.",
    items: ["HTML", "CSS", "JavaScript", "React", "TypeScript"],
  },
  {
    title: "Artificial Intelligence",
    icon: BrainCircuit,
    description: "Exploring intelligent and explainable systems.",
    items: ["ML Fundamentals", "XGBoost", "Explainable AI"],
  },
  {
    title: "Data & Developer Tools",
    icon: Database,
    description: "Working with data platforms and development tools.",
    items: ["MySQL", "MongoDB", "Supabase", "Git", "GitHub", "VS Code"],
  },
];

/* =========================================================
   PROJECTS
========================================================= */

const projects = [
  {
    name: "AirShield",
    number: "01",
    type: "AI / Environmental Technology",
    status: "Completed",

    featured: true,

    description:
      "An AI-powered environmental monitoring prototype designed to explore PM2.5 prediction, pollution-risk analysis, data visualisation, and AI-generated environmental insights.",

    tags: ["XGBoost", "Machine Learning", "Data Visualisation"],

    link: "https://air-shield-ivory.vercel.app/",

    repo: "https://github.com/Nivedhitha2703/AirShield",

    icon: BrainCircuit,

    accent: "from-violet-500/20 via-fuchsia-500/10 to-cyan-400/10",
  },

  {
    name: "RicozSpark",
    number: "02",
    type: "Web Application",
    status: "Completed",

    featured: false,

    description:
      "A web application project involving frontend components, routing, authentication flows, and integration with Supabase.",

    tags: ["React", "TypeScript", "Supabase"],

    link: "",

    repo: "",

    icon: Layers3,

    accent: "from-cyan-500/15 to-blue-500/10",
  },

  {
    name: "MentorHub",
    number: "03",
    type: "AI / Learning & Career Planning",
    status: "Ongoing",

    featured: false,

    description:
      "An AI-supported learning and career development platform concept focused on personalised goals, career roadmaps, action planning, and progress tracking.",

    tags: ["Next.js", "AI", "Career Guidance"],

    link: "",

    repo: "",

    icon: Rocket,

    accent: "from-fuchsia-500/15 to-violet-500/10",
  },
];

/* =========================================================
   EXPERIENCE
========================================================= */

const experiences = [
  {
    company: "Cargonest Warehousing Technologies Pvt. Ltd.",
    role: "Full Stack Intern",
    date: "September 2026 – Present",

    detail:
      "Developing technical skills through full-stack development work involving Java, React, TypeScript, Git, and Visual Studio Code.",
  },

  {
    company: "Infocs",
    role: "Full Stack in Java Intern",
    date: "June 2026",

    detail:
      "Completed an internship focused on full-stack development with Java.",
  },

  {
    company: "Mindenious",
    role: "Python with Machine Learning Intern",
    date: "April 2026",

    detail:
      "Completed an internship focused on Python programming and machine learning.",
  },
];

/* =========================================================
   CERTIFICATIONS
========================================================= */

const certifications = [
  {
    title: "Prompt Engineering",
    issuer: "Amazon Web Services (AWS)",
    date: "October 2026",
  },

  {
    title: "Introduction to Generative AI and Agents",
    issuer: "Microsoft",
    date: "July 2026",
  },

  {
    title: "Gemini Certification for Students",
    issuer: "Google for Education",
    date: "July 2026",
  },

  {
    title: "Problem Solving (Basic)",
    issuer: "HackerRank",
    date: "2026",
  },

  {
    title: "Python with Machine Learning",
    issuer: "Mindenious",
    date: "June 2026",
  },

  {
    title: "Advanced Diploma in Python Programming",
    issuer: "iNet Technologies",
    date: "October 2025",
  },
];

/* =========================================================
   LEADERSHIP
========================================================= */

const achievements = [
  {
    title: "Smart India Hackathon",
    category: "Disaster Management",

    description:
      "Collaborated on a storm-focused disaster-management solution concept.",

    icon: Sparkles,
  },

  {
    title: "Women Who Master — Logitech",
    category: "Technology Hackathon",

    description:
      "Participated in a technology-focused hackathon in July 2026.",

    icon: Code2,
  },

  {
    title: "BeyondBeta — FarmPower",
    category: "Entrepreneurship & Agriculture",

    description:
      "Led a team exploring a farmer-focused concept for technology-enabled agricultural support.",

    icon: Rocket,
  },
];

/* =========================================================
   INTERESTS
========================================================= */

const interests = [
  "Artificial Intelligence",
  "Machine Learning",
  "AI Consulting",
  "Technology Strategy",
  "Problem Solving",
  "Explainable AI",
  "Software Development",
  "Environmental Technology",
  "Technology-Enabled Agriculture",
];

/* =========================================================
   REUSABLE SECTION HEADING
========================================================= */

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="section-kicker">{eyebrow}</p>

      <h2 className="section-title mt-3">{title}</h2>

      {description && (
        <p className="section-copy mt-4">{description}</p>
      )}
    </div>
  );
}

/* =========================================================
   MAIN PORTFOLIO
========================================================= */

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Experience", "#experience"],
    ["Certifications", "#certifications"],
    ["Contact", "#contact"],
  ];

  return (
    <main className="site-shell overflow-x-clip">
      {/* =====================================================
          NAVIGATION
      ===================================================== */}

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-[#080817]/85 backdrop-blur-2xl">
        <div className="container flex h-[72px] items-center justify-between">
          <a
            href="#home"
            className="shrink-0 text-base font-extrabold tracking-tight"
          >
            <span className="gradient-text">Nivedhitha</span>
            <span className="text-white"> J.</span>
          </a>

          <nav className="hidden items-center gap-4 lg:flex xl:gap-6">
            {navItems.map(([label, href]) => (
              <a
                className="nav-link whitespace-nowrap text-xs font-semibold"
                href={href}
                key={label}
              >
                {label}
              </a>
            ))}

            <a
              href="#projects"
              className="primary-button !px-4 !py-2.5"
            >
              View Work
              <ArrowUpRight size={15} />
            </a>
          </nav>

          <button
            className="rounded-xl border border-white/10 p-2.5 text-white transition hover:border-violet-300/40 lg:hidden"
            onClick={() => setMenuOpen((previous) => !previous)}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {menuOpen && (
          <nav className="container flex flex-col gap-1 border-t border-white/[0.08] py-4 lg:hidden">
            {navItems.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="nav-link rounded-lg px-3 py-3 text-sm"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}

            <a
              href="#projects"
              className="primary-button mt-2 w-fit"
              onClick={() => setMenuOpen(false)}
            >
              View Work
              <ArrowUpRight size={15} />
            </a>
          </nav>
        )}
      </header>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        id="home"
        className="relative flex min-h-screen scroll-mt-24 items-center overflow-hidden pb-16 pt-32"
      >
        <div className="grid-overlay" />

        <div className="pointer-events-none absolute -left-32 top-32 h-80 w-80 rounded-full bg-violet-600/[0.12] blur-[120px]" />

        <div className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-fuchsia-500/[0.08] blur-[130px]" />

        <div className="container relative z-10 grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          {/* LEFT SIDE */}

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10"
          >
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-300/20 bg-violet-400/[0.07] px-4 py-2.5 text-xs font-medium text-violet-200">
              <Sparkles size={14} className="text-cyan-300" />

              Aspiring AI Consultant

              <span className="h-1 w-1 rounded-full bg-violet-300" />

              AI & Machine Learning
            </div>

            <h1 className="max-w-2xl text-5xl font-black leading-[1.08] tracking-[-0.045em] sm:text-6xl lg:text-[66px]">
              Turning Complex Problems Into{" "}
              <span className="gradient-text">
                Intelligent Solutions.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-[#D6D1E8] sm:text-lg">
              I&apos;m Nivedhitha J., a Computer Science Engineering
              student passionate about artificial intelligence,
              machine learning, and the potential of technology to
              solve real-world problems.
            </p>

            <p className="muted mt-4 max-w-lg text-sm leading-7">
              Exploring the intersection of AI, technology, and
              problem-solving as I work toward my goal of becoming
              an AI consultant.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Artificial Intelligence",
                "Machine Learning",
                "Python",
                "XGBoost",
                "Technology Strategy",
              ].map((item) => (
                <span className="tag" key={item}>
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="primary-button">
                Explore My Work
                <ArrowRight size={16} />
              </a>

              <a href="#about" className="secondary-button">
                My Journey
                <ArrowDown size={15} />
              </a>

              <a
                href="/Nivedhitha_J_Resume.pdf"
                className="secondary-button"
                target="_blank"
                rel="noreferrer"
              >
                Resume
                <ArrowUpRight size={15} />
              </a>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <a
                className="rounded-xl border border-white/10 bg-white/[0.035] p-3 text-[#C5B9E9] transition duration-300 hover:-translate-y-1 hover:border-purple-300/40 hover:text-white"
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>

              <a
                className="rounded-xl border border-white/10 bg-white/[0.035] p-3 text-[#C5B9E9] transition duration-300 hover:-translate-y-1 hover:border-purple-300/40 hover:text-white"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>

              <a
                className="rounded-xl border border-white/10 bg-white/[0.035] p-3 text-[#C5B9E9] transition duration-300 hover:-translate-y-1 hover:border-purple-300/40 hover:text-white"
                href={profile.leetcode}
                target="_blank"
                rel="noreferrer"
                aria-label="LeetCode"
              >
                <Code2 size={18} />
              </a>

              <a
                className="rounded-xl border border-white/10 bg-white/[0.035] p-3 text-[#C5B9E9] transition duration-300 hover:-translate-y-1 hover:border-purple-300/40 hover:text-white"
                href={profile.hackerrank}
                target="_blank"
                rel="noreferrer"
                aria-label="HackerRank"
              >
                <Cpu size={18} />
              </a>
            </div>
          </motion.div>

          {/* RIGHT SIDE: PORTRAIT */}

          <motion.div
            className="relative mx-auto w-full max-w-[440px] lg:ml-auto"
            initial={{ opacity: 0, scale: 0.96, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div
              aria-hidden="true"
              className="absolute inset-8 rounded-[45%] bg-violet-600/25 blur-[80px]"
            />

            <div className="relative mx-auto w-full max-w-[390px]">
              <div className="absolute -inset-[1px] rounded-[32px] bg-gradient-to-br from-violet-400 via-fuchsia-400/70 to-cyan-300/50 opacity-80" />

              <div className="relative aspect-[4/5] overflow-hidden rounded-[31px] border border-white/10 bg-[#111126]">
                <Image
                  src="/Nivedhitha.png"
                  alt="Portrait of Nivedhitha J."
                  fill
                  priority
                  sizes="(max-width: 768px) 85vw, 390px"
                  className="object-cover object-center"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#09091A]/85 via-transparent to-violet-500/10" />

                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <div className="rounded-2xl border border-white/15 bg-[#0B1020]/75 p-4 backdrop-blur-xl">
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-violet-300">
                      AI · Innovation · Impact
                    </p>

                    <h2 className="mt-2 text-xl font-bold text-white">
                      Nivedhitha J.
                    </h2>

                    <p className="mt-1 text-sm text-[#C4BEDB]">
                      Aspiring AI Consultant
                    </p>
                  </div>
                </div>
              </div>

              {/* FLOATING AI CARD */}

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-2 top-[17%] rounded-xl border border-cyan-300/20 bg-[#10152A]/95 px-3 py-3 shadow-xl backdrop-blur-xl sm:-right-8 sm:px-4"
              >
                <div className="flex items-center gap-2">
                  <BrainCircuit
                    size={18}
                    className="shrink-0 text-cyan-300"
                  />

                  <div>
                    <p className="text-xs font-semibold text-white">
                      Artificial Intelligence
                    </p>

                    <p className="mt-1 text-[10px] text-[#A7B0C5]">
                      Learning & exploring
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* FLOATING PROBLEM-SOLVING CARD */}

              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -left-2 bottom-[28%] rounded-xl border border-fuchsia-300/20 bg-[#10152A]/95 px-3 py-3 shadow-xl backdrop-blur-xl sm:-left-8 sm:px-4"
              >
                <div className="flex items-center gap-2">
                  <Lightbulb
                    size={18}
                    className="shrink-0 text-fuchsia-300"
                  />

                  <div>
                    <p className="text-xs font-semibold text-white">
                      Problem Solver
                    </p>

                    <p className="mt-1 text-[10px] text-[#A7B0C5]">
                      Ideas into impact
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <a
          href="#about"
          className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-[#8F8AA9] transition hover:text-white md:flex"
        >
          Scroll to explore
          <ArrowDown size={13} />
        </a>
      </section>

      {/* =====================================================
          ABOUT
      ===================================================== */}

      <section id="about" className="section scroll-mt-24">
        <div className="container">
          <SectionHeading
            eyebrow="A little about me"
            title="Curiosity meets practical problem-solving."
            description="I enjoy exploring how AI and software can make complex information more useful, accessible, and actionable."
          />

          <div className="grid gap-5 md:grid-cols-[1.3fr_0.7fr]">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass rounded-2xl p-6 md:p-8"
            >
              <div className="mb-5 grid h-11 w-11 place-items-center rounded-xl border border-violet-300/20 bg-violet-400/10 text-violet-200">
                <Target size={21} />
              </div>

              <p className="text-sm leading-8 text-[#D0CBE1]">
                I&apos;m a Computer Science Engineering student
                specializing in Artificial Intelligence and
                Machine Learning, with an 8.4/10 CGPA. My project
                experience includes web applications and an
                AI-powered environmental monitoring prototype.

                {" "}I&apos;m particularly interested in how AI can
                help organisations understand complex problems,
                make informed decisions, and create practical
                solutions. My long-term goal is to grow into an
                AI consultant who can bridge technical
                capabilities with real-world needs.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="tag">Curiosity</span>
                <span className="tag">Problem Solving</span>
                <span className="tag">Continuous Learning</span>
              </div>
            </motion.div>

            <div className="grid gap-4">
              <motion.div
                whileHover={{ y: -3 }}
                className="card"
              >
                <GraduationCap
                  className="mb-3 text-violet-300"
                  size={22}
                />

                <p className="text-xs text-[#AAA6C2]">Education</p>

                <p className="mt-2 text-sm font-bold">
                  CSE — AI & Machine Learning
                </p>

                <p className="mt-2 text-xs leading-6 muted">
                  VSB College of Engineering and Technical Campus
                </p>

                <p className="mt-1 text-xs muted">
                  Expected graduation: 2029
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -3 }}
                className="card"
              >
                <BriefcaseBusiness
                  className="mb-3 text-cyan-300"
                  size={22}
                />

                <p className="text-xs text-[#AAA6C2]">
                  Current focus
                </p>

                <p className="mt-2 text-sm font-bold">
                  Software + Applied AI
                </p>

                <p className="mt-2 text-xs leading-6 muted">
                  Building projects and learning how technology
                  can address real-world challenges.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -3 }}
                className="card"
              >
                <BrainCircuit
                  className="mb-3 text-fuchsia-300"
                  size={22}
                />

                <p className="text-xs text-[#AAA6C2]">
                  Career aspiration
                </p>

                <p className="mt-2 text-sm font-bold">
                  AI Consulting
                </p>

                <p className="mt-2 text-xs leading-6 muted">
                  Exploring the connection between intelligent
                  technology, business challenges, and useful
                  solutions.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SKILLS
      ===================================================== */}

      <section
        id="skills"
        className="section scroll-mt-24 border-y border-white/[0.04] bg-white/[0.015]"
      >
        <div className="container">
          <SectionHeading
            eyebrow="Technical toolkit"
            title="Technology I work with."
            description="A growing toolkit across programming, web development, data services, and applied machine learning."
          />

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {skills.map(({ title, icon: Icon, description, items }, index) => (
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -5 }}
                className="card"
                key={title}
              >
                <div className="mb-5 grid h-11 w-11 place-items-center rounded-xl border border-violet-300/20 bg-violet-400/10 text-violet-200">
                  <Icon size={20} />
                </div>

                <h3 className="text-sm font-bold">{title}</h3>

                <p className="mt-2 min-h-12 text-xs leading-6 muted">
                  {description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span className="tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PROJECTS
      ===================================================== */}

      <section id="projects" className="section scroll-mt-24">
        <div className="container">
          <SectionHeading
            eyebrow="Selected work"
            title="Projects built around real problems."
            description="Exploring how technology can turn ideas into practical applications and intelligent solutions."
          />

          {/* FEATURED PROJECT */}

          {projects
            .filter((project) => project.featured)
            .map((project) => {
              const Icon = project.icon;

              return (
                <motion.article
                  key={project.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`relative mb-6 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br ${project.accent} p-6 md:p-9`}
                >
                  <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-violet-500/10 blur-[100px]" />

                  <div className="relative grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
                    <div>
                      <div className="mb-6 flex flex-wrap items-center gap-3">
                        <span className="tag !border-violet-300/20 !text-violet-200">
                          Featured Project
                        </span>

                        <span className="tag">
                          {project.status}
                        </span>
                      </div>

                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-fuchsia-300">
                        {project.type}
                      </p>

                      <h3 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                        {project.name}
                      </h3>

                      <p className="muted mt-5 max-w-xl text-sm leading-8">
                        {project.description}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span className="tag" key={tag}>
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="mt-8 flex flex-wrap gap-4">
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            className="primary-button"
                          >
                            View Live Project
                            <ExternalLink size={15} />
                          </a>
                        )}

                        {project.repo && (
                          <a
                            href={project.repo}
                            target="_blank"
                            rel="noreferrer"
                            className="secondary-button"
                          >
                            Source Code
                            <Github size={15} />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* PROJECT VISUAL */}

                    <div className="relative flex min-h-[260px] items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#09091A]/65 p-6">
                      <div className="absolute h-48 w-48 rounded-full border border-violet-300/20" />

                      <div className="absolute h-36 w-36 rounded-full border border-fuchsia-300/20" />

                      <div className="absolute h-24 w-24 rounded-full border border-cyan-300/20" />

                      <div className="relative z-10 grid h-20 w-20 place-items-center rounded-2xl border border-violet-300/30 bg-violet-400/10 text-violet-200 shadow-[0_0_50px_rgba(139,92,246,0.15)]">
                        <Icon size={38} strokeWidth={1.4} />
                      </div>

                      <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/10 bg-[#101024]/90 p-4 backdrop-blur-xl">
                        <div className="flex items-center justify-between gap-3">
                          <div>
                            <p className="text-xs font-bold text-white">
                              Environmental Intelligence
                            </p>

                            <p className="mt-1 text-[10px] text-[#A7B0C5]">
                              Prediction · Risk Analysis · Insights
                            </p>
                          </div>

                          <Sparkles
                            size={18}
                            className="shrink-0 text-cyan-300"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}

          {/* OTHER PROJECTS */}

          <div className="grid gap-5 md:grid-cols-2">
            {projects
              .filter((project) => !project.featured)
              .map((project, index) => {
                const Icon = project.icon;

                return (
                  <motion.article
                    key={project.name}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -4 }}
                    className="card flex flex-col"
                  >
                    <div className="mb-5 flex items-start justify-between gap-4">
                      <div className="grid h-12 w-12 place-items-center rounded-2xl border border-violet-300/20 bg-violet-400/10 text-violet-200">
                        <Icon size={23} />
                      </div>

                      <span
                        className={`tag ${
                          project.status === "Ongoing"
                            ? "!border-cyan-300/20 !text-cyan-200"
                            : ""
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>

                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-fuchsia-300">
                      {project.type}
                    </p>

                    <h3 className="mt-2 text-xl font-extrabold">
                      {project.name}
                    </h3>

                    <p className="muted mt-3 flex-1 text-sm leading-7">
                      {project.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span className="tag" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    {(project.link || project.repo) && (
                      <div className="mt-6 flex flex-wrap gap-4 border-t border-white/[0.07] pt-4">
                        {project.link && (
                          <a
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D8CAFF] transition hover:text-white"
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Live Demo
                            <ExternalLink size={13} />
                          </a>
                        )}

                        {project.repo && (
                          <a
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D8CAFF] transition hover:text-white"
                            href={project.repo}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Source Code
                            <Github size={13} />
                          </a>
                        )}
                      </div>
                    )}

                    {!project.link && !project.repo && (
                      <p className="mt-6 border-t border-white/[0.07] pt-4 text-xs text-[#8F8AA9]">
                        Project details available on request.
                      </p>
                    )}
                  </motion.article>
                );
              })}
          </div>
        </div>
      </section>

      {/* =====================================================
          EXPERIENCE
      ===================================================== */}

      <section
        id="experience"
        className="section scroll-mt-24 border-y border-white/[0.04] bg-white/[0.015]"
      >
        <div className="container">
          <SectionHeading
            eyebrow="Professional growth"
            title="Learning through experience."
            description="My internship experiences are helping me build practical development skills and understand how technology projects take shape."
          />

          <div className="timeline max-w-3xl space-y-5">
            {experiences.map((item, index) => (
              <motion.div
                key={item.company}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="timeline-item card"
              >
                <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                  <div>
                    <h3 className="text-base font-bold">
                      {item.company}
                    </h3>

                    <p className="mt-2 text-sm text-fuchsia-200">
                      {item.role}
                    </p>
                  </div>

                  <span className="text-xs text-[#AAA6C2]">
                    {item.date}
                  </span>
                </div>

                <p className="muted mt-4 text-sm leading-7">
                  {item.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CERTIFICATIONS
      ===================================================== */}

      <section
        id="certifications"
        className="section scroll-mt-24"
      >
        <div className="container">
          <SectionHeading
            eyebrow="Learning milestones"
            title="Certifications & learning."
            description="Courses and credentials supporting my continued learning in software development, AI, and problem-solving."
          />

          <div className="grid gap-4 md:grid-cols-2">
            {certifications.map((certification, index) => (
              <motion.div
                key={certification.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                whileHover={{ y: -3 }}
                className="card flex gap-4"
              >
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-violet-300/20 bg-violet-400/10 text-violet-200">
                  <GraduationCap size={20} />
                </div>

                <div>
                  <h3 className="text-sm font-bold leading-6">
                    {certification.title}
                  </h3>

                  <p className="mt-2 text-xs text-[#C6C0DD]">
                    {certification.issuer}
                  </p>

                  <p className="mt-2 text-[11px] muted">
                    {certification.date}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          LEADERSHIP
      ===================================================== */}

      <section
        id="leadership"
        className="section scroll-mt-24 border-y border-white/[0.04] bg-white/[0.015]"
      >
        <div className="container">
          <SectionHeading
            eyebrow="Beyond the code"
            title="Leadership & innovation."
            description="Collaborative experiences that helped me explore technology, teamwork, and problem-solving."
          />

          <div className="grid gap-4 md:grid-cols-3">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;

              return (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="card"
                >
                  <div className="mb-5 grid h-11 w-11 place-items-center rounded-xl border border-fuchsia-300/20 bg-fuchsia-400/10 text-fuchsia-200">
                    <Icon size={21} />
                  </div>

                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-fuchsia-300">
                    {achievement.category}
                  </p>

                  <h3 className="mt-3 text-base font-bold">
                    {achievement.title}
                  </h3>

                  <p className="muted mt-3 text-sm leading-7">
                    {achievement.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          INTERESTS
      ===================================================== */}

      <section
        id="interests"
        className="section scroll-mt-24"
      >
        <div className="container">
          <SectionHeading
            eyebrow="What I explore"
            title="Curiosity beyond the classroom."
            description="Areas that inspire my learning, project ideas, and long-term professional aspirations."
          />

          <div className="flex flex-wrap gap-3">
            {interests.map((interest, index) => (
              <motion.span
                key={interest}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                whileHover={{ y: -2 }}
                className="tag !px-4 !py-3 !text-xs"
              >
                {interest}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT
      ===================================================== */}

      <section
        id="contact"
        className="section relative scroll-mt-24 overflow-hidden"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[100px]"
        />

        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass mx-auto max-w-3xl rounded-3xl px-6 py-12 text-center md:px-12 md:py-16"
          >
            <div className="mx-auto mb-5 grid h-12 w-12 place-items-center rounded-2xl border border-violet-300/20 bg-violet-400/10 text-violet-200">
              <Mail size={22} />
            </div>

            <p className="section-kicker">
              Let&apos;s connect
            </p>

            <h2 className="section-title mt-3">
              Have an idea worth exploring?
            </h2>

            <p className="section-copy mx-auto">
              I&apos;m interested in applied AI, technology-driven
              problem-solving, internships, and collaborative
              projects that address practical challenges.
            </p>

            <a
              href={`mailto:${profile.email}`}
              className="primary-button mt-7"
            >
              Get in Touch
              <ArrowRight size={15} />
            </a>

            <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-4 text-xs text-[#C7C1DC]">
              <a
                className="nav-link"
                href={profile.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                className="nav-link"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>

              <a
                className="nav-link"
                href={profile.leetcode}
                target="_blank"
                rel="noreferrer"
              >
                LeetCode
              </a>

              <a
                className="nav-link"
                href={profile.hackerrank}
                target="_blank"
                rel="noreferrer"
              >
                HackerRank
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="border-t border-white/[0.06] py-7">
        <div className="container flex flex-col items-center justify-between gap-3 text-center text-[11px] text-[#85809F] sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} Nivedhitha J.
            {" "}Built with curiosity and code.
          </p>

          <a
            href="#home"
            className="nav-link inline-flex items-center gap-1"
          >
            Back to top
            <ArrowUpRight size={13} />
          </a>
        </div>
      </footer>
    </main>
  );
}