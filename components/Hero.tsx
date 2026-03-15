"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col md:flex-row items-center justify-between py-20 gap-12">
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#222222_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
          Hi, I&apos;m <span className="text-accent text-glow">Kunal</span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-300 font-medium mb-6">
          AI Systems Developer | Python Backend Engineer
        </h2>
        <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl leading-relaxed">
          I build AI systems, backend infrastructure, and LLM-powered applications.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <Link 
            href="https://github.com/Kunal-t20" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-card border border-accent/30 hover:border-accent shadow-[0_0_10px_rgba(57,255,20,0.1)] hover:shadow-[0_0_20px_rgba(57,255,20,0.4)] px-6 py-3 rounded-lg transition-all hover:-translate-y-1 group"
          >
            <Github size={20} className="text-accent group-hover:text-white transition-colors" />
            <span className="text-accent group-hover:text-white transition-colors">GitHub</span>
          </Link>
          <Link 
            href="https://linkedin.com/in/kunal-mahajan-97b130319" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-card border border-accent/30 hover:border-accent shadow-[0_0_10px_rgba(57,255,20,0.1)] hover:shadow-[0_0_20px_rgba(57,255,20,0.4)] px-6 py-3 rounded-lg transition-all hover:-translate-y-1 group"
          >
            <Linkedin size={20} className="text-accent group-hover:text-white transition-colors" />
            <span className="text-accent group-hover:text-white transition-colors">LinkedIn</span>
          </Link>
          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=1202kunalmahajan@gmail.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-accent text-black hover:bg-accent/90 px-6 py-3 rounded-lg transition-all hover:-translate-y-1 shadow-[0_0_20px_rgba(57,255,20,0.4)] hover:shadow-[0_0_30px_rgba(57,255,20,0.6)] font-semibold font-bold"
          >
            <Mail size={20} />
            <span>Email Me</span>
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative shrink-0"
      >
        <div className="absolute inset-0 bg-accent rounded-full blur-[60px] opacity-20 animate-pulse"></div>
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-accent/40 overflow-hidden shadow-[0_0_30px_rgba(57,255,20,0.3)] hover:border-accent hover:shadow-[0_0_50px_rgba(57,255,20,0.5)] transition-all duration-500">
          <img 
            src="https://github.com/Kunal-t20.png" 
            alt="Kunal" 
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
}
