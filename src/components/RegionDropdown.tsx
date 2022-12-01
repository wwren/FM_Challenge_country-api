import React, { useState } from "react";
import "./RegionDropdown.css";
function RegionDropdown({
  selection,
  handleClick,
}: {
  selection: string | undefined;
  handleClick: (e: React.MouseEvent<HTMLElement>) => void;
}) {
  const [openToggle, setOpenToggle] = useState(false);

  return (
    <div className="dropdown">
      <div className="selected" onClick={() => setOpenToggle(!openToggle)}>
        {selection ? <span>{selection}</span> : <span> Filter By Region</span>}
      </div>
      {openToggle && (
        <div className="drop-content">
          <ul>
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

export default RegionDropdown;
