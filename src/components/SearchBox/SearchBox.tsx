import React, { useContext } from "react";
import { Icon } from "@iconify/react";
import { ThemeContext, themes } from "../../context/theme-context";
import "./SearchBox.css";

export function SearchBox({
  handleInput,
}: {
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className="search-box-container"
      style={{
        backgroundColor:
          theme === themes.dark ? theme.element : theme.background,
        boxShadow: theme === themes.dark ? "" : "rgb(0 0 0 / 22%) 0px 0px 3px",
      }}
    >
      {theme === themes.dark ? (
        <Icon icon="ic:baseline-search" color="white" />
      ) : (
        <Icon icon="ic:baseline-search" />
      )}

      <input
        className="search-box"
        type="text"
        id="input"
        placeholder="Search for a country..."
        onChange={handleInput}
        style={{
          backgroundColor:
            theme === themes.dark ? theme.element : theme.background,
        }}
      />
    </div>
  );
}
