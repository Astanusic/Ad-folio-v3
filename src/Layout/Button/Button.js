import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

function Button({ children, className }) {
  return (
    <div className={className ? `button ` + className : "button"}>
      <Link to="/about">{children}</Link>
    </div>
  );
}

export default Button;
