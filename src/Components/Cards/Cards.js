import React from "react";
import CountUp from "react-countup";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 1rem;
  justify-content: center;
  max-width: 800px;
  margin: 0 auto;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 25px;
  border: 1px solid black;
  box-shadow: 10px 10px 5px #aaaaaa;

  h3 {
    margin: 0;
    padding-bottom: 1em;
    font-size: 24px;
    font-weight: 300;
  }

  h2 {
    margin: 0;
    padding-bottom: 1em;
    font-size: 28px;
  }

  p {
    margin: 0;
    padding: 0 0 20px;
  }
`;

const CardInfected = styled.div`
  margin: 0 2% !important;
  width: 100%;
  border-bottom: 10px solid rgba(0, 0, 255, 0.5);
`;

const CardRecovered = styled.div`
  margin: 0 2% !important;
  width: 100%;
  border-bottom: 10px solid rgba(0, 255, 0, 0.5);
`;

const CardDeaths = styled.div`
  margin: 0 2% !important;
  width: 100%;
  border-bottom: 10px solid rgba(255, 0, 0, 0.5);
`;

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  console.log(confirmed);
  if (!confirmed) {
    return "Loading...";
  }

  return (
    <Grid>
      <CardContainer>
        <CardInfected>
          <h3>Infected</h3>
          <h2>
            <CountUp
              start={0}
              end={confirmed.value}
              duration={2.5}
              separator=","
            />
          </h2>
          <h3>{new Date(lastUpdate).toDateString()}</h3>
          <p># of active cases of COVID-19.</p>
        </CardInfected>
      </CardContainer>
      <CardContainer>
        <CardRecovered>
          <h3>Recovered</h3>
          <h2>
            <CountUp
              start={0}
              end={recovered.value}
              duration={2.5}
              separator=","
            />
          </h2>
          <h3>{new Date(lastUpdate).toDateString()}</h3>
          <p># of recovered cases of COVID-19.</p>
        </CardRecovered>
      </CardContainer>
      <CardContainer>
        <CardDeaths>
          <h3>Deaths</h3>
          <h2>
            <CountUp
              start={0}
              end={deaths.value}
              duration={2.5}
              separator=","
            />
          </h2>
          <h3>{new Date(lastUpdate).toDateString()}</h3>
          <p># of deaths from by COVID-19.</p>
        </CardDeaths>
      </CardContainer>
    </Grid>
  );
};

export default Cards;
