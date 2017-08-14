import React from "react";
import styled from "styled-components";

import LocationContainer from "../LocationContainer/LocationContainer";

const Wrapper = styled.div`
  background-color: white;
  font-size: 30px;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`padding: 0 10px;`;

const Header = () => {
  return (
    <Wrapper>
      <Title>Weather Forecast</Title>
      <LocationContainer />
    </Wrapper>
  );
};

export default Header;
