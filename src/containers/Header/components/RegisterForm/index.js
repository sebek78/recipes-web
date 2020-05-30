import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "../../../../components/Button";
import MenuFormButtons from "../MenuFormButtons";
import api from "../../../../utils/api";

const RegisterUser = ({ toggleForms }) => {
  const [formData, setFormData] = useState({
    login: "",
    password: "",
    password2: "",
  });

  const handleChangeLogin = (e) =>
    setFormData({ ...formData, login: e.target.value });
  const handleChangePassword = (e) =>
    setFormData({ ...formData, password: e.target.value });
  const handleChangePassword2 = (e) =>
    setFormData({ ...formData, password2: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post("/register", formData).then((data) => {
      console.log(data);
    });
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <div className="register-form__row">
        <label htmlFor="reg-login">Login</label>
        <input
          type="text"
          id="reg-login"
          onChange={handleChangeLogin}
          value={formData.value}
        />
      </div>
      <div className="register-form__row">
        <label htmlFor="reg-password">Hasło</label>
        <input
          type="password"
          id="reg-password"
          onChange={handleChangePassword}
          value={formData.password}
        />
      </div>
      <div className="register-form__row">
        <label htmlFor="reg-password2">Powtórz hasło</label>
        <input
          type="password"
          id="reg-password2"
          onChange={handleChangePassword2}
          value={formData.password2}
        />
      </div>
      <MenuFormButtons>
        <a href="#" style={{ display: "block" }} onClick={toggleForms}>
          Logowanie
        </a>
        <Button label="Zarejestruj" handleClick={handleSubmit} submit />
      </MenuFormButtons>
    </form>
  );
};

RegisterUser.propTypes = {
  toggleForms: PropTypes.func.isRequired,
};

export default RegisterUser;
