import axios from "axios";

import config from "../config";

const api = {
  currentWeather: location =>
    `http://api.openweathermap.org/data/2.5/weather?q=${location}&type=accurate&APPID=${config.apiKey}`,
  forecast: location =>
    `http://api.openweathermap.org/data/2.5/forecast/daily?q=${location}&type=accurate&APPID=${config.apiKey}&cnt=5`
};

const apiMethods = {
  fetchCurrentWeather: function(location) {
    const encodedURI = window.encodeURI(api.currentWeather(location));

    return axios.get(encodedURI);
  },

  fetchForecast: function(location) {
    const encodedURI = window.encodeURI(api.forecast(location));

    return axios.get(encodedURI);
  }
};

export default apiMethods;
