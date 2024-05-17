import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <NavLink to="/profile" className={s.activeLink}>
        <div className={s.item}>My profile</div>
      </NavLink>
      <NavLink to="/dialogs" className={s.activeLink}>
        <div className={s.item}>Messages</div>
      </NavLink>
      <NavLink to="/dialogs" className={s.activeLink}>
        <div className={s.item}>News</div>
      </NavLink>
      <NavLink to="/dialogs" className={s.activeLink}>
        <div className={s.item}>Music</div>
      </NavLink>
      <NavLink to="/dialogs" className={s.activeLink}>
        <div className={s.item}>Settings</div>
      </NavLink>
    </nav>
  );
};

export default Navbar;
