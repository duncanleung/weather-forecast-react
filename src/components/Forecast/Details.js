import React from "react";
import styled from "styled-components";

import WeatherSummary from "./WeatherSummary";

import { convertTemp } from "../../utilities/helpers";

const DetailsList = styled.div`
  font-size: 34px;
  font-weight: 100;
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
`;

const Details = props => {
  const data = props.history.location.weatherData;
  return (
    <div>
      <WeatherSummary weatherData={data} />
      <div>
        <p>
          {data.city}
        </p>
        <p>
          {data.weather[0].description}
        </p>
        <p>
          min temp: {convertTemp(data.temp.min)} degrees
        </p>
        <p>
          max temp: {convertTemp(data.temp.max)} degrees
        </p>
        <p>
          humidity: {data.humidity}
        </p>
      </div>
    </div>
  );
};

export default Details;
