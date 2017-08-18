import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import Location from "./Location";

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
        {this.state.loading === true
          ? "Loading"
          : <Location
              city={this.state.forecast.city.name}
              forecastData={this.state.forecast}
            />}
      </div>
    );
  }
}

Forecast.propTypes = {
  location: PropTypes.object
};

export default withRouter(Forecast);
