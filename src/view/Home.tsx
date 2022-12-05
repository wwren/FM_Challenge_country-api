import React, { useState, useEffect } from "react";
import { ICountry } from "../model/ICountry";
import { CountryList } from "../components/CountryList";
import { RegionDropdown } from "../components/RegionDropdown";
import { SearchBox } from "../components/SearchBox";
import { useTheme } from "../context/theme-context";
import useFetchCountries from "../utils/useFetchCountries";
import "./Home.css";

function Home() {
  const { theme } = useTheme();
  const { countries, selection, setSelection, setName } = useFetchCountries();

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const selected = (e.target as Element).innerHTML;
    setSelection(selected);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <main className="content" style={{ backgroundColor: theme.background }}>
      <div className="filter-container">
        <SearchBox handleInput={handleInput}></SearchBox>
        <RegionDropdown selection={selection} handleClick={handleClick} />
      </div>

      <CountryList countries={countries} />
    </main>
  );
}

export default Home;
