import React, { Component } from "react";
import PropTypes from "prop-types";

import apiMethods from "../../utilities/api.js";

const withData = WrappedComponent =>
  class WithData extends Component {
    constructor(props) {
      super(props);

      this.state = {
        forecast: null,
        city: null,
        loading: true,
        error: null
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
      return <WrappedComponent {...this.state} {...this.props} />;
    }
  };

export default withData;
