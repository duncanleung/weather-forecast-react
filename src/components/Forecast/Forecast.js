import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

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
          : <Location
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
