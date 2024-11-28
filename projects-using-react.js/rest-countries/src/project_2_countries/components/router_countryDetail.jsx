import { useState } from "react";

import { useEffect, useState } from "react";

import {
  Link,
  useParams,
  useLocation,
  useOutletContext,
} from "react-router-dom";

import "../style/countryDetails.css";

import ShimmerDetails from "./router_shimmer_details";
import { ThemeContext } from "../contexts/themeContext";
import { useContext } from "react";
import WindowSize from "../hooks/useWindowSize";
import { UseTheme } from "../hooks/useTheme";

export default function CountryDetail() {
  // const countryName = new URLSearchParams(location.search).get("name"); //. static routing

  //-> dynamic routing

  const params = useParams();
  const countryName = params.country;
  const { state } = useLocation();
  // const [isDark] = useOutletContext(); //! contextAPI provided by 'react-router-dom'
  // const [isDark] = useContext(ThemeContext); //! contextAPI provided by 'react'
  const [isDark] = UseTheme(); //! custom hook for usign context API.

  const [countryData, setCountryData] = useState(null);
  const [notFound, setNotFound] = useState(false);

  //-> setting country data
  function updateCountryData(data) {
    setCountryData({
      name: data.name.common,
      nativeName: Object.values(data.name.nativeName)[0].common,
      population: data.population,
      region: data.region,
      subregion: data.subregion,
      capital: data.capital,
      flag: data.flags.svg,
      tld: data.tld,
      languages: Object.values(data.languages).join(", "),
      currencies: Object.values(data.currencies)
        .map((currency) => currency.name)
        .join(", "),
      borders: [],
    });

    if (!data.borders) {
      data.borders = [];
    }
    Promise.all(
      data.borders.map((border) => {
        return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
          .then((res) => res.json())
          .then(([borderCountry]) => borderCountry.name.common);
      })
    ).then((borders) => {
      setTimeout(() =>
        setCountryData((prevState) => ({ ...prevState, borders }))
      );
    });
  }

  useEffect(() => {
    if (state) {
      updateCountryData(state);
      return;
    }

    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        // console.log(data);
        updateCountryData(data);
      })
      .catch((err) => {
        console.log(err);
        setNotFound(true);
      });
  }, [countryName]);

  if (notFound) {
    return <div>Country Not found</div>;
  }

  if (countryData === null) {
    return (
      <main className={`${isDark ? "dark" : ""} details`}>
        <ShimmerDetails />
      </main>
    );
  }

  // prettier-ignore
  return (
    <main className={`${isDark ? "dark" : ""}`}>
      <div className="country-details-container">
        <span
          className="back-button"
          onClick={() => {
            history.back();
          }}
        >
          <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
        </span>
        <div className="country-details">
          <img src={countryData.flag} alt={`${countryData.name} flag`} />
          <div className="details-text-container">
            <h1>{countryData.name}</h1>
            <div className="details-text">
              <p>
                <span className="native-name">
                  <b>Native Name: {countryData.nativeName} </b>
                </span>
              </p>
              <p>
                <span className="population">
                  <b>
                    Population: {countryData.population.toLocaleString("en-IN")}
                  </b>
                </span>
              </p>
              <p>
                <span className="region">
                  <b>Region: {countryData.region}</b>
                </span>
              </p>
              <p>
                <span className="sub-region">
                  <b>Sub Region: {countryData.subregion} </b>
                </span>
              </p>
              <p>
                <span className="capital">
                  <b>Capital: {countryData.capital.join(",")}</b>
                </span>
              </p>
              <p>
                <span className="top-level-domain">
                  <b>Top Level Domain: {countryData.tld} </b>
                </span>
              </p>
              <p>
                <span className="currencies">
                  <b>Currencies: {countryData.currencies} </b>
                </span>
              </p>
              <p>
                <span className="languages">
                  <b>Languages: {countryData.languages} </b>
                </span>
              </p>
            </div>
            <div className="border-countries">
              <b>Border Countries: </b>&nbsp;
              {countryData.borders.map((border) => (
                <Link key={border} to={`/${border}`}>
                  {border}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
