import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { fetchCountries } from "../../Api/index";

const Form = styled.form`
  max-width: 600px;
  width: 100%;
  margin: 2em auto 1em;
  padding: 15px 0;
  display: flex;
  flex-flow: wrap;
  align-items: center;
  justify-content: center;

  label {
    padding: 15px;
    font-size: 18px;
  }

  select {
    width: 100%;
    font-size: 20px;
    line-height: 32px;
    border: 0;
    color: inherit;
    background-color: #ffffff;
    border-bottom: 1px solid black;
    border-radius: 0;
  }
`;

const CountryPicker = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAPICounties = async () => {
      setCountries(await fetchCountries());
    };
    fetchAPICounties();
  }, []);

  return (
    <Form id="countriesform">
      <label htmlFor="countries">Select A Country:</label>
      <select
        id="country"
        name="countrylist"
        form="countriesform"
        defaultValue=""
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option value="">Global</option>
        {countries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </select>
    </Form>
  );
};

export default CountryPicker;
