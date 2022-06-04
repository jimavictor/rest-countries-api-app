import CircularIndeterminate from "../components/CircularIndeterminate";
import BorderCountries from "../components/BorderCountries";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { StyledDetails } from "../styles/Details";

function Details({ dark }) {
  let { country } = useParams();
  const [countryData, setCountryData] = useState([]);

  const fetchDetails = async () => {
    const response = await fetch(
      `https://restcountries.com/v3.1/alpha/${country}`
    );
    const detail = await response.json();
    setCountryData(detail);
  };

  useEffect(() => {
    fetchDetails();
  }, []);
  return (
    <StyledDetails id={dark && "dark-details"}>
      <Link to="/" id={dark && "dark-button"} className="back">
        <ArrowBackIcon />
        <span>back</span>
      </Link>
      <div>
        {countryData.length ? (
          <>
            <div className="container">
              {countryData.map((data, index) => {
                return (
                  <div
                    key={index}
                    id={dark && "dark-details"}
                    className="country-details"
                  >
                    <img
                      className="flag"
                      src={Object.entries(data.flags)[0][1]}
                      alt="flag"
                    />
                    <div className="content">
                      <div className="top-bottom">
                        <div className="top">
                          <h2>{data.name.common}</h2>
                          <span className="native-name">
                            <span className="title">
                              <span className="bold">Native Name: </span>
                              {
                                Object.entries(data.name.nativeName)[0][1]
                                  .common
                              }
                            </span>
                          </span>
                          <span className="population">
                            <span className="title">
                              <span className="bold">Population: </span>
                              {new Intl.NumberFormat().format(data.population)}
                            </span>
                          </span>
                          <span className="region">
                            <span className="title">
                              <span className="bold">Region:</span>{" "}
                              {data.region}
                            </span>
                          </span>
                          <span className="sub-region">
                            <span className="title">
                              <span className="bold">Sub-region:</span>{" "}
                              {data.subregion}
                            </span>
                          </span>
                          <span className="capital">
                            <span className="title">
                              <span className="bold">Capital:</span>{" "}
                              {data.capital}
                            </span>
                          </span>
                        </div>
                        <div className="bottom">
                          <span className="top-level-domain">
                            <span className="title">
                              <span className="bold">Top Level Domain:</span>{" "}
                              {data.tld}
                            </span>
                          </span>
                          <span className="currencies">
                            <span className="title">
                              <span className="bold">Currencies: </span>
                              {data.hasOwnProperty("currencies") ? (
                                <span>
                                  {Object.entries(data.currencies)[0][1].name}
                                </span>
                              ) : (
                                <span>none</span>
                              )}
                            </span>
                          </span>
                          <span className="languages">
                            <span className="title">
                              <span className="bold">Languages: </span>
                              {Object.values(data.languages)[0]}
                            </span>
                          </span>
                        </div>
                      </div>
                      <BorderCountries
                        id={dark && "dark-container"}
                        className="border"
                        code={countryData}
                        dark={dark}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <div className="error-container">
            <CircularIndeterminate />
            <span className="error" id={dark && "dark-loading"}>
              Loading...
            </span>
          </div>
        )}
      </div>
    </StyledDetails>
  );
}

export default Details;
