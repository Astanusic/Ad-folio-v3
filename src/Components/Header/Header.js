import React from "react";
import "./Header.css";
import Button from "../../Layout/Button/Button";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <h1>AD.S</h1>
        <p>Self taught web developper - React addict</p>
      </div>
      <Button className="test">
        <h3>A propos ?</h3>
      </Button>
    </header>
  );
}

export default Header;
