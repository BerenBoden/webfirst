import React from "react";
import Cards from "../cards/Cards";
import "./Portfolio.scss";
import {Link} from 'react-router-dom';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h1>
        our <span>portfolio</span>
      </h1>
      <div className="portfolio__logo">
        <p>-------</p>
        <i className="fa fa-briefcase"></i>
        <p>-------</p>
      </div>
      <div className="portfolio__cards">
        <div className="portfolio__card">
          <Cards />
        </div>
        <div className="portfolio__card">
          <Cards />
        </div>
        <div className="portfolio__card">
          <Cards />
        </div>
      </div>
      <Link style={{textAlign: 'center', textDecoration: 'none'}}to="/portfolio">
        <p className="button">View More...</p>
      </Link>
    </div>
  );
};

export default Portfolio;
