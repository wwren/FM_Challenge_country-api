import React from "react";
import "./CountryCard.css";

export interface ICountry {
  name: { common: string; offocial: string; nativeName: string };
  population: number;
  region: string;
  capital: string;
  flags: { png: string; svg: string };
  continents: string[];
}

function CountryCard({ country }: { country: ICountry }) {
  const { population, region, capital, name, flags } = country;

  return (
    <div className="country-card-container">
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
