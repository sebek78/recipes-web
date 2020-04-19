import React from "react";
import logo from "../../../../img/favicon.png";

const Logo = () => {
  return (
    <div className="header__logo">
      <img src={logo} />
      <p>Moje przepisy</p>
    </div>
  );
};

export default Logo;
