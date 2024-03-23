'use client';

import { ThemeProvider } from 'next-themes';
import { useEffect, useState } from 'react';
import RingLoader from 'react-spinners/RingLoader';

export const DarkModeProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => setMounted(true), 1000);

    return () => {
      setMounted(false);
    };
  }, []);

  return !mounted ? (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
      }}
    >
      <RingLoader
        color="purple"
        loading={true}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  ) : (
    <ThemeProvider enableSystem={false} defaultTheme="dark">
      {children}
    </ThemeProvider>
  );
};
