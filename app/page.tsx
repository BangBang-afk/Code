"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Mail,
  Cpu,
  Layers,
  Globe,
  Database,
  Terminal,
  Code2,
  Workflow,
  Sparkles,
  ExternalLink,
  ChevronRight,
  Send,
  Info
} from "lucide-react";

// Custom premium SVG brand icons because brand icons are omitted in newer lucide versions
const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 6 6 5.5.25.75.25 1.5 0 2.25v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

// Mock data structures with placeholders matching constraints
const TECH_STACK = [
  { icon: Code2, name: "Python" },
  { icon: Terminal, name: "Next.js" },
  { icon: Layers, name: "AWS Cloud" },
  { icon: Globe, name: "JavaScript" },
  { icon: Database, name: "TypeScript" },
  { icon: Cpu, name: "React" },
  { icon: Workflow, name: "Node.js" },
  { icon: Sparkles, name: "Tailwind CSS" },
];

const TIMELINE_MILESTONES = [
  {
    year: "2025 - Present",
    title: "Lead AI Systems Architect",
    company: "Research Initiative & Open Source Labs",
    description: "Architected and optimized conversational helper algorithms for children with neurodivergent conditions. Scaled cloud pipelines to execute real-time model inferences and designed responsive infrastructure.",
    tags: ["python", "next.js", "aws-lambda", "ai-accessibility"]
  },
  {
    year: "2024 - 2025",
    title: "Full Stack Engineer & Data Scientist",
    company: "Freelance / Academic Collaborations",
    description: "Developed and shipped clean responsive user interfaces paired with robust serverless backends. Automated complex data analytics scrapers and predictive models, processing behavioral data.",
    tags: ["python", "javascript", "aws", "react"]
  },
  {
    year: "2023 - 2024",
    title: "Technology Associate & Researcher",
    company: "Engineering & Science Labs",
    description: "Conducted deep analysis on data structures, algorithmic latency optimizations, and database query performance. Automated local deployment scripts reducing testing overhead.",
    tags: ["javascript", "sql", "git", "bash"]
  }
];

const PROJECTS = [
  {
    id: "01",
    title: "AI Sensory Assistance Companion",
    category: "Assistive AI & Human-Computer Interaction",
    description: "Engineered an AI companion that translates sensory feedback into simplified visual structures for autistically challenged children, improving cognitive engagement and mitigating stress.",
    tags: ["python", "next.js", "aws", "framer-motion"],
    glowColor: "glow-blue"
  },
  {
    id: "02",
    title: "Concentric Real-Time Data Pipeline",
    category: "Cloud Data Engineering & Visualization",
    description: "Built a highly responsive serverless backend processing streaming telemetry metrics. Features a visual dashboard demonstrating near-zero system drag and custom weightless orbit graphs.",
    tags: ["python", "next.js", "aws-lambda", "websockets"],
    glowColor: "glow-purple"
  }
];

