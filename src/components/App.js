import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";

import Home from "./Home/Home";
import Forecast from "./Forecast/Forecast";
import Header from "./Header/Header";
import NotFound from "./NotFound/NotFound";
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
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/forecast/:city" component={Forecast} />
            <Route component={NotFound} />
          </Switch>
        </Background>
      </Router>
    );
  }
}

export default App;
