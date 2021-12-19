import type { FC } from "react";

import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";

const client = new QueryClient();

export const ReactQueryProvider: FC = ({ children }) => {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};
