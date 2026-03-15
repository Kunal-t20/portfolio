"use client";

import { motion } from "framer-motion";
import { Brain, Server, Bot, Activity } from "lucide-react";

export default function About() {
  const skills = [
    {
      icon: <Brain className="text-accent" size={24} />,
      title: "AI Systems Development",
      description: "Designing and integrating robust artificial intelligence models into scalable production systems."
    },
    {
      icon: <Server className="text-accent" size={24} />,
      title: "Backend Engineering",
      description: "Building high-performance, asynchronous REST APIs and microservices using Python and modern frameworks."
    },
    {
      icon: <Bot className="text-accent" size={24} />,
      title: "AI Agents & RAG Pipelines",
      description: "Creating autonomous agents and Retrieval-Augmented Generation workflows for intelligent data interaction."
    },
    {
      icon: <Activity className="text-accent" size={24} />,
      title: "ML System Monitoring",
      description: "Implementing observability and analytics to track model performance and ensure system reliability."
    }
  ];

  return (
    <section className="py-20" id="about">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-10 border-b border-border pb-4 w-fit pr-8">
          About <span className="text-accent">Me</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 rounded-xl hover:border-accent/40 transition-colors group"
            >
              <div className="bg-background/80 w-12 h-12 rounded-lg flex items-center justify-center mb-4 border border-border group-hover:border-accent/50 transition-colors">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">{skill.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
