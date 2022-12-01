import React from "react";
import "./SearchBox.css";

function SearchBox({
  handleInput,
}: {
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="search-box-container">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        className="search-box"
        type="text"
        id="input"
        placeholder="Search for a country..."
        onChange={handleInput}
      />
    </div>
  );
}

export default SearchBox;
