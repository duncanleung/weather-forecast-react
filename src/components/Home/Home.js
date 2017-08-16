import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import LocationContainer from "../LocationContainer/LocationContainer";

const H1 = styled.h1`font-weight: 100;`;
const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 380px;
`;

const Home = props => {
  return (
    <HomeWrapper>
      <H1>Enter a City and State</H1>
      <LocationContainer submitLocation={props.submitLocation} column />
    </HomeWrapper>
  );
};

Home.propTypes = {
  submitLocation: PropTypes.func.isRequired
};

export default Home;
