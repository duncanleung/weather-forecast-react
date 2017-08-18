import React from "react";
import PropTypes from "prop-types";
import { withRouter, Link } from "react-router-dom";
import styled from "styled-components";

import { getDate } from "../../utilities/helpers";

const WeatherWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 20px 0;
  cursor: pointer;

  &:hover {
    img {
      opacity: 1;
    }
  }

  @media (min-width: 551px) {
    width: 33%;
  }
`;
const WeatherIcon = styled.img`
  opacity: .6;
  transition: opacity .2s;
`;
const Date = styled.div`
  text-align: center;
  font-weight: 100;
  font-size: 20px;
  color: #333;
`;

const Weather = props => {
  let date = getDate(props.weatherData.dt);
  let icon = props.weatherData.weather[0].icon;

  let parsedQueryString = new URLSearchParams(props.location.search);
  let city = parsedQueryString.get("city");

  return (
    <WeatherWrapper>
      <Link to={`/details/${city}`}>
        <WeatherIcon
          src={`/images/weather-icons/${icon}.svg`}
          alt={props.weatherData.weather[0].main}
        />
        <Date>
          {date}
        </Date>
        {
          <pre>
            <code>
              {JSON.stringify(props.weatherData, null, 2)}
            </code>
          </pre>
        }
      </Link>
    </WeatherWrapper>
  );
};

Weather.propTypes = {
  weatherData: PropTypes.object.isRequired
};

export default withRouter(Weather);
