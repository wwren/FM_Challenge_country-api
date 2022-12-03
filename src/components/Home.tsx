import React, { useState, useEffect, useContext } from "react";
import { ICountry } from "./CountryCard";
import CountryList from "./CountryList";
import RegionDropdown from "./RegionDropdown";
import SearchBox from "./SearchBox";
import { ThemeContext, themes } from "../context/theme-context";
import "./Home.css";

function Home() {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [selection, setSelection] = useState<string>();
  const [name, setName] = useState<string>();
  const { theme } = useContext(ThemeContext);
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const selected = (e.target as Element).innerHTML;
    setSelection(selected);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        if (selection && !name) {
          const response = await fetch(
            `https://restcountries.com/v3.1/region/${selection?.toLowerCase()}`
          );
          const countries = await response.json();
          setCountries(countries);
        } else if (name && !selection) {
          const response = await fetch(
            `https://restcountries.com/v3.1/name/${name?.toLowerCase()}`
          );
          if (response.status === 200) {
            const countries = await response.json();

            setCountries(countries);
          }
        } else if (selection && name) {
          const responseName = await fetch(
            `https://restcountries.com/v3.1/name/${name?.toLowerCase()}`
          );
          if (responseName.status === 200) {
            const countriesName = await responseName.json();

            console.log(countriesName);
            const countries = countriesName.filter(
              (country: ICountry) => country.continents[0] === selection
            );
            setCountries(countries);
          }
        } else {
          const response = await fetch("https://restcountries.com/v3.1/all");
          const countries = await response.json();
          setCountries(countries);
        }
      } catch (e) {
        console.log("fetch error");
      }
    }
    fetchData();
  }, [selection, name]);

  return (
    <div className="content" style={{ backgroundColor: theme.background }}>
      <div className="filter-container">
        <SearchBox handleInput={handleInput}></SearchBox>
        <RegionDropdown selection={selection} handleClick={handleClick} />
      </div>

      <CountryList countries={countries} />
    </div>
  );
}

export default Home;
