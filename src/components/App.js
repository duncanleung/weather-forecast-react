import React, { Component } from "react";
import styled from "styled-components";

import Home from "./Home/Home";
import Header from "./Header/Header";
import pattern from "../images/pattern.svg";

const Background = styled.div`
  // background: url('${pattern}');
  height: 100vh;
  max-width: 800px;
  margin: 0 auto;
`;

class App extends Component {
  render() {
    return (
      <Background>
        <Header />
        <Home />
      </Background>
    );
  }
}

export default App;
