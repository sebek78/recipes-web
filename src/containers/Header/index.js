import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Logo from "./components/Logo";
import LoginForm from "./components/LoginForm";
import UserBox from "./components/UserBox";

const Header = ({ status }) => {
  const [loggedIn, setLoggedIn] = useState(status.authenticated);
  useEffect(() => {
    setLoggedIn(status.authenticated);
  }, [status]);

  return (
    <header className="header">
      <Logo />
      {loggedIn ? (
        <UserBox setLoggedIn={setLoggedIn} />
      ) : (
        <LoginForm setLoggedIn={setLoggedIn} />
      )}
    </header>
  );
};

Header.propTypes = {
  status: PropTypes.shape({
    authenticated: PropTypes.bool.isRequired,
    username: PropTypes.string,
  }).isRequired,
};

export default Header;
