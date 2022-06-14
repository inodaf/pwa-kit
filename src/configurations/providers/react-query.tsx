import type { FC, ReactNode } from "react";

import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";

const client = new QueryClient();

type Props = { children?: ReactNode };

export const ReactQueryProvider: FC<Props> = ({ children }) => {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};
