import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { themes, useTheme } from "../../context/theme-context";
import "./RegionDropdown.css";

export function RegionDropdown({
  selection,
  handleClick,
}: {
  selection: string | undefined;
  handleClick: (e: React.MouseEvent<HTMLElement>) => void;
}) {
  const [openToggle, setOpenToggle] = useState(false);
  const { theme } = useTheme();

  return (
    <div
      className="dropdown"
      style={{
        color: theme.font,
      }}
    >
      <div
        className="selected"
        onClick={() => setOpenToggle(!openToggle)}
        style={{
          backgroundColor:
            theme === themes.dark ? theme.element : theme.background,
          boxShadow:
            theme === themes.dark ? "" : "rgb(0 0 0 / 22%) 0px 0px 3px",
        }}
      >
        {selection ? <span>{selection}</span> : <span> Filter By Region</span>}
        {theme === themes.dark ? (
          <Icon icon="ic:baseline-keyboard-arrow-down" color="white" />
        ) : (
          <Icon icon="ic:baseline-keyboard-arrow-down" />
        )}
      </div>
      {openToggle && (
        <div className="drop-content">
          <ul
            style={{
              backgroundColor:
                theme === themes.dark ? theme.element : theme.background,
              boxShadow:
                theme === themes.dark ? "" : "rgb(0 0 0 / 22%) 0px 0px 3px",
            }}
          >
            <li onClick={handleClick}>Africa</li>
            <li onClick={handleClick}>America</li>
            <li onClick={handleClick}>Asia</li>
            <li onClick={handleClick}>Europe</li>
            <li onClick={handleClick}>Oceania</li>
          </ul>
        </div>
      )}
    </div>
  );
}
