import React from "react";
import logo from "../../img/logo.png";
import banner from "../../img/banner-bg.png";
import "./Header.scss";
import Burger from './Burger';


const Header = () => {
  return (
    <div className="header">
      <img className="header__background" src={banner} alt="logo" />
      <nav className="">
        <div className="nav__left">
          <img className="header__logo" src={logo} alt="logo" />
        </div>
        <div className="nav__right">
          <Burger />
        </div>
      </nav>
    </div>
  );
};

export default Header;
