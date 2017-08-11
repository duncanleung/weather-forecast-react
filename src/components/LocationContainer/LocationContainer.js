import React, { Component } from "react";
import styled from "styled-components";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 6px;
  border-radius: 5px;
  box-shadow: blanchedalmond;
  border: 1px solid #dedede;
`;

const Button = styled.button`
  margin: 10px;
  background-color: #5cb85c;
  border: none;
  padding: 8px 0px;
  border-radius: 6px;
  box-sizing: border-box;
  color: white;
  cursor: pointer;
`;

class LocationContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.persist();

    this.setState((prevState, props) => {
      return {
        location: e.target.value
      };
    });
  }

  render() {
    return (
      <Layout>
        <Input
          type="text"
          value={this.state.location}
          placeholder="ex: Irvine, CA"
          onChange={this.handleChange}
        />
        <Button>Get Weather Forecast</Button>
      </Layout>
    );
  }
}

export default LocationContainer;
