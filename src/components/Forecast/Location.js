import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Weather from "./Weather";

const CityName = styled.h1`text-align: center;`;
const WeatherContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Location = props => {
  return (
    <div>
      <CityName>
        {props.city}
      </CityName>
      <WeatherContainer>
        {props.forecastData.map((forecast, index) =>
          <Weather key={index} weatherData={forecast} />
        )}
      </WeatherContainer>
    </div>
  );
};

Location.propTypes = {
  city: PropTypes.string.isRequired,
  forecastData: PropTypes.array.isRequired
};

export default Location;
