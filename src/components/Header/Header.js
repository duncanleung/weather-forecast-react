import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

import LocationContainer from "../LocationContainer/LocationContainer";

const Wrapper = styled.div`
  background-color: white;
  font-size: 30px;
  display: flex;
  justify-content: space-between;
`;

const Title = styled(Link)`
  text-decoration: none;
  color: orangered;`;

const Header = props => {
  return (
    <Wrapper>
      <Title to="/">Weather Forecast</Title>
      <LocationContainer submitLocation={props.submitLocation} />
    </Wrapper>
  );
};

Header.propTypes = {
  submitLocation: PropTypes.func.isRequired
};

export default Header;
