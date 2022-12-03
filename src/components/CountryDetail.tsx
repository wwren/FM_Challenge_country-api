import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ICountry } from "./CountryCard";
import { useNavigate } from "react-router-dom";
import { ThemeContext, themes } from "../context/theme-context";
import "./CountryDetail.css";
var countries = require("i18n-iso-countries");
countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

function CountryDetail() {
  const { name } = useParams();
  const [country, setCountry] = useState<ICountry>();
  const { theme } = useContext(ThemeContext);

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
    <div
      className="country-detail-container"
      style={{
        color: theme.font,
        backgroundColor: theme.background,
      }}
    >
      <button
        className="country-detail-button back-button"
        onClick={handleClickToHome}
        style={{
          background: theme === themes.dark ? theme.element : theme.background,
          color: theme.font,
          boxShadow:
            theme === themes.dark ? "" : "rgb(0 0 0 / 22%) 0px 0px 3px",
        }}
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
                    <span className="description">Native Name:</span>
                    <span
                      style={{
                        color:
                          theme === themes.dark ? theme.font : theme.element,
                      }}
                    >
                      {country.name.common}
                    </span>
                  </p>
                  <p>
                    <span className="description">Population:</span>
                    <span
                      style={{
                        color:
                          theme === themes.dark ? theme.font : theme.element,
                      }}
                    >
                      {country.population.toLocaleString()}
                    </span>
                  </p>
                  <p>
                    <span className="description">Region:</span>
                    <span
                      style={{
                        color:
                          theme === themes.dark ? theme.font : theme.element,
                      }}
                    >
                      {country.region}
                    </span>
                  </p>
                  <p>
                    <span className="description">Sub Region:</span>
                    <span
                      style={{
                        color:
                          theme === themes.dark ? theme.font : theme.element,
                      }}
                    >
                      {country.subregion}
                    </span>
                  </p>
                  <p>
                    <span className="description">Capital:</span>
                    <span
                      style={{
                        color:
                          theme === themes.dark ? theme.font : theme.element,
                      }}
                    >
                      {country.capital}
                    </span>
                  </p>
                </div>
                <div className="country-detail-text-bottom__right-panel">
                  <p className="description">
                    <span className="description">Top Level Domain:</span>
                    <span
                      style={{
                        color:
                          theme === themes.dark ? theme.font : theme.element,
                      }}
                    >
                      {country.tld.map((tld) => tld)}
                    </span>
                  </p>
                  <p className="description">
                    <span className="description">Currencies:</span>
                    <span
                      style={{
                        color:
                          theme === themes.dark ? theme.font : theme.element,
                      }}
                    >
                      {(Object.values(country?.currencies)[0] as any).name}
                    </span>
                  </p>
                  <p className="description">
                    <span className="description">Languages:</span>
                    <span
                      style={{
                        color:
                          theme === themes.dark ? theme.font : theme.element,
                      }}
                    >
                      {(Object.values(country.languages) as string[]).map(
                        (language: string) => language
                      )}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            {country.borders && (
              <div className="country-detail-text-border-countries">
                <p>
                  <span className="description">
                    Border Countries:
                    <div className="button-group">
                      {country.borders.map((border) => (
                        <button
                          key={border}
                          className="country-detail-button country-button"
                          onClick={() =>
                            handleClickToCountry(
                              countries.getName(border, "en")
                            )
                          }
                          style={{
                            background:
                              theme === themes.dark
                                ? theme.element
                                : theme.background,
                            color:
                              theme === themes.dark
                                ? theme.font
                                : theme.element,
                            boxShadow:
                              theme === themes.dark
                                ? ""
                                : "rgb(0 0 0 / 22%) 0px 0px 3px",
                          }}
                        >
                          {countries.getName(border, "en")}
                        </button>
                      ))}
                    </div>
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