export default function Home() {
  // Tactile Grid Tracker state
  const gridRows = 7;
  const gridCols = 24;
  // Initialize grid data representing May 1st - June 11th, 2026 timeline
  const getInitialGridValue = (index: number) => {
    // May 1st - May 20th: AI Sensory Assistance Companion development (mix of levels 2, 3, and 4)
    if (index >= 0 && index <= 19) {
      const pattern = [2, 3, 4, 3, 2, 4, 3, 3, 4, 2, 3, 4, 2, 3, 4, 4, 3, 2, 3, 4];
      return pattern[index] ?? 3;
    }
    // May 21st - June 10th: Concentric Real-Time Data Pipeline development (mix of 3 and 4)
    else if (index >= 20 && index <= 40) {
      const pattern = [3, 4, 4, 3, 4, 3, 4, 4, 3, 4, 3, 3, 4, 4, 3, 4, 3, 4, 4, 3, 4];
      return pattern[index - 20] ?? 4;
    }
    // June 11th: Pipeline deployment finalization (level 1)
    else if (index === 41) {
      return 1;
    }
    // All other dates: default to 0
    else {
      return 0;
    }
  };

  const initialGridData = Array.from({ length: gridRows * gridCols }, (_, index) => 
    getInitialGridValue(index)
  );

  const [gridData, setGridData] = useState<number[]>(initialGridData);

  const getCellDate = (index: number) => {
    const startDate = new Date(2026, 4, 1); // May 1st, 2026 (Month is 0-indexed, so 4 is May)
    const cellDate = new Date(startDate.getTime() + index * 24 * 60 * 60 * 1000);
    return cellDate.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  };

  const getCellTooltip = (index: number, intensity: number) => {
    const dateStr = getCellDate(index);
    if (index >= 0 && index <= 19) {
      return `${dateStr} | [Active Dev: AI Sensory Assistance Companion] - Activity Level: ${intensity}`;
    } else if (index >= 20 && index <= 40) {
      return `${dateStr} | [Active Dev: Concentric Real-Time Data Pipeline] - Activity Level: ${intensity}`;
    } else if (index === 41) {
      return `${dateStr} | [Concentric Pipeline Finalized] - Activity Level: 1`;
    }
    return `${dateStr} | [Idle / Maintenance Mode] - Activity Level: ${intensity}`;
  };

  const handleCellClick = (index: number) => {
    setGridData((prev) => {
      const updated = [...prev];
      updated[index] = (updated[index] + 1) % 5; // cycle through 5 intensity levels
      return updated;
    });
  };

  // Status message state
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("shubangsrivatsa@gmail.com");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="relative min-h-screen bg-black text-[#F5F5F7] font-sans selection:bg-zinc-800 selection:text-white">
      {/* Background ambient lighting effects */}
      <div className="glow-backdrop glow-blue w-[500px] h-[500px] top-[-100px] left-[-100px] opacity-10" />
      <div className="glow-backdrop glow-purple w-[600px] h-[600px] bottom-[20%] right-[-100px] opacity-10" />

      {/* Sticky Header Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/5 py-4 px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="font-mono text-sm tracking-widest text-[#F5F5F7] hover:opacity-80 transition-opacity">
          [PORTFOLIO_INIT]
        </a>
        <div className="hidden sm:flex items-center gap-8 text-xs font-mono tracking-wider">
          <a href="#about" className="text-[#86868B] hover:text-[#F5F5F7] transition-colors">[about]</a>
          <a href="#journey" className="text-[#86868B] hover:text-[#F5F5F7] transition-colors">[journey]</a>
          <a href="#tech" className="text-[#86868B] hover:text-[#F5F5F7] transition-colors">[tech_stack]</a>
          <a href="#projects" className="text-[#86868B] hover:text-[#F5F5F7] transition-colors">[projects]</a>
          <a href="#contact" className="text-[#86868B] hover:text-[#F5F5F7] transition-colors">[contact]</a>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-mono text-[10px] text-zinc-400 tracking-tight">[status: active_for_hire]</span>
        </div>
      </nav>

      {/* Hero Intro Section */}
      <section className="relative min-h-screen flex flex-col justify-between pt-36 pb-12 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto z-10">
        <div /> {/* Spacer for centering push */}
        
        <div className="flex flex-col items-start gap-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-8xl lg:text-[10rem] font-bold text-[#F5F5F7] tracking-tight leading-none">
              Shubang Srivatsa
            </h1>
          </motion.div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end w-full gap-8 mt-12">
          {/* Social Icons Left Aligned */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-6"
          >
            <a
              id="hero-github-link"
              href="https://github.com/BangBang-afk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#86868B] hover:text-white transition-colors p-2 glass-panel rounded-full hover:scale-110 duration-200"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              id="hero-linkedin-link"
              href="https://www.linkedin.com/in/shubang-srivatsa-9b5259417/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#86868B] hover:text-white transition-colors p-2 glass-panel rounded-full hover:scale-110 duration-200"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Floating Down-Arrow Center Aligned */}
          <div className="absolute left-1/2 bottom-8 -translate-x-1/2 flex flex-col items-center">
            <a
              id="hero-scroll-down"
              href="#about"
              className="group flex flex-col items-center gap-2 text-zinc-500 hover:text-white transition-colors duration-300"
              aria-label="Scroll Down"
            >
              <span className="font-mono text-[9px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                [scroll]
              </span>
              <div className="p-2 border border-zinc-800 rounded-full bg-zinc-950/40 animate-bounce-down">
                <ArrowDown className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
              </div>
            </a>
          </div>

          {/* Minimal coordinate label */}
          <div className="hidden md:block font-mono text-[10px] text-zinc-600 uppercase tracking-widest text-right">
            [LOC: PITCH_BLACK_WORKSPACE] <br />
            [SYS: GRID_V_1.0.0]
          </div>
        </div>
      </section>

      {/* About & Journey Grid Section */}
      <section id="about" className="py-24 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto z-10 scroll-mt-24">
        {/* Section title header */}
        <div className="mb-12">
          <h2 className="text-xs font-mono uppercase tracking-[0.4em] text-[#86868B] mb-2">
            [01 / SECTION]
          </h2>
          <h3 className="text-3xl font-semibold tracking-tight text-[#F5F5F7]">
            ABOUT ME
          </h3>
        </div>

        {/* About Grid Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Text Content Block */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-8 p-8 md:p-12 glass-panel border border-[#1F1F1F] rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-indigo-500/10 to-transparent blur-xl pointer-events-none" />
            <div className="flex flex-col gap-6">
              <span className="font-mono text-[10px] text-indigo-400 uppercase tracking-widest">
                [SYSTEM_PROFILE]
              </span>
              <p className="text-lg md:text-xl text-[#F5F5F7] leading-relaxed font-light">
                I build software at the intersection of high-fidelity engineering and cloud scalability. With a focus on Next.js frontend architectures, clean Python services, and AWS orchestration, I deliver production-grade solutions.
              </p>
              <p className="text-sm md:text-base text-[#86868B] leading-relaxed">
                When I am not solving non-linear human problems through assistive AI or data science, I am exploring modular architecture design. I believe software should lift above traditional constraints and scale effortlessly.
              </p>
            </div>

            {/* Utility pills */}
            <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
              <span className="text-[10px] font-mono text-zinc-500 bg-zinc-900/50 px-2.5 py-1 rounded-full border border-zinc-800">
                [full_stack]
              </span>
              <span className="text-[10px] font-mono text-zinc-500 bg-zinc-900/50 px-2.5 py-1 rounded-full border border-zinc-800">
                [data_scientist]
              </span>
              <span className="text-[10px] font-mono text-zinc-500 bg-zinc-900/50 px-2.5 py-1 rounded-full border border-zinc-800">
                [sensory_accessibility]
              </span>
            </div>
          </div>

          {/* Central Centered Floating Weightless Object Box */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center p-8 glass-panel border border-[#1F1F1F] rounded-2xl min-h-[350px] relative overflow-hidden">
            <div className="absolute inset-0 bg-radial-gradient from-zinc-900/30 to-black pointer-events-none" />
            <span className="absolute top-4 left-4 font-mono text-[9px] text-zinc-600 uppercase tracking-widest">
              [OBJ: WEIGHTLESS_INTERACTION]
            </span>
            
            {/* Float weightlessly visual object */}
            <div className="relative w-48 h-48 flex items-center justify-center">
              {/* Outer dashed spinning ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute w-40 h-40 border border-dashed border-[#1F1F1F] rounded-full"
              />
              
              {/* Mid ring rotating opposite */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                className="absolute w-32 h-32 border border-white/5 rounded-full flex items-center justify-center"
              >
                {/* Rotating floating wireframe cube inside */}
                <motion.div
                  animate={{ 
                    rotateX: [0, 360],
                    rotateY: [0, 360],
                    y: [-12, 12, -12] 
                  }}
                  transition={{ 
                    rotateX: { duration: 15, repeat: Infinity, ease: "linear" },
                    rotateY: { duration: 20, repeat: Infinity, ease: "linear" },
                    y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="w-16 h-16 border border-zinc-600/40 rounded flex items-center justify-center relative"
                  style={{ perspective: "1000px" }}
                >
                  <div className="absolute w-12 h-12 border border-zinc-500/20 rotate-45" />
                  <div className="absolute w-8 h-8 border border-white/10 -rotate-45" />
                  <div className="absolute w-4 h-4 bg-indigo-500/20 rounded-full blur-[2px]" />
                </motion.div>
              </motion.div>

              {/* Orbital nodes */}
              <motion.div
                animate={{ 
                  x: [0, 80, 0, -80, 0],
                  y: [80, 0, -80, 0, 80],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute w-1.5 h-1.5 bg-indigo-500 rounded-full shadow-[0_0_8px_#6366f1]"
              />
              <motion.div
                animate={{ 
                  x: [0, -60, 0, 60, 0],
                  y: [-60, 0, 60, 0, -60],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute w-1 h-1 bg-purple-500 rounded-full shadow-[0_0_8px_#a855f7]"
              />
            </div>

            <span className="absolute bottom-4 font-mono text-[9px] text-[#86868B] uppercase tracking-widest">
              [SYSTEM_CHECK: STABLE]
            </span>
          </div>
        </div>
      </section>

      {/* Timeline Progression Section */}
      <section id="journey" className="py-24 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto z-10 scroll-mt-24">
        {/* Section title header */}
        <div className="mb-16">
          <h2 className="text-xs font-mono uppercase tracking-[0.4em] text-[#86868B] mb-2">
            [02 / SECTION]
          </h2>
          <h3 className="text-3xl font-semibold tracking-tight text-[#F5F5F7]">
            JOURNEY
          </h3>
        </div>

        {/* Timeline Layout */}
        <div className="relative pl-6 md:pl-12 border-l border-[#1F1F1F] max-w-5xl ml-2 md:ml-6 flex flex-col gap-16">
          {TIMELINE_MILESTONES.map((item, idx) => (
            <div key={idx} className="relative group/timeline-item">
              {/* Dot indicator on vertical line */}
              <div className="absolute -left-[31px] md:-left-[55px] top-6 w-3 h-3 rounded-full border border-black bg-zinc-950 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover/timeline-item:bg-indigo-500 transition-colors duration-300" />
              </div>

              {/* Elastic-hover container card mapping Title, Date, Description, and Tags */}
              <motion.div
                whileHover={{ y: -6, scale: 1.005 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="glass-panel border border-[#1F1F1F] p-6 md:p-8 rounded-2xl relative overflow-hidden transition-all duration-300 group-hover/timeline-item:border-zinc-700/60"
              >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
                  <div>
                    <h4 className="text-lg md:text-xl font-medium text-[#F5F5F7]">
                      {item.title}
                    </h4>
                    <span className="font-mono text-xs text-[#86868B]">
                      {item.company}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-indigo-400 bg-indigo-500/5 border border-indigo-500/10 px-3 py-1 rounded-full whitespace-nowrap self-start sm:self-center">
                    {item.year}
                  </span>
                </div>

                <p className="text-sm md:text-base text-[#86868B] leading-relaxed mb-6 font-light">
                  {item.description}
                </p>

                {/* Lowercase utility tags at the bottom */}
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="font-mono text-[10px] text-zinc-500 bg-zinc-950 border border-zinc-900 px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack Panel Section */}
      <section id="tech" className="py-24 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto z-10 scroll-mt-24">
        {/* Section title header */}
        <div className="mb-12">
          <h2 className="text-xs font-mono uppercase tracking-[0.4em] text-[#86868B] mb-2">
            [03 / SECTION]
          </h2>
          <h3 className="text-3xl font-semibold tracking-tight text-[#F5F5F7]">
            TECH STACK
          </h3>
        </div>

        {/* Tech Stack Panel Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {TECH_STACK.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="flex flex-col items-center justify-center p-8 glass-panel border border-[#1F1F1F] rounded-xl text-center group cursor-pointer hover:border-zinc-800/80 transition-colors"
              >
                <div className="p-3 bg-zinc-950 border border-zinc-900 rounded-lg text-zinc-500 group-hover:text-[#F5F5F7] group-hover:border-zinc-700/80 transition-all duration-300 mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="font-mono text-xs text-[#86868B] group-hover:text-[#F5F5F7] transition-colors">
                  {item.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Projects Showcase Section */}
      <section id="projects" className="py-24 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto z-10 scroll-mt-24">
        {/* Section title header */}
        <div className="mb-16">
          <h2 className="text-xs font-mono uppercase tracking-[0.4em] text-[#86868B] mb-2">
            [04 / SECTION]
          </h2>
          <h3 className="text-3xl font-semibold tracking-tight text-[#F5F5F7]">
            PROJECTS SHOWCASE
          </h3>
        </div>

        {/* Stacked Full-Width Cards */}
        <div className="flex flex-col gap-12">
          {PROJECTS.map((proj, idx) => (
            <div
              key={idx}
              className="relative p-8 md:p-12 glass-panel border border-[#1F1F1F] rounded-3xl overflow-hidden group hover:border-zinc-800 transition-all duration-500"
            >
              {/* Subtle glowing backdrop underlay */}
              <div className={`glow-backdrop ${proj.glowColor} w-[300px] h-[300px] -right-20 -top-20 group-hover:opacity-20 transition-opacity duration-500`} />

              {/* Giant faded layout number in the top right corner */}
              <span className="absolute top-4 right-8 font-mono text-[7rem] md:text-[10rem] font-bold text-white/[0.02] group-hover:text-white/[0.04] select-none transition-colors duration-500 leading-none">
                {proj.id}
              </span>

              {/* Card Contents */}
              <div className="flex flex-col justify-between min-h-[250px] relative z-10">
                <div className="max-w-2xl">
                  <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest block mb-3">
                    {proj.category}
                  </span>
                  <h4 className="text-2xl md:text-3xl font-medium text-[#F5F5F7] tracking-tight mb-4">
                    {proj.title}
                  </h4>
                  <p className="text-sm md:text-base text-[#86868B] leading-relaxed mb-6 font-light">
                    {proj.description}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 pt-6 border-t border-white/5">
                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2">
                    {proj.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="font-mono text-[10px] text-zinc-500 bg-zinc-950/60 border border-zinc-900 px-2.5 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Project Link Action */}
                  <a
                    id={`project-link-${proj.id}`}
                    href="#"
                    className="inline-flex items-center gap-2 font-mono text-xs text-white hover:text-indigo-400 transition-colors group/link"
                  >
                    <span>[visit_project_link]</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tactile Grid Tracker Section */}
      <section className="py-24 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto z-10">
        {/* Section title header */}
        <div className="mb-12">
          <h2 className="text-xs font-mono uppercase tracking-[0.4em] text-[#86868B] mb-2">
            [05 / SECTION]
          </h2>
          <h3 className="text-3xl font-semibold tracking-tight text-[#F5F5F7] mb-3">
            TACTILE TRACKER
          </h3>
          <p className="text-xs text-[#86868B] font-mono tracking-tight max-w-xl">
            [An interactive status grid mimicking standard repository contributions. Click blocks to draw/adjust execution activity values.]
          </p>
        </div>

        {/* GitHub-like Contribution Grid */}
        <div className="glass-panel border border-[#1F1F1F] p-6 md:p-8 rounded-2xl overflow-x-auto">
          <div className="flex flex-col gap-1 min-w-[640px]">
            {/* Chronological Timeline Header */}
            {(() => {
              // Each column = 1 week (7 days). Cell = 16px, gap = 4px → 20px per column.
              // Starting May 1, 2026: month boundaries at column indices.
              const monthMarkers: { label: string; col: number }[] = [
                { label: "May", col: 0 },   // May 1 → day 0  → col 0
                { label: "Jun", col: 4 },   // Jun 1 → day 31 → col 4
                { label: "Jul", col: 8 },   // Jul 1 → day 61 → col 8
                { label: "Aug", col: 13 },  // Aug 1 → day 92 → col 13
                { label: "Sep", col: 17 },  // Sep 1 → day 123 → col 17
                { label: "Oct", col: 21 },  // Oct 1 → day 153 → col 21
              ];
              const colPitch = 20; // 16px cell + 4px gap

              return (
                <div className="flex items-end justify-between mb-2 relative" style={{ height: "20px" }}>
                  {/* Month labels absolutely positioned over the correct columns */}
                  <div className="relative flex-1" style={{ minWidth: gridCols * colPitch }}>
                    {monthMarkers.map((m) => (
                      <span
                        key={m.label}
                        className="absolute font-mono text-[10px] text-zinc-500 uppercase tracking-wider"
                        style={{ left: m.col * colPitch }}
                      >
                        {m.label}
                      </span>
                    ))}
                  </div>
                  {/* Year label pinned right */}
                  <span className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest whitespace-nowrap pl-4 shrink-0">
                    [2026]
                  </span>
                </div>
              );
            })()}

            {/* Grid structure */}
            <div className="grid grid-flow-col gap-1" style={{ gridTemplateRows: `repeat(${gridRows}, minmax(0, 1fr))` }}>
              {gridData.map((intensity, index) => {
                // Color levels depending on intensity
                let bgClass = "bg-zinc-900 border-zinc-950"; // Level 0
                let glowClass = "";
                if (intensity === 1) {
                  bgClass = "bg-emerald-950/60 border-emerald-950";
                } else if (intensity === 2) {
                  bgClass = "bg-emerald-800/80 border-emerald-800";
                } else if (intensity === 3) {
                  bgClass = "bg-emerald-600 border-emerald-600";
                } else if (intensity === 4) {
                  bgClass = "bg-emerald-400 border-emerald-400";
                  glowClass = "shadow-[0_0_6px_rgba(52,211,153,0.5)]";
                }

                return (
                  <motion.button
                    key={index}
                    onClick={() => handleCellClick(index)}
                    whileHover={{ scale: 1.3, zIndex: 20 }}
                    transition={{ type: "spring", stiffness: 450, damping: 15 }}
                    className={`aspect-square w-[16px] rounded-[3px] border cursor-pointer transition-colors ${bgClass} ${glowClass}`}
                    title={getCellTooltip(index, intensity)}
                    aria-label={`Grid cell ${index}, intensity ${intensity}`}
                  />
                );
              })}
            </div>
            
            {/* Legend indicators */}
            <div className="flex justify-between items-center mt-6 text-[10px] font-mono text-zinc-500 px-1">
              <div>
                [GRID_DIM: {gridCols}x{gridRows} CELLS]
              </div>
              <div className="flex items-center gap-1.5">
                <span>[less]</span>
                <span className="w-2.5 h-2.5 rounded-[2px] bg-zinc-900 border border-zinc-950" />
                <span className="w-2.5 h-2.5 rounded-[2px] bg-emerald-950/60 border border-emerald-950" />
                <span className="w-2.5 h-2.5 rounded-[2px] bg-emerald-800/80 border border-emerald-800" />
                <span className="w-2.5 h-2.5 rounded-[2px] bg-emerald-600 border border-emerald-600" />
                <span className="w-2.5 h-2.5 rounded-[2px] bg-emerald-400 border border-emerald-400" />
                <span>[more]</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer id="contact" className="relative border-t border-[#1F1F1F] bg-black py-24 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto z-10 scroll-mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Footer Header */}
          <div className="lg:col-span-8 flex flex-col items-start gap-8">
            <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-[#F5F5F7] leading-tight max-w-3xl">
              Let&apos;s start a project together.
            </h2>
            
            {/* Minimal Contact Card Pill Block */}
            <motion.div
              onClick={handleCopyEmail}
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.985 }}
              className="inline-flex items-center gap-4 bg-zinc-950 border border-[#1F1F1F] p-2 pl-4 pr-3 rounded-full cursor-pointer hover:border-zinc-700 transition-colors group select-none"
            >
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-zinc-500 group-hover:text-indigo-400 transition-colors" />
                <span className="font-mono text-xs md:text-sm text-zinc-300">
                  shubangsrivatsa@gmail.com
                </span>
              </div>
              <div className="bg-[#1F1F1F] text-[#F5F5F7] font-mono text-[10px] uppercase tracking-wider px-3.5 py-1.5 rounded-full hover:bg-zinc-800 transition-colors">
                {isCopied ? "[copied_ok]" : "[click_to_copy]"}
              </div>
            </motion.div>
          </div>

          {/* Side Info & Nav Links */}
          <div className="lg:col-span-4 flex flex-col md:flex-row lg:flex-col justify-between gap-12 w-full lg:text-right font-mono text-xs">
            <div className="flex flex-col gap-3">
              <span className="text-zinc-500 uppercase tracking-widest">[navigation_map]</span>
              <a href="#" className="text-zinc-400 hover:text-white transition-colors">[hero_intro]</a>
              <a href="#about" className="text-zinc-400 hover:text-white transition-colors">[about_profile]</a>
              <a href="#journey" className="text-zinc-400 hover:text-white transition-colors">[experience_timeline]</a>
              <a href="#projects" className="text-zinc-400 hover:text-white transition-colors">[project_archive]</a>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-zinc-500 uppercase tracking-widest">[build_stack]</span>
              <span className="text-zinc-400">[nextjs_appdir_16]</span>
              <span className="text-zinc-400">[tailwind_css_v4]</span>
              <span className="text-zinc-400">[framer_motion]</span>
            </div>

            <div className="text-[10px] text-zinc-600 leading-normal pt-4 border-t border-white/5 md:border-none">
              &copy; {new Date().getFullYear()} Shubang Srivatsa. <br />
              All rights reserved. Styled with Antigravity.
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}
