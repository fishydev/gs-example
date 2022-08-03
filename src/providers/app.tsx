import * as React from "react"
import { HelmetProvider } from "react-helmet-async"
import { BrowserRouter as Router } from "react-router-dom"
import { QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { queryClient } from "@/lib/react-query"

type AppProviderProps = {
  children: React.ReactNode
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        {process.env.NODE_ENV !== "test" && <ReactQueryDevtools />}
        <Router>{children}</Router>
      </QueryClientProvider>
    </HelmetProvider>
  )
}
