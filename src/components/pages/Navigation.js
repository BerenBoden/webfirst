import React from "react";
import logo from "../../img/logo.png";
import "./Header.scss";
import Burger from "./Burger";
import banner2 from "../../img/header-bg-1.png";
import styled from "styled-components";

const Div = styled.div`
  img {
    width: 100%;
    position: absolute;
    z-index: -1;
    height: 220px;
  }
`;

const Navigation = (props) => {
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
