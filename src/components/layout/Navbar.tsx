import React from "react";
import { Sun, Moon, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  isDark: boolean;
  setIsDark: (value: boolean | ((prev: boolean) => boolean)) => void;
}

export function Navbar({ isDark, setIsDark }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 supports-[backdrop-filter]:dark:bg-zinc-950/60 border-b border-zinc-200/60 dark:border-zinc-800/60">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-lg">
          VinhElysia's Portfolio
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#about" className="opacity-80 hover:opacity-100">
            About
          </a>
          <a href="#projects" className="opacity-80 hover:opacity-100">
            Projects
          </a>
          <a href="#contact" className="opacity-80 hover:opacity-100">
            Contact
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <Button
            size="icon"
            variant="secondary"
            onClick={() => setIsDark((v) => !v)}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button asChild>
            <a href="/resume.pdf" download>
              Resume
              <ChevronRight className="ml-1 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
