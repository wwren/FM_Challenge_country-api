import React from "react";
import { CountryCard } from "../CountryCard";
import { ICountry } from "../../model/ICountry";

import "./CountryList.css";

export function CountryList({ countries }: { countries: ICountry[] }) {
  return (
    <div className="country-list-container">
      {countries.map((country) => (
        <CountryCard key={country.name.common} country={country} />
      ))}
    </div>
  );
}
