import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { COLORS } from "../../utils/theme";

const StyledButton = styled.button`
  margin: 4px;
  border-radius: 4px;
  border: none;
  outline: none;
  background-color: ${COLORS.primary};
  position: absolute;
  right: 4px;
  top: 4px;
  width: 32px;
  height: 32px;
  &:before,
  &:after {
    position: absolute;
    left: 4px;
    top: 14px;
    content: "";
    height: 4px;
    width: 24px;
    background-color: white;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;

const CloseButton = ({ handleClick }) => (
  <StyledButton onClick={handleClick}></StyledButton>
);

CloseButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default CloseButton;
