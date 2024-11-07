import { DefaultOptions } from "@tanstack/react-query";

export const DEFAULT_TIMEOUT = 30 * 1000;

export const DEFAULT_CACHETIME = 5 * 60 * 1000;

export const DEFAULT_QUERY_CLIENT_OPTIONS: DefaultOptions = {
  queries: {
    refetchOnWindowFocus: false,
    enabled: false,
    staleTime: Infinity,
    gcTime: 0,
    retry: 1,
  },
};

export const DEFAULT_HEADERS = {
  "Content-Type": "application/json",
};
