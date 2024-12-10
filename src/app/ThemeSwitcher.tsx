"use client";
import useTheme from "next-theme";
import React, { useState } from "react";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  return <div>ThemeSwitcher</div>;
};

export default ThemeSwitcher;
