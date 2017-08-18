import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

import LocationContainer from "../LocationContainer/LocationContainer";

const HeaderWrapper = styled.div`
  background-color: white;
  font-size: 30px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;

  @media (min-width: 570px) {
    flex-direction: row;
  }
`;

const Title = styled(Link)`
  text-decoration: none;
  color: orangered;`;

const Header = props => {
  return (
    <HeaderWrapper>
      <Title to="/">Weather Forecast</Title>
      <LocationContainer submitLocation={props.submitLocation} />
    </HeaderWrapper>
  );
};

Header.propTypes = {
  submitLocation: PropTypes.func.isRequired
};

export default Header;
