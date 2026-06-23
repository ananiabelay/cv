"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gift, ExternalLink, MapPin, Award, Layers, Monitor, Shield, Smartphone } from "lucide-react";
import SmoothScroll from "./components/SmoothScroll";
import { USER_PROFILE, SKILLS, PROJECTS, Project } from "./data/portfolio";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  // Filter logic: shows all projects, or projects containing selected skill tag
  const filteredProjects = activeFilter
    ? PROJECTS.filter((p) => p.tags.includes(activeFilter))
    : PROJECTS;

  // Icon selector for card headers
  const getTypeIcon = (type: Project["type"]) => {
    switch (type) {
      case "Web App": return <Monitor className="w-4 h-4 text-emerald-400" />;
      case "Cybersecurity Tool": return <Shield className="w-4 h-4 text-cyan-400" />;
      case "Android App": return <Smartphone className="w-4 h-4 text-purple-400" />;
      default: return <Layers className="w-4 h-4 text-gray-400" />;
    }
  };

  return (
    <SmoothScroll>
      <main className="relative min-h-screen bg-[#0a0a0c] text-slate-100 overflow-hidden font-sans select-none selection:bg-emerald-500/30 selection:text-emerald-300">
        
        {/* DYNAMIC AMBIENT BACKGROUND (Continuous running animation without interaction) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <motion.div 
            animate={{
              scale: [1, 1.15, 1],
              x: [0, 40, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-emerald-600/10 blur-[120px]"
          />
          <motion.div 
            animate={{
              scale: [1, 1.2, 1],
              x: [0, -50, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-cyan-600/10 blur-[150px]"
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          
          {/* HERO & ABOUT SECTION */}
          <section className="mb-24 sm:mb-32">
            <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-12">
              <div className="flex-1 text-center md:text-left">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center gap-2 bg-slate-900/80 border border-slate-800 rounded-full px-4 py-1.5 text-sm font-medium text-emerald-400 mb-6 shadow-inner"
                >
                  <MapPin className="w-4 h-4 animate-pulse" /> {USER_PROFILE.location}
                </motion.div>
                
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-4xl sm:text-6xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400 mb-6"
                >
                  Hi, I'm {USER_PROFILE.name}
                </motion.h1>

                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-lg text-slate-400 max-w-2xl leading-relaxed mb-8"
                >
                  {USER_PROFILE.bio}
                </motion.p>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-slate-400"
                >
                  <div className="flex items-center gap-2 bg-slate-900/50 backdrop-blur border border-slate-800/60 rounded-xl px-4 py-2.5">
                    <span className="text-emerald-400 font-bold">{USER_PROFILE.age}</span> years old
                  </div>
                  <div className="flex items-center gap-2 bg-slate-900/50 backdrop-blur border border-slate-800/60 rounded-xl px-4 py-2.5">
                    <Award className="w-4 h-4 text-cyan-400" /> {USER_PROFILE.education}
                  </div>
                </motion.div>
              </div>

              {/* PROFILE IMAGE CONTAINER */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, type: "spring" }}
                className="relative group w-44 h-44 sm:w-52 sm:h-52 shrink-0"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500 to-cyan-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                <div className="relative w-full h-full rounded-2xl border border-slate-800 bg-slate-900 overflow-hidden shadow-2xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={USER_PROFILE.avatar} 
                    alt={USER_PROFILE.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      // Fallback visual design if image is not yet located in public/
                      e.currentTarget.style.display = "none";
                      const parent = e.currentTarget.parentElement;
                      if(parent) parent.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-slate-950 font-black text-4xl text-emerald-500">AB</div>`;
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </section>

          {/* SKILLS / TAGS FILTER SECTION */}
          <section className="mb-16">
            <div className="flex flex-col gap-4 mb-8">
              <h2 className="text-xs uppercase font-bold tracking-widest text-slate-500">
                Core Stack / Project Filters
              </h2>
              <p className="text-sm text-slate-400 max-w-md">
                Click a skill tag to filter my deployment repository and isolate matching specialized stacks.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2.5">
              <button
                onClick={() => setActiveFilter(null)}
                className={cn(
                  "px-4 py-2 rounded-xl text-sm font-semibold border transition-all duration-300",
                  !activeFilter 
                    ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.1)]" 
                    : "bg-slate-900/40 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                )}
              >
                All Projects
              </button>
              {SKILLS.map((skill) => (
                <button
                  key={skill}
                  onClick={() => setActiveFilter(activeFilter === skill ? null : skill)}
                  className={cn(
                    "px-4 py-2 rounded-xl text-sm font-semibold border transition-all duration-300",
                    activeFilter === skill
                      ? "bg-cyan-500/10 border-cyan-500/30 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.1)]"
                      : "bg-slate-900/40 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                  )}
                >
                  {skill}
                </button>
              ))}
            </div>
          </section>

          {/* PROJECTS GRID SECTION WITH LAYOUT ANIMATIONS */}
          <section>
            <motion.div 
              layout 
              className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                  <motion.div
                    layout
                    key={project.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, type: "spring", stiffness: 100, damping: 17 }}
                    className={cn(
                      "relative group rounded-2xl border bg-slate-900/30 backdrop-blur-sm overflow-hidden flex flex-col justify-between transition-all duration-500",
                      project.isUpcoming 
                        ? "border-slate-800/40" 
                        : "border-slate-800 hover:border-slate-700/80 shadow-xl hover:shadow-[0_10px_30px_-15px_rgba(0,0,0,0.7)]"
                    )}
                  >
                    {/* Visual Card Media */}
                    <div className="relative aspect-video w-full overflow-hidden bg-slate-950 border-b border-slate-800/60">
                      {project.isUpcoming ? (
                        /* UPCOMING BLUR STATE OVERLAY */
                        <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-md z-20 flex flex-col items-center justify-center p-4 text-center">
                          <span className="px-3 py-1 bg-slate-900 border border-slate-800 text-xs text-slate-400 tracking-widest rounded-full uppercase font-bold animate-pulse">
                            Coming Soon
                          </span>
                        </div>
                      ) : null}

                      {/* Project Snapshot Background */}
                      <div className={cn("w-full h-full transition-transform duration-700 ease-out", !project.isUpcoming && "group-hover:scale-105")}>
                        {/* Fallback pattern when image is loading or missing */}
                        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className={cn("w-full h-full object-cover", project.isUpcoming && "blur-sm opacity-20")}
                          onError={(e) => { e.currentTarget.style.opacity = "0"; }}
                        />
                      </div>
                    </div>

                    {/* Card Description Meta Content */}
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <span className="flex items-center gap-1.5 text-xs text-slate-400 font-semibold uppercase tracking-wider">
                            {getTypeIcon(project.type)}
                            {project.type}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-emerald-400 transition-colors duration-300">
                          {project.title}
                        </h3>

                        <p className="text-sm text-slate-400 leading-relaxed mb-6">
                          {project.description}
                        </p>
                      </div>

                      <div>
                        {/* Sub-tag arrays */}
                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {project.tags.map((tag) => (
                            <span 
                              key={tag}
                              className={cn(
                                "text-xs px-2.5 py-1 rounded-md font-medium border",
                                activeFilter === tag 
                                  ? "bg-cyan-500/10 border-cyan-500/30 text-cyan-400"
                                  : "bg-slate-900/60 border-slate-800 text-slate-400"
                              )}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* External Actions Code Repo Hooks */}
                        {!project.isUpcoming && (
                          <div className="flex items-center gap-4 pt-4 border-t border-slate-800/60">
                            {project.githubUrl && (
                              <a 
                                href={project.githubUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-white transition-colors duration-200"
                              >
                                <Gift className="w-4 h-4" /> Code
                              </a>
                            )}
                            {project.liveUrl && (
                              <a 
                                href={project.liveUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors duration-200 ml-auto"
                              >
                                Live Demo <ExternalLink className="w-3.5 h-3.5" />
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </section>

          {/* FOOTER */}
          <footer className="mt-32 pt-8 border-t border-slate-900 text-center text-xs text-slate-600">
            © {new Date().getFullYear()} {USER_PROFILE.name}. Made with Next.js & Framer Motion.
          </footer>
        </div>
      </main>
    </SmoothScroll>
  );
}