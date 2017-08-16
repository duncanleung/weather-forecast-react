import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

import apiMethods from "../../utilities/api.js";

class Forecast extends Component {
  constructor(props) {
    super(props);

    this.state = {
      forecast: null,
      loading: true
    };
  }

  componentDidMount() {
    const parsedQueryString = new URLSearchParams(this.props.location.search);
    const location = parsedQueryString.get("city");

    apiMethods.fetchForecast(location).then(response => {
      this.setState((prevState, props) => {
        return {
          forecast: response,
          loading: false
        };
      });
    });
  }

  render() {
    return (
      <div>
        {this.state.loading
          ? "Loading"
          : <City
              city={this.state.forecast.city.name}
              forecastData={this.state.forecast.list}
            />}
      </div>
    );
  }
}

Forecast.propTypes = {
  location: PropTypes.object
};

export default withRouter(Forecast);

const CityName = styled.h1`text-align: center;`;

const City = props => {
  return (
    <div>
      <CityName>
        {props.city}
      </CityName>
      {props.forecastData.map((forecast, index) =>
        <Weather key={index} weatherData={forecast} />
      )}
    </div>
  );
};

City.propTypes = {
  city: PropTypes.string.isRequired,
  forecastData: PropTypes.array.isRequired
};

const Weather = props => {
  return (
    <div>
      {
        <pre>
          <code>
            {JSON.stringify(props.weatherData, null, 2)}
          </code>
        </pre>
      }
    </div>
  );
};

Weather.propTypes = {
  weatherData: PropTypes.object.isRequired
};
