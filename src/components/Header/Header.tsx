import React from "react";
import { Icon } from "@iconify/react";
import { themes, useTheme } from "../../context/theme-context";
import "./Header.css";

export function Header() {
  const { theme, setThemeToggle } = useTheme();

  const toggleTheme = () =>
    setThemeToggle((prev: any) =>
      prev === themes.light ? themes.dark : themes.light
    );
  return (
    <header
      style={{
        backgroundColor:
          theme === themes.dark ? theme.element : theme.background,
        color: theme.font,
        boxShadow: theme === themes.dark ? "" : "rgb(0 0 0 / 22%) 0px 0px 3px",
        position: theme === themes.dark ? "static" : "relative",
        zIndex: 10,
      }}
    >
      <h2>Where is the world?</h2>
      <div className="dark-mode" onClick={toggleTheme}>
        {theme === themes.dark ? (
          <Icon icon="ph:moon-light" color="white" />
        ) : (
          <Icon icon="ph:moon-light" />
        )}

        <p>Dark Mode</p>
      </div>
    </header>
  );
}
