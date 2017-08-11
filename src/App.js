import React, { Component } from "react";
import styled from "styled-components";

import logo from "./logo.svg";

const AppStyles = styled.div`text-align: center;`;

const HeaderStyles = styled.div`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;

const Logo = styled.img`
  animation: App-logo-spin infinite 20s linear;
  height: 80px;

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const Intro = styled.p`font-size: large;`;

class App extends Component {
  render() {
    return (
      <AppStyles>
        <HeaderStyles>
          <Logo src={logo} alt="logo" />
          <h2>Welcome to React</h2>
        </HeaderStyles>
        <Intro>
          To get started, edit <code>src/App.js</code> and save to reload.
        </Intro>
      </AppStyles>
    );
  }
}

export default App;
