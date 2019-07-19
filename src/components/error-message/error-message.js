import React from "react";
import "./error-message.css";
import view from "./view.png";
const ErrorMessage = () => {
  return (
    <div className="error">
      <img src={view} alt="error icon" />
      <span>Something wrong!</span>
      <span>---try to restart---</span>
    </div>
  );
};

export default ErrorMessage;
