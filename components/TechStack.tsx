"use client";

import { motion } from "framer-motion";

const categories = [
  {
    name: "Languages",
    skills: ["Python", "C++", "SQL"]
  },
  {
    name: "AI / Machine Learning",
    skills: ["TensorFlow", "Scikit-learn", "LangChain", "LangGraph", "RAG pipelines", "Vector databases"]
  },
  {
    name: "Backend",
    skills: ["FastAPI", "Flask", "REST APIs", "Async Python"]
  },
  {
    name: "Databases",
    skills: ["PostgreSQL", "Redis", "MySQL"]
  },
  {
    name: "DevOps",
    skills: ["Docker", "GitHub Actions", "AWS", "Render", "Vercel"]
  },
  {
    name: "Tools",
    skills: ["Linux", "Git", "VS Code", "Jupyter"]
  }
];

export default function TechStack() {
  return (
    <section className="py-20" id="tech-stack">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-10 border-b border-border pb-4 w-fit pr-8">
          Tech <span className="text-accent">Stack</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-card p-6 rounded-xl flex flex-col h-full border-border/50 hover:border-accent/40 shadow-sm transition-colors"
            >
              <h3 className="text-xl font-semibold mb-6 flex items-center text-foreground">
                <span className="w-2 h-2 rounded-full bg-accent mr-3"></span>
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2 mt-auto">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="bg-background border border-border/60 text-gray-300 text-sm py-1.5 px-3 rounded-full hover:border-accent/60 hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
