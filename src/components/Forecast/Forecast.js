import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

import { getDate } from "../../utilities/helpers";
import apiMethods from "../../utilities/api.js";

class Forecast extends Component {
  constructor(props) {
    super(props);

    this.state = {
      forecast: null,
      loading: true,
      city: null
    };
  }

  componentDidMount() {
    const parsedQueryString = new URLSearchParams(this.props.location.search);
    this.setState(
      (prevState, props) => {
        return {
          city: parsedQueryString.get("city")
        };
      },
      () => this.getLocationForecast(this.state.city)
    );
  }

  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps");
    const parsedQueryString = new URLSearchParams(nextProps.location.search);

    this.setState(
      (prevState, props) => {
        return {
          city: parsedQueryString.get("city")
        };
      },
      () => this.getLocationForecast(this.state.city)
    );
  }

  getLocationForecast(location) {
    console.log("get", location);

    apiMethods.fetchForecast(location).then(response => {
      console.log(response.city.name);
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
        {this.state.loading === true
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
  let date = getDate(props.weatherData.dt);
  let icon = props.weatherData.weather[0].icon;

  return (
    <div>
      <img
        src={`/images/weather-icons/${icon}.svg`}
        alt={props.weatherData.weather[0].main}
      />
      <div>
        {date}
      </div>
      {/* {
        <pre>
          <code>
            {JSON.stringify(props.weatherData, null, 2)}
          </code>
        </pre>
      } */}
    </div>
  );
};

Weather.propTypes = {
  weatherData: PropTypes.object.isRequired
};
