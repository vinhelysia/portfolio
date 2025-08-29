import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="home" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-2 gap-8 items-center"
      >
        <div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Hi, I’m VinhElysia. 
          </h1>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400 max-w-prose">
          I develop project related to Genshin Impact for its community and what i find useful.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button
              asChild
              className="transition-transform active:scale-[0.98]"
              style={{ transitionTimingFunction: "cubic-bezier(0.2,0.8,0.2,1)" }}
            >
              <a href="#projects">View Projects</a>
            </Button>
            <Button asChild variant="secondary">
              <a href="mailto:hello@example.com">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </a>
            </Button>
            <Button asChild variant="ghost">
              <a href="https://github.com/VinhElysia" target="https://github.com/VinhElysia" rel="noreferrer noopener">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 16 }}
          className="aspect-square rounded-2xl overflow-hidden border border-zinc-200/60 dark:border-zinc-800/60"
        >
          <img 
            src="/src/assets/hero.jpg" 
            alt="VinhElysia Profile Picture" 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
