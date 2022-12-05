import React, { useState, useEffect } from "react";
import { ICountry } from "../model/ICountry";

export default function useFetchCountries() {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [selection, setSelection] = useState<string>();
  const [name, setName] = useState<string>();

  useEffect(() => {
    async function fetchData() {
      try {
        if (selection && !name) {
          fetchCountries(
            `https://restcountries.com/v3.1/region/${selection?.toLowerCase()}`,
            setCountries
          );
        } else if (name && !selection) {
          fetchCountries(
            `https://restcountries.com/v3.1/name/${name?.toLowerCase()}`,
            setCountries
          );
        } else if (selection && name) {
          fetchCountries(
            `https://restcountries.com/v3.1/name/${name?.toLowerCase()}`,
            setCountries,
            selection
          );
        } else {
          fetchCountries("https://restcountries.com/v3.1/all", setCountries);
        }
      } catch (e) {
        console.log("fetch error");
      }
    }
    fetchData();
  }, [selection, name]);

  return { countries, selection, setSelection, setName };
}

async function fetchCountries(
  endpoint: string,
  setCountries: React.Dispatch<React.SetStateAction<ICountry[]>>,
  selection: string | null = null
) {
  const response = await fetch(endpoint);
  if (response.status === 200) {
    const countries = await response.json();
    if (selection) {
      const country = countries.filter(
        (country: ICountry) => country.continents[0] === selection
      );
      setCountries(country);
      return;
    }
    setCountries(countries);
  }
}
