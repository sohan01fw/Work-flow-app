// app/providers.tsx
"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import NextNProgress from "nextjs-progressbar";

export function ThemeProviders({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NextNProgress />
      <NextUIProvider>
        <NextThemesProvider attribute="class" defaultTheme="dark">
          {children}
        </NextThemesProvider>
      </NextUIProvider>
    </>
  );
}
