"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Film, Play, Sparkles, HelpCircle, ArrowRight } from "lucide-react";
import SmoothScroll from "../components/SmoothScroll";
import { VIDEO_PROFILE, VIDEO_CATEGORIES, VIDEO_PROJECTS, VideoProject } from "../data/video";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}

export default function VideoPortfolio() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<VideoProject>(VIDEO_PROJECTS[0]);

  const filteredProjects = activeCategory
    ? VIDEO_PROJECTS.filter((p) => p.category === activeCategory)
    : VIDEO_PROJECTS;

  return (
    <SmoothScroll>
      <main className="relative min-h-screen bg-[#070709] text-slate-100 overflow-hidden font-sans select-none selection:bg-purple-500/30 selection:text-purple-300">
        
        {/* AMBIENT BACKGROUND GLOW (Video Editor Aesthetic - Deep Violet & Magenta) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, -20, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-20%] right-[-10%] w-[55vw] h-[55vw] rounded-full bg-purple-600/10 blur-[130px]"
          />
          <motion.div 
            animate={{ scale: [1, 1.1, 1], x: [0, -40, 0], y: [0, 40, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-fuchsia-600/10 blur-[120px]"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          
          {/* HEADER BIOGRAPHY */}
          <header className="mb-16 md:mb-24 flex flex-col md:flex-row items-center justify-between gap-8 border-b border-slate-900 pb-12">
            <div className="max-w-3xl text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-full px-4 py-1.5 text-xs font-semibold text-purple-400 mb-6 shadow-inner">
                <MapPin className="w-3.5 h-3.5" /> {VIDEO_PROFILE.location}
              </div>
              <h1 className="text-4xl sm:text-6xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400 mb-4">
                {VIDEO_PROFILE.name} 
              </h1>
              <p className="text-sm uppercase tracking-widest text-purple-400/80 font-bold mb-4 flex items-center justify-center md:justify-start gap-2">
                <Film className="w-4 h-4" /> Post-Production Portfolio
              </p>
              <p className="text-base text-slate-400 leading-relaxed max-w-2xl">
                {VIDEO_PROFILE.bio}
              </p>
            </div>
            
            {/* PROFILE ICON */}
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border border-slate-800 shrink-0 bg-slate-900 flex items-center justify-center text-2xl font-bold text-purple-500 shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={VIDEO_PROFILE.avatar} alt="Profile" className="w-full h-full object-cover" onError={(e)=>{e.currentTarget.style.display='none'}}/>
              
            </div>
          </header>

          {/* CRITICAL FEATURE: PREVIEW THEATER WINDOW (BEFORE VS AFTER) */}
          <section className="mb-20">
            <div className="mb-6">
              <span className="text-xs uppercase font-bold tracking-widest text-slate-500 block mb-2">Active Studio Theater</span>
              <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                Now Reviewing: <span className="text-purple-400">{selectedProject.title}</span>
              </h2>
            </div>

            {/* TWIN VIDEO DISPLAY VIEWPORT */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 bg-slate-950/40 border border-slate-900 p-4 sm:p-6 rounded-3xl backdrop-blur-md shadow-2xl">
              
              {/* BEFORE BLOCK */}
              <div className="relative flex flex-col gap-2">
                <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-black/70 border border-white/10 text-xs text-slate-400 rounded-md font-bold uppercase tracking-wider backdrop-blur-sm">
                  Raw / Before Edit
                </div>
                <div className="relative aspect-[9/16] max-h-[550px] mx-auto w-full rounded-2xl overflow-hidden border border-slate-900 bg-black shadow-lg">
                  <video 
                    key={`${selectedProject.id}-before`}
                    src={selectedProject.beforeVideo}
                    controls
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* AFTER BLOCK */}
              <div className="relative flex flex-col gap-2">
                <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-purple-600/90 border border-purple-400/20 text-xs text-white rounded-md font-bold uppercase tracking-wider backdrop-blur-sm shadow-[0_0_15px_rgba(147,51,234,0.4)]">
                  Final Edit / After
                </div>
                <div className="relative aspect-[9/16] max-h-[550px] mx-auto w-full rounded-2xl overflow-hidden border border-purple-900/40 bg-black shadow-2xl">
                  <div className="absolute inset-0 border-2 border-purple-500/20 pointer-events-none rounded-2xl z-10 animate-pulse" />
                  <video 
                    key={`${selectedProject.id}-after`}
                    src={selectedProject.afterVideo}
                    controls
                    autoPlay
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

            </div>
            
            <div className="mt-4 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500 px-2">
              <p className="flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5 text-purple-400" /> Pro-Tip: Hit play on both timelines to isolate frame sequencing adjustments.</p>
              <p>Client Focus: <span className="text-slate-300 font-semibold">{selectedProject.client}</span></p>
            </div>
          </section>

          {/* CATEGORY SELECTOR CHIPS */}
          <section className="mb-10">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveCategory(null)}
                className={cn(
                  "px-4 py-2 rounded-xl text-xs font-bold tracking-wider uppercase border transition-all duration-300",
                  !activeCategory 
                    ? "bg-purple-600/10 border-purple-500/40 text-purple-400" 
                    : "bg-slate-900/40 border-slate-800 text-slate-400 hover:border-slate-700"
                )}
              >
                All Content
              </button>
              {VIDEO_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
                  className={cn(
                    "px-4 py-2 rounded-xl text-xs font-bold tracking-wider uppercase border transition-all duration-300",
                    activeCategory === cat
                      ? "bg-fuchsia-600/10 border-fuchsia-500/40 text-fuchsia-400"
                      : "bg-slate-900/40 border-slate-800 text-slate-400 hover:border-slate-700"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </section>

          {/* ARCHIVAL INTERACTIVE SELECTION GRID */}
          <section>
            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => {
                  const isCurrentlySelected = selectedProject.id === project.id;
                  return (
                    <motion.div
                      layout
                      key={project.id}
                      onClick={() => setSelectedProject(project)}
                      className={cn(
                        "group rounded-2xl border bg-slate-900/20 backdrop-blur-sm p-5 cursor-pointer flex flex-col justify-between transition-all duration-300",
                        isCurrentlySelected 
                          ? "border-purple-500/60 bg-purple-950/10 ring-1 ring-purple-500/20" 
                          : "border-slate-800/80 hover:border-slate-700"
                      )}
                    >
                      <div>
                        <div className="flex items-center justify-between text-slate-500 text-[10px] uppercase font-bold tracking-widest mb-3">
                          <span>{project.category}</span>
                          {isCurrentlySelected && <span className="text-purple-400 animate-pulse">Now Playing</span>}
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-200">
                          {project.title}
                        </h3>
                        <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-2">
                          {project.description}
                        </p>
                      </div>

                      <div>
                        <div className="flex flex-wrap gap-1 mb-4">
                          {project.tags.map(t => (
                            <span key={t} className="text-[10px] px-2 py-0.5 rounded bg-slate-950 border border-slate-900 text-slate-400">
                              {t}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center gap-1 text-xs font-bold text-purple-400 group-hover:text-purple-300 transition-colors pt-2 border-t border-slate-950">
                          Load into view <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          </section>

        </div>
      </main>
    </SmoothScroll>
  );
}