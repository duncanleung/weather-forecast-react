import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import Location from "./Location";
import withData from "./withData";

const Forecast = props => {
  return (
    <div>
      {props.loading === true ? (
        "Loading"
      ) : (
        <Location
          city={props.forecast.city.name}
          forecastData={props.forecast}
        />
      )}
    </div>
  );
};

Forecast.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default withRouter(withData(Forecast));
