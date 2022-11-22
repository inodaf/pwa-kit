import React from "react";
import { Greetings } from "@/modules/ui/views/components/greetings";

export function HelloPage() {
  return (
    <div className="h-screen p-6 dark:bg-zinc-800">
      <Greetings />
      <a href="/xpto" data-testid="link-trigger">
        Click me
      </a>
    </div>
  );
}
