import React, { Component } from "react";
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
              weatherData={this.state.forecast.list}
            />}
      </div>
    );
  }
}

export default withRouter(Forecast);

const City = props => {
  return (
    <div>
      <h1>
        {props.city}
      </h1>
      {props.weatherData.map((forecast, index) =>
        <Weather key={index} weatherData={forecast} />
      )}
    </div>
  );
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
