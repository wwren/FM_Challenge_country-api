import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext, themes } from "../context/theme-context";
import "./CountryCard.css";

export interface ICountry {
  name: { common: string; offocial: string; nativeName: string };
  population: number;
  region: string;
  subregion: string;
  currencies: { any: { name: string; symbol: string } };
  tld: string[];
  languages: { any: string };
  borders: string[];
  capital: string;
  flags: { png: string; svg: string };
  continents: string[];
}

function CountryCard({ country }: { country: ICountry }) {
  const { population, region, capital, name, flags } = country;
  const { theme } = useContext(ThemeContext);

  let navigate = useNavigate();
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    navigate(`/country/${name.common}`);
  };

  return (
    <div
      className="country-card-container"
      onClick={handleClick}
      style={{
        backgroundColor:
          theme === themes.dark ? theme.element : theme.background,

        boxShadow: theme === themes.dark ? "" : "rgb(0 0 0 / 35%) 0px 5px 15px",
      }}
    >
      <img src={flags.png} alt={`${country.name.common}-flag`} />
      <div className="country-card-text" style={{ color: theme.font }}>
        <h3>{name.common}</h3>
        <p>
          <span className="title">Population: </span>

          <span
            style={{
              color: theme === themes.dark ? theme.font : theme.element,
            }}
          >
            {" "}
            {population}
          </span>
        </p>
        <p>
          <span className="title">Region: </span>
          <span
            style={{
              color: theme === themes.dark ? theme.font : theme.element,
            }}
          >
            {region}
          </span>
        </p>
        <p className="title">
          <span className="title">Capital: </span>
          <span
            style={{
              color: theme === themes.dark ? theme.font : theme.element,
            }}
          >
            {" "}
            {capital}
          </span>
        </p>
      </div>
    </div>
  );
}

export default CountryCard;
