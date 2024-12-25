import { Header } from "@/components/layout/Header";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";
import { mountVercelToolbar, unmountVercelToolbar } from "@vercel/toolbar";
import { ThemeProvider } from "@/components/theme-provider";
import { Footer } from "@/components/layout/Footer";
import { useEffect } from "react";

const VERCEL_DEV_URL = "website-git-dev-next-net-8d4aaaa8.vercel.app";
const VERCEL_PROJECT_ID = "next-net-8d4aaaa8";

export const Route = createRootRoute({
  component: Root,
});

function Root() {
  useEffect(() => {
    if (!window.location.href.includes(VERCEL_DEV_URL)) {
      return;
    }

    mountVercelToolbar({
      projectId: VERCEL_PROJECT_ID,
      branch: "dev",
    });
    
    return () => unmountVercelToolbar();
  }, []);

  return (
    <ThemeProvider storageKey="vite-ui-theme" defaultTheme="light">
      <Header />
      <main className="flex flex-col items-center gap-4 mx-auto p-4 max-w-[1280px] min-h-[calc(100vh-56px)]">
        <Outlet />
        <Toaster />
        {import.meta.env.DEV && <TanStackRouterDevtools position="bottom-right" />}
        <Analytics />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
