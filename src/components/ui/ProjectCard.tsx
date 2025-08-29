import React from "react";
import { motion } from "framer-motion";
import { Github, Globe, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  console.log('ProjectCard received:', project);
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35 }}
    >
      <Card className="group overflow-hidden border border-zinc-200/60 dark:border-zinc-800/60 bg-white/60 dark:bg-zinc-900/60 backdrop-blur supports-[backdrop-filter]:bg-white/40 supports-[backdrop-filter]:dark:bg-zinc-900/40">
        <div className="relative h-40 w-full overflow-hidden">
          {project.image ? (
            <img 
              src={project.image} 
              alt={`${project.title} preview`}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/40 via-fuchsia-400/40 to-emerald-400/40 dark:from-indigo-600/30 dark:via-fuchsia-600/30 dark:to-emerald-600/30" />
          )}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        </div>
        <CardHeader className="pb-2">
          <div className="flex items-start gap-2">
            {project.pinned && (
              <Badge variant="secondary" className="rounded-full px-2 py-1 text-xs">
                <Star className="h-3.5 w-3.5 mr-1 inline" />
                Pinned
              </Badge>
            )}
          </div>
          <CardTitle className="text-lg mt-1 leading-tight text-zinc-900 dark:text-zinc-100">
            {project.title || "NO TITLE"}
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
            {project.description || "NO DESCRIPTION"}
          </p>
          <div className="flex items-center gap-2">
            {project.demoUrl && (
              <Button
                asChild
                size="sm"
                className="transition-transform hover:translate-y-[-1px]"
              >
                <a href={project.demoUrl} target="_blank" rel="noreferrer">
                  <Globe className="mr-2 h-4 w-4" />
                  Website
                </a>
              </Button>
            )}
            {project.repoUrl && (
              <Button
                asChild
                size="sm"
                variant="secondary"
                className="transition-transform hover:translate-y-[-1px]"
              >
                <a href={project.repoUrl} target="_blank" rel="noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Github Repo
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
