import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

const Layout = styled.div`
  display: flex;
  flex-direction: ${props => (props.column ? "column" : "row")};
  align-items: center;
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
  padding: 8px 10px;
  border-radius: 6px;
  box-sizing: border-box;
  color: white;
  cursor: pointer;
`;

class LocationContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: "irvine"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.persist();

    this.setState((prevState, props) => {
      return {
        location: e.target.value
      };
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.history.push({
      pathname: "forecast",
      search: `?city=${this.state.location}`
    });
  }

  render() {
    return (
      <Layout column={this.props.column}>
        <form onSubmit={this.handleSubmit}>
          <Input
            type="text"
            value={this.state.location}
            placeholder="ex: Irvine, CA"
            onChange={this.handleChange}
          />
          <Button>Get Forecast</Button>
        </form>
      </Layout>
    );
  }
}

LocationContainer.propTypes = {
  column: PropTypes.bool
};

export default withRouter(LocationContainer);
