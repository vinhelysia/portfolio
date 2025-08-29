import React from "react";
import { ChevronRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-10 border-t border-zinc-200/60 dark:border-zinc-800/60">
      <div className="mx-auto max-w-6xl px-4 text-sm text-zinc-500 flex items-center justify-between">
        <span>© {new Date().getFullYear()} VinhElysia All rights reserved.</span>
        <a
          href="#home"
          className="opacity-80 hover:opacity-100 transition inline-flex items-center gap-1"
        >
          Back to top
          <ChevronRight className="h-4 w-4" />
        </a>
      </div>
    </footer>
  );
}
