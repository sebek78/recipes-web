import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Logo from "./components/Logo";
import UserBox from "./components/UserBox";
import MenuButton from "./components/MenuButton";
import MenuForms from "./components/MenuForms";

const Header = ({ status, setStatus }) => {
  const [loggedIn, setLoggedIn] = useState(status.authenticated);

  const [view, setView] = useState({
    menuButton: true,
    loginForm: false,
    registerForm: true,
    menuForms: false,
    userBox: false,
  });

  useEffect(() => {
    setLoggedIn(status.authenticated);
    if (loggedIn) {
      setView({ ...view, menuForms: false, userBox: true });
    } else {
      setView({ ...view, menuButton: true, userBox: false });
    }
  }, [status]);

  const openMenu = (e) => {
    e.preventDefault();
    setView({ ...view, menuForms: true, menuButton: false });
  };
  const closeMenuForms = () => {
    setView({ ...view, menuForms: false, menuButton: true });
  };

  const toggleForms = (e) => {
    e.preventDefault();
    setView({
      ...view,
      loginForm: !view.loginForm,
      registerForm: !view.registerForm,
    });
  };

  return (
    <header className="header">
      <Logo />
      {view.menuButton && <MenuButton handleClick={openMenu} />}
      {view.menuForms && (
        <MenuForms
          setLoggedIn={setLoggedIn}
          setStatus={setStatus}
          onClose={closeMenuForms}
          toggleForms={toggleForms}
          view={view}
        />
      )}
      {view.userBox && (
        <UserBox setLoggedIn={setLoggedIn} setStatus={setStatus} />
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
