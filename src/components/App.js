import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";

import Home from "./Home/Home";
import Forecast from "./Forecast/Forecast";
import Header from "./Header/Header";
// import NotFound from "./NotFound/NotFound";
import pattern from "../images/pattern.svg";

const Background = styled.div`
  // background: url('${pattern}');
  height: 100vh;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 10px;
`;

class App extends Component {
  render() {
    return (
      <Router>
        <Background>
          <Route
            render={props =>
              <Header
                submitLocation={city =>
                  props.history.push({
                    pathname: "forecast",
                    search: `?city=${city}`
                  })}
              />}
          />
          <Route
            exact
            path="/"
            render={props =>
              <Home
                submitLocation={city =>
                  props.history.push({
                    pathname: "forecast",
                    search: `?city=${city}`
                  })}
              />}
          />
          <Route path="/forecast" component={Forecast} />
          {/* <Route component={NotFound} /> */}
        </Background>
      </Router>
    );
  }
}

export default App;
