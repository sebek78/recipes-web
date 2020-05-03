import React from "react";
import PropTypes from "prop-types";
import api from "./../../../../utils/api";

const UserBox = ({ setLoggedIn }) => {
  const handleClick = () => {
    api.post("/logout").then((data) => {
      if (!data.authenticated) setLoggedIn(false);
    });
  };

  return (
    <div>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
};

UserBox.propTypes = {
  setLoggedIn: PropTypes.func.isRequired,
};

export default UserBox;
