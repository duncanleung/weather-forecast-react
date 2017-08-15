import axios from "axios";

import config from "../config";

const baseURL = `http://api.openweathermap.org/data/2.5/`;

const api = {
  currentWeather: location =>
    `${baseURL}weather?q=${location}&type=accurate&APPID=${config.apiKey}`,
  forecast: location =>
    `${baseURL}forecast/daily?q=${location}&type=accurate&APPID=${config.apiKey}&cnt=5`
};

const apiMethods = {
  fetchCurrentWeather: function(location) {
    const encodedURI = window.encodeURI(api.currentWeather(location));

    return axios.get(encodedURI).then(currentWeatherData => {
      return currentWeatherData.data;
    });
  },

  fetchForecast: function(location) {
    const encodedURI = window.encodeURI(api.forecast(location));

    return axios.get(encodedURI).then(forecast => {
      return forecast.data;
    });
  }
};

export default apiMethods;
