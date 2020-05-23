import React from "react";
import logo from "../../../../img/favicon.png";
import styled from "styled-components";
import COLORS from "../../../../utils/colors";

const StyledLogo = styled.div`
  height: 64px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 24px;
  padding-right: 4px;
  line-height: 1;
  color: ${COLORS.primary};
`;

const Logo = () => (
  <StyledLogo>
    <img src={logo} />
    <p>
      Rubinowe
      <br />
      przepisy
    </p>
  </StyledLogo>
);

export default Logo;
