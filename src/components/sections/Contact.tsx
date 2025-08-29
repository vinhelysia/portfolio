import React from "react";
import { Mail, Github, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <SectionHeading>Contact</SectionHeading>
      <Card>
        <CardContent className="py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <p className="text-sm text-zinc-500">Have a question or want to collaborate?</p>
            <h3 className="text-lg font-semibold">Let's build something cool.</h3>
          </div>
          <div className="flex items-center gap-2">
            <Button asChild>
              <a href="mailto:subi64.64pubg@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                subi64.64pubg@gmail.com
              </a>
            </Button>
            <Button asChild variant="secondary">
              <a href="https://github.com/VinhElysia" target="_blank" rel="noreferrer noopener">
                <Github className="mr-2 h-4 w-4" />
                GitHub      
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
