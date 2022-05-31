import React, { useState, useEffect } from "react";
import { StyledContainer } from "../styles/BorderCountries";
import { StyledGrid } from "../styles/BorderCountries";

function BorderCountries({ code, className, id }) {
  const [data, setData] = useState([]);
  let arr;
  if (code[0].hasOwnProperty("borders")) {
    arr = code[0].borders.join(",").toString();
  }

  function fetchData() {
    fetch(`https://restcountries.com/v3.1/alpha?codes=${arr}`)
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData);
      });
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={className}>
      <span className="bold">Borders: </span>
      {data.length > 0 ? (
        <StyledGrid className="grid">
          {data.map((item, index) => {
            return (
              <StyledContainer id={id} key={index}>
                {" "}
                {item.name.common}
              </StyledContainer>
            );
          })}
        </StyledGrid>
      ) : (
        "None"
      )}
    </div>
  );
}

export default BorderCountries;
