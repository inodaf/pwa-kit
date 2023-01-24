import React, { type ReactNode } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const client = new QueryClient();

export function ReactQueryProvider(props: { children?: ReactNode }) {
  return (
    <QueryClientProvider client={client}>{props.children}</QueryClientProvider>
  );
}
