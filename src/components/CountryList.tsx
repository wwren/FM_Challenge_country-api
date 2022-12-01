import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import { ICountry } from "./CountryCard";
import "./CountryList.css";

function CountryList({ countries }: { countries: ICountry[] }) {
  return (
    <div className="country-list-container">
      {countries.map((country) => (
        <CountryCard key={country.name.common} country={country} />
      ))}
    </div>
  );
}

export default CountryList;
