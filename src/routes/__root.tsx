import { Header } from "@/components/layout/Header";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Toaster } from "@/components/ui/toaster";
import { mountVercelToolbar } from "@vercel/toolbar";

import { ThemeProvider } from "@/components/theme-provider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Footer } from "@/components/layout/Footer";
import { useEffect } from "react";
import { HeaderControllerProvider } from "@/components/layout/HeaderControllerProvider";

export const Route = createRootRoute({
  component: Root,
});

function Root() {
  useEffect(() => {
    mountVercelToolbar();
  }, []);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <HeaderControllerProvider>
        <Header />
        <main className="min-h-[calc(100dvh-56px)]">
          <Outlet />
        </main>
        <Toaster />
        {import.meta.env.DEV && (
          <>
            <TanStackRouterDevtools position="bottom-right" />
            <ReactQueryDevtools buttonPosition="top-right" />
          </>
        )}
        <Footer />
      </HeaderControllerProvider>
    </ThemeProvider>
  );
}
