"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <section className="py-20 border-t border-border mt-10" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Let&apos;s Connect
        </h2>
        <p className="text-gray-400 mb-10 max-w-xl mx-auto">
          Currently open to new opportunities. Whether you have a question or just want to discuss AI systems and engineering!
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <Link 
            href="https://github.com/Kunal-t20" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-background border border-border hover:bg-card hover:border-accent/50 px-8 py-4 rounded-xl transition-all group shadow-sm"
          >
            <Github size={24} className="group-hover:text-accent transition-colors" />
            <span className="font-medium text-foreground">GitHub</span>
          </Link>
          <Link 
            href="https://linkedin.com/in/kunal-mahajan-97b130319" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-background border border-border hover:bg-card hover:border-accent/50 px-8 py-4 rounded-xl transition-all group shadow-sm"
          >
            <Linkedin size={24} className="text-gray-400 group-hover:text-[#0a66c2] transition-colors" />
            <span className="font-medium text-foreground">LinkedIn</span>
          </Link>
          <Link 
            href="mailto:1202kunalmahajan@gmail.com" 
            className="flex items-center gap-2 bg-accent text-white hover:bg-accent/90 px-8 py-4 rounded-xl transition-all shadow-lg shadow-accent/20"
          >
            <Mail size={24} />
            <span className="font-medium">Email Me</span>
          </Link>
        </div>
        
        <p className="text-sm text-gray-500">
          Built with Next.js, Framer Motion & Tailwind CSS. Let&apos;s build something amazing.
        </p>
      </motion.div>
    </section>
  );
}
