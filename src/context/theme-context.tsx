import React, { ReactNode, useState } from "react";

export interface IThemes {
  light: {
    font: string;
    element: string;
    background: string;
  };
  dark: {
    font: string;
    element: string;
    background: string;
  };
}

export const themes: IThemes = {
  light: {
    font: "hsl(200, 15%, 8%)",
    element: "hsl(0, 0%, 52%)",
    background: "hsl(0, 0%, 98%)",
  },
  dark: {
    font: "hsl(0, 0%, 100%)",
    element: "hsl(209, 23%, 22%)",
    background: "hsl(207, 26%, 17%)",
  },
};

export const ThemeContext = React.createContext({
  theme: themes.dark,
  setThemeToggle: (theme: any) => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setThemeToggle] = useState(themes.dark);

  const value = { theme, setThemeToggle };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
