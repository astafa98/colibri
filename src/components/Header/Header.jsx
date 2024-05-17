import React from "react";
import Logo from "../../colibrilogo.png";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <img src={Logo} className={s.logo} />
    </header>
  );
};

export default Header;
