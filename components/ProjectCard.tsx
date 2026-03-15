"use client";

import { motion } from "framer-motion";
import { Github, Star } from "lucide-react";
import Link from "next/link";
import { Repo } from "@/lib/github";

export default function ProjectCard({ repo, index }: { repo: Repo; index: number }) {
  const techStack = repo.topics && repo.topics.length > 0 
    ? repo.topics 
    : (repo.language ? [repo.language] : []);

  // Format name nicely
  const displayName = repo.name.replace(/[-_]/g, ' ');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.1, 0.5) }}
      className="glass-card p-6 rounded-xl flex flex-col h-full border-border/50 hover:border-accent/40 hover:-translate-y-1 shadow-sm hover:shadow-accent/5 transition-all duration-300 group"
    >
      <div className="flex justify-between items-start mb-4 gap-4">
        <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors line-clamp-2 capitalize">
          {displayName}
        </h3>
        <div className="flex items-center gap-1 bg-background px-2.5 py-1 rounded-full border border-border text-sm text-yellow-500 shrink-0">
          <Star size={14} className="fill-yellow-500" />
          <span className="font-medium">{repo.stargazers_count}</span>
        </div>
      </div>
      
      <p className="text-gray-400 mb-6 flex-grow text-sm leading-relaxed">
        {repo.description || "An interesting project without a description."}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-6 mt-auto">
        {techStack.slice(0, 4).map((tech, idx) => (
          <span 
            key={idx} 
            className="text-xs bg-background/50 border border-border/60 text-gray-300 py-1 px-2.5 rounded-md hover:border-accent/60 transition-colors"
          >
            {tech}
          </span>
        ))}
        {techStack.length > 4 && (
          <span className="text-xs text-gray-500 py-1 px-1">+{techStack.length - 4}</span>
        )}
      </div>
      
      <div className="pt-4 border-t border-border/50">
        <Link 
          href={repo.html_url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors w-fit group/link"
        >
          <Github size={18} className="group-hover/link:text-accent transition-colors" />
          View Source
        </Link>
      </div>
    </motion.div>
  );
}
