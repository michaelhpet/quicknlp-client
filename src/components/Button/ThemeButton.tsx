"use client";

import BrightnessIcon from "@/icons/BrightnessIcon";
import Button from "./Button";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import titleCase from "@/utils/titleCase";

export function ThemeButton() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  function handleClick() {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  }

  useEffect(() => {
    let mounting = true;
    if (mounting) setMounted(true);
    return () => {
      mounting = false;
    };
  }, []);

  if (!mounted)
    return (
      <Button endIcon={BrightnessIcon} aria-label="Theme button">
        Color
      </Button>
    );

  return (
    <Button onClick={handleClick} endIcon={BrightnessIcon}>
      {titleCase(theme)}
    </Button>
  );
}
