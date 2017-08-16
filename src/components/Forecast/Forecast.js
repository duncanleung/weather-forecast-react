import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

import apiMethods from "../../utilities/api.js";

class Forecast extends Component {
  constructor(props) {
    super(props);

    this.state = {
      forecast: null
    };
  }

  componentDidMount() {
    const parsedQueryString = new URLSearchParams(this.props.location.search);
    const location = parsedQueryString.get("city");

    apiMethods.fetchForecast(location).then(response => {
      this.setState((prevState, props) => {
        return {
          forecast: response
        };
      });
    });
  }

  render() {
    return (
      <div>
        {this.state.forecast
          ? this.state.forecast.list.map((forecast, index) =>
              <Weather key={index} weatherData={forecast} />
            )
          : "Loading"}
      </div>
    );
  }
}

export default withRouter(Forecast);

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
