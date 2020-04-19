import React, { useState } from "react";
import PropTypes from "prop-types";

const LoginForm = ({ setLoggedIn }) => {
  const [formData, setFormData] = useState({
    login: "",
    password: "",
  });

  const handleChangeLogin = (e) =>
    setFormData({ ...formData, login: e.target.value });
  const handleChangePassword = (e) =>
    setFormData({ ...formData, password: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/login", {
      method: "post",
      headers: { "Content-Type": "text/html" },
      credentials: "same-origin",
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.authenticated) setLoggedIn(true);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <form className="header__login-form" onSubmit={handleSubmit}>
      <div className="login-form__inputs">
        <div className="login-form__row">
          <label htmlFor="login">Login</label>
          <input
            type="text"
            id="login"
            onChange={handleChangeLogin}
            value={formData.value}
          />
        </div>
        <div className="login-form__row">
          <label htmlFor="password">Hasło</label>
          <input
            type="password"
            id="password"
            onChange={handleChangePassword}
            value={formData.password}
          />
        </div>
      </div>
      <input className="login-form__button" type="submit" value="Zaloguj" />
    </form>
  );
};

LoginForm.propTypes = {
  setLoggedIn: PropTypes.func.isRequired,
};

export default LoginForm;
