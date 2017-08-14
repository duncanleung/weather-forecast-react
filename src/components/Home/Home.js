import React from "react";
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

const Home = () => {
  return (
    <HomeWrapper>
      <H1>Enter a City and State</H1>
      <LocationContainer column />
    </HomeWrapper>
  );
};

export default Home;
