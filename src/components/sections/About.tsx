import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SKILLS } from "@/data/projects";
import { spring, fadeUp } from "@/lib/animations";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <SectionHeading>About</SectionHeading>
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="text-zinc-600 dark:text-zinc-400 max-w-3xl"
      >
        I'm a hobbyist developer/designer focused on reactive UIs, delightful micro‑interactions, and performance. Recent work includes Steam‑style deal apps, offline manga readers, Genshin music utilities, and cinematic mission hubs inspired by games.
      </motion.p>
    </section>
  );
}
