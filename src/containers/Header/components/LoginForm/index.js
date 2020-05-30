import React, { useState } from "react";
import PropTypes from "prop-types";
import api from "./../../../../utils/api";
import styled from "styled-components";
import InputText from "../../../../components/InputText";
import Button from "../../../../components/Button";
import { COLORS, FONTS } from "../../../../utils/theme";
import MenuFormButtons from "../MenuFormButtons";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ErrorBox = styled.p`
  padding: 6px 12px 6px 12px;
  margin: 4px;
  color: ${COLORS.primaryDark};
  font-size: ${FONTS.medium};
  font-weight: bold;
  background-color: ${COLORS.secondaryLight};
  color: black;
`;

const LoginForm = ({ setLoggedIn, setStatus, toggleForms }) => {
  const [formData, setFormData] = useState({
    login: "",
    password: "",
    error: "",
  });

  const handleChangeLogin = (e) =>
    setFormData({ ...formData, login: e.target.value });
  const handleChangePassword = (e) =>
    setFormData({ ...formData, password: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ ...formData, error: "" });
    api.post("/login", formData).then((data) => {
      if (data.authenticated) {
        setLoggedIn(true);
        setStatus({
          authenticated: data.authenticated,
          username: data.username,
        });
      } else {
        setFormData({ ...formData, error: data.message });
      }
    });
  };
  return (
    <StyledForm onSubmit={handleSubmit}>
      <InputText
        label="Login"
        value={formData.login}
        handleChange={handleChangeLogin}
      />
      <InputText
        label="Hasło"
        value={formData.password}
        handleChange={handleChangePassword}
        password
      />
      {formData.error.length !== 0 && <ErrorBox>{formData.error}</ErrorBox>}
      <MenuFormButtons>
        <a href="#" style={{ display: "block" }} onClick={toggleForms}>
          Rejestracja
        </a>
        <Button label="Zaloguj" handleClick={handleSubmit} submit />
      </MenuFormButtons>
    </StyledForm>
  );
};

LoginForm.propTypes = {
  setLoggedIn: PropTypes.func.isRequired,
  setStatus: PropTypes.func.isRequired,
  toggleForms: PropTypes.func.isRequired,
};

export default LoginForm;
