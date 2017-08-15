import React from "react";
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

const Header = () => {
  return (
    <Wrapper>
      <Title to="/">Weather Forecast</Title>
      {/*<LocationContainer />*/}
    </Wrapper>
  );
};

export default Header;
