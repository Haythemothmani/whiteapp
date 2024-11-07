import React from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DEFAULT_QUERY_CLIENT_OPTIONS } from "./constants/constants";

const queryClient = new QueryClient({
  defaultOptions: DEFAULT_QUERY_CLIENT_OPTIONS,
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
