import React from "react";
import { useNavigate } from "react-router-dom";
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

  let navigate = useNavigate();
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    navigate(`/country/${name.common}`);
  };

  return (
    <div className="country-card-container" onClick={handleClick}>
      <img src={flags.png} />
      <div className="country-card-text">
        <h3>{name.common}</h3>
        <p>
          <span>Population: </span>
          {population}
        </p>
        <p>
          <span>Region: </span>
          {region}
        </p>
        <p>
          <span>Capital: </span>
          {capital}
        </p>
      </div>
    </div>
  );
}

export default CountryCard;
