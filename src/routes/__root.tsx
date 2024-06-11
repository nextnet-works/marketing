import { Header } from "@/components/layout/Header";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Toaster } from "@/components/ui/toaster";

import { ThemeProvider } from "@/components/theme-provider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Footer } from "@/components/layout/Footer";

export const Route = createRootRoute({
  component: Root,
});

function Root() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div>
        <Header />
        <main className="flex-1 p-4 flex flex-col gap-4 items-center min-h-[calc(100dvh-56px)]">
          <Outlet />
          <Toaster />
          {import.meta.env.DEV && (
            <>
              <TanStackRouterDevtools position="bottom-right" />
              <ReactQueryDevtools buttonPosition="top-right" />
            </>
          )}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
