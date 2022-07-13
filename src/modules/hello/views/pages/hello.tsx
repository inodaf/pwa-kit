import React from "react";
import { Greetings } from "@/modules/ui/views/components/greetings";

export function HelloPage() {
  return (
    <>
      <Greetings />
      <a href="/xpto" data-testid="link-trigger">
        Click me
      </a>
    </>
  );
}
