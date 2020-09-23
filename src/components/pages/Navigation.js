import React from "react";
import logo from "../../img/logo.png";
import "./Header.scss";
import Burger from "./Burger";
import banner2 from "../../img/banner-bg-2.png";
import styled from "styled-components";

const Div = styled.div`
  img {
    position: absolute;
    width: 100%;
    height: 150px;
  }
`;

const Navigation = () => {
  return (
    <div className="header">
        <Div>
          <img src={banner2} alt="" />
        </Div>
      <nav>
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

export default Navigation;
