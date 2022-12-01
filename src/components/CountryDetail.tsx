import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ICountry } from "./CountryCard";
import { useNavigate } from "react-router-dom";
import "./CountryDetail.css";
var countries = require("i18n-iso-countries");
countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

function CountryDetail() {
  const { name } = useParams();
  const [country, setCountry] = useState<ICountry>();
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${name?.toLowerCase()}?fullText=true`
      );
      if (response.status === 200) {
        const countries = await response.json();
        setCountry(countries[0]);
      }
    }
    fetchData();
  }, [name]);

  let navigate = useNavigate();
  const handleClickToCountry = (name: string) => {
    navigate(`/country/${name}`);
  };
  const handleClickToHome = () => {
    navigate("/");
  };

  console.log(country);
  console.log(countries.getName("FRA", "en"));

  return (
    <div className="country-detail-container">
      <button
        className="country-detail-button back-button"
        onClick={handleClickToHome}
      >
        &larr; Back
      </button>
      {country && (
        <div className="country-detail">
          <img src={country.flags.png}></img>
          <div className="country-detail-text">
            <div className="country-detail-text-description">
              <h2>{country.name.common}</h2>
              <div className="country-detail-text-bottom">
                <div className="country-detail-text-bottom__left-panel">
                  <p>
                    <span>Native Name:</span>
                    {country.name.common}
                  </p>
                  <p>
                    <span>Population:</span>
                    {country.population.toLocaleString()}
                  </p>
                  <p>
                    <span>Region:</span>
                    {country.region}
                  </p>
                  <p>
                    <span>Sub Region:</span>
                    {country.subregion}
                  </p>
                  <p>
                    <span>Capital:</span>
                    {country.capital}
                  </p>
                </div>
                <div className="country-detail-text-bottom__right-panel">
                  <p>
                    <span>Top Level Domain:</span>
                    {country.tld.map((tld) => tld)}
                  </p>
                  <p>
                    <span>Currencies:</span>
                    {(Object.values(country?.currencies)[0] as any).name}
                  </p>
                  <p>
                    <span>Languages:</span>
                    {(Object.values(country.languages) as string[]).map(
                      (language: string) => language
                    )}
                  </p>
                </div>
              </div>
            </div>
            {country.borders && (
              <div className="country-detail-text-border-countries">
                <p>
                  <span>
                    Border Countries:{" "}
                    {country.borders.map((border) => (
                      <button
                        key={border}
                        className="country-detail-button country-button"
                        onClick={() =>
                          handleClickToCountry(countries.getName(border, "en"))
                        }
                      >
                        {countries.getName(border, "en")}
                      </button>
                    ))}
                  </span>
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default CountryDetail;
