import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { COLORS } from "../../../../utils/theme";

const StyledButton = styled.button`
  padding: 4px 8px;
  margin: 4px;
  border-radius: 4px;
  border: none;
  outline: none;
  background-color: ${COLORS.primary};
`;

const StyledDiv = styled.div`
  width: 28px;
  height: 4px;
  background-color: white;
  margin: 6px 0;
`;

const MenuButton = ({ handleClick }) => (
  <StyledButton onClick={handleClick}>
    <StyledDiv />
    <StyledDiv />
    <StyledDiv />
  </StyledButton>
);

MenuButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default MenuButton;
