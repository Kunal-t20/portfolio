"use client";

import { motion } from "framer-motion";

export default function GitHubStats() {
  return (
    <section className="py-20" id="stats">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-10 border-b border-border pb-4 w-fit pr-8">
          GitHub <span className="text-accent">Stats</span>
        </h2>

        <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
          <motion.div 
             whileHover={{ scale: 1.02 }}
             className="glass-card p-2 rounded-xl border border-border overflow-hidden w-full lg:w-1/2 flex justify-center bg-card shadow-lg"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://github-readme-stats.vercel.app/api?username=Kunal-t20&theme=dark&hide_border=true&bg_color=111827&title_color=3b82f6" 
              alt="Kunal's GitHub Stats"
              className="w-full h-auto max-w-[450px]"
            />
          </motion.div>
          
          <motion.div 
             whileHover={{ scale: 1.02 }}
             className="glass-card p-2 rounded-xl border border-border overflow-hidden w-full lg:w-1/2 flex justify-center bg-card shadow-lg"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=Kunal-t20&theme=dark&hide_border=true&bg_color=111827&title_color=3b82f6&layout=compact" 
              alt="Kunal's Top Languages"
              className="w-full h-auto max-w-[400px]"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
