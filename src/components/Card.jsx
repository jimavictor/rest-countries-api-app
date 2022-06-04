import CircularIndeterminate from "../components/CircularIndeterminate";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CardGrid } from "../styles/Card";
import { motion } from "framer-motion";

function Card({ dark, input, value }) {
  const [countries, setCountries] = useState([]);
  const fetchData = async () => {
    const response = await fetch(`https://restcountries.com/v3.1/all`);
    const data = await response.json();
    setCountries(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <CardGrid>
      {countries.length ? (
        <>
          {countries
            .filter((data) => {
              if (value.toLowerCase().includes("filter")) {
                return data;
              } else if (
                data.region.toLowerCase().includes(value.toLowerCase())
              ) {
                return data;
              }
            })
            .filter((country) => {
              if (
                country.name.common.toLowerCase().includes(input.toLowerCase())
              ) {
                return country;
              }
            })
            .map((country_data, index) => (
              <Link className="link" to={`/${country_data.cca2}`}>
                <motion.div
                  initial={{
                    opacity: 0,
                    translateX: index % 2 === 0 ? -50 : 50,
                    translateY: -50,
                  }}
                  animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.2 }}
                  id={dark && "dark_card"}
                  className="card"
                  key={index}
                >
                  <img
                    className="flag"
                    src={country_data.flags.png}
                    alt="flag"
                  />
                  <div className="details">
                    <span className="name">{country_data.name.common}</span>
                    <span className="population">
                      <span className="data">Population: </span>
                      {new Intl.NumberFormat().format(country_data.population)}
                    </span>
                    <span className="region">
                      <span className="data">Region: </span>{" "}
                      {country_data.region}
                    </span>
                    <span className="capital">
                      <span className="data">Capital: </span>{" "}
                      {country_data.capital}
                    </span>
                  </div>
                </motion.div>
              </Link>
            ))}
        </>
      ) : (
        <div className="error-container">
          <CircularIndeterminate />
          <span className="error" id={dark && "dark-loading"}>
            Loading...
          </span>
        </div>
      )}
    </CardGrid>
  );
}

export default Card;
