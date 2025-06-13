"use client";

import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";
import RingLoader from "react-spinners/RingLoader";

export const DarkModeProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 300);

    return () => {
      clearTimeout(timer);
      setMounted(false);
    };
  }, []);

  return !mounted ? (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        backgroundColor: "var(--background)",
      }}
    >
      <RingLoader
        color="var(--foreground)"
        loading={true}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  ) : (
    <ThemeProvider enableSystem={false} defaultTheme="dark" attribute="class">
      {children}
    </ThemeProvider>
  );
};
