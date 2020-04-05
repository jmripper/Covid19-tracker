import React from "react";
import Cards from "./Components/Cards/Cards";
import Chart from "./Components/Chart/Chart";
import CountryPicker from "./Components/CountryPicker/CountryPicker";
import { fetchData } from "./Api/index";
import styled from "styled-components";
import "./normalize.css";

const Wrapper = styled.div`
  margin: 2em auto;
  padding: 0 20px;
  @media(min-width: 700px) {
    margin: 4em auto;
  }
`;

const Title = styled.h2`
  font-size: 40px;
  text-align: center;
  margin: 0 auto;
  padding: 15px 15px 25px;

  @media(min-width: 700px) {
    font-size: 40px;
  }
`;

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <Wrapper>
        <Title>Covid-19 Tracker</Title>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </Wrapper>
    );
  }
}

export default App;
