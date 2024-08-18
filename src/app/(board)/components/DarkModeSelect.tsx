"use client";

import { Select } from "@/subframe/components/Select";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export function DarkModeSelect() {
  const { theme, setTheme } = useTheme();

  // Avoids NextJS hydration. See https://github.com/pacocoursey/next-themes/issues/169
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Select
      label="Appearance"
      helpText=""
      value={theme}
      onValueChange={setTheme}
    >
      <Select.Item value="light">Light</Select.Item>
      <Select.Item value="dark">Dark</Select.Item>
      <Select.Item value="system">System</Select.Item>
    </Select>
  );
}
