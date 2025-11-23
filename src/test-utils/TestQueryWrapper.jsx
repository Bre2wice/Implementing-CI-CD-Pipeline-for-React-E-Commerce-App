import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export function TestQueryWrapper({ children }) {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
