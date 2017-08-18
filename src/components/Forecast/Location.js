import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

import WeatherSummary from "./WeatherSummary";

const CityName = styled.h1`text-align: center;`;
const WeatherContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Location = props => {
  const gotoDetails = (weatherData, city) => {
    weatherData.city = props.city;

    props.history.push({
      pathname: `/details/${city}`,
      weatherData: weatherData
    });
  };

  return (
    <div>
      <CityName>
        {props.city}
      </CityName>
      <WeatherContainer>
        {props.forecastData.list.map((forecast, index) =>
          <WeatherSummary
            handleClick={gotoDetails}
            key={index}
            city={props.city}
            weatherData={forecast}
          />
        )}
      </WeatherContainer>
    </div>
  );
};

Location.propTypes = {
  city: PropTypes.string.isRequired,
  forecastData: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default withRouter(Location);
