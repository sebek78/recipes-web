import React from "react";
import PropTypes from "prop-types";

const UserBox = ({ setLoggedIn }) => {
  const handleClick = () => {
    fetch("http://localhost:3000/logout", {
      method: "post",
      headers: { "Content-Type": "text/html" },
      credentials: "same-origin",
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data.authenticated) setLoggedIn(false);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
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
