import React, { useState } from "react";
import Logo from "./components/Logo";
import LoginForm from "./components/LoginForm";
import UserBox from "./components/UserBox";

const Header = () => {
  const [loggedIn, setLogggedIn] = useState(false);

  return (
    <header className="header">
      <Logo />
      {loggedIn ? (
        <UserBox setLoggedIn={setLogggedIn} />
      ) : (
        <LoginForm setLoggedIn={setLogggedIn} />
      )}
    </header>
  );
};

export default Header;
