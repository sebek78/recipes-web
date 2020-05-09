import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Logo from "./components/Logo";
import LoginForm from "./components/LoginForm";
import UserBox from "./components/UserBox";

const Header = ({ status, setStatus }) => {
  const [loggedIn, setLoggedIn] = useState(status.authenticated);
  useEffect(() => {
    setLoggedIn(status.authenticated);
  }, [status]);

  return (
    <header className="header">
      <Logo />
      {loggedIn ? (
        <UserBox setLoggedIn={setLoggedIn} setStatus={setStatus} />
      ) : (
        <LoginForm setLoggedIn={setLoggedIn} setStatus={setStatus} />
      )}
    </header>
  );
};

Header.propTypes = {
  status: PropTypes.shape({
    authenticated: PropTypes.bool.isRequired,
    username: PropTypes.string,
  }).isRequired,
  setStatus: PropTypes.func.isRequired,
};

export default Header;
