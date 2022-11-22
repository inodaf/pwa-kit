import React, { type ReactNode } from "react";
import { ReactQueryProvider } from "./react-query";

type Props = {
  children: ReactNode;
};

// Entrypoint for *all* providers.
export function AppProviders(props: Props): JSX.Element {
  return <ReactQueryProvider>{props.children}</ReactQueryProvider>;
}
