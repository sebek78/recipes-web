import React, { useState } from "react";
// import PropTypes from "prop-types";
import api from "../../utils/api";

const RegisterUser = () => {
  const [isVisible, setIsVisible] = useState(false);
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
      // if (data.authenticated) setLoggedIn(true);
      console.log(data);
    });
  };

  const onClose = (e) => {
    e.preventDefault();
    if (e.target === e.currentTarget) setIsVisible(false);
  };

  return !isVisible ? (
    <a href="#" onClick={() => setIsVisible(true)}>
      Rejestracja
    </a>
  ) : (
    <div className="register-wrapper" onClick={onClose}>
      <form className="register-form" onSubmit={handleSubmit}>
        <button
          className="register-form__close-button"
          type="button"
          onClick={onClose}
        >
          X
        </button>
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
        <input
          className="register-form__button"
          type="submit"
          value="Zarejestruj"
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
};

//RegisterUser.propTypes = {};

export default RegisterUser;
