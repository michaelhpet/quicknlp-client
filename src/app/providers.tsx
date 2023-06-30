"use client";

import { ThemeProvider } from "next-themes";

interface Props {
  children: React.ReactNode;
}

export default function Providers(props: Props) {
  return (
    <ThemeProvider
      attribute="class"
      enableSystem={false}
      disableTransitionOnChange
    >
      {props.children}
    </ThemeProvider>
  );
}
