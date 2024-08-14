import { Header } from "@/components/layout/Header";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Toaster } from "@/components/ui/toaster";

import { ThemeProvider } from "@/components/theme-provider";
import { Footer } from "@/components/layout/Footer";

export const Route = createRootRoute({
  component: Root,
});

function Root() {
  return (
    <ThemeProvider storageKey="vite-ui-theme" defaultTheme="light">
      <Header />
      <main className="flex flex-col items-center gap-4 p-4 min-h-[calc(100vh-56px)]">
        <Outlet />
        <Toaster />
        {import.meta.env.DEV && (
          <>
            <TanStackRouterDevtools position="bottom-right" />
          </>
        )}
      </main>
      <Footer />
    </ThemeProvider>
  );
}
