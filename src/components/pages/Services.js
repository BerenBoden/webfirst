import React from "react";
import Navigation from "./Navigation";
import "./Services.scss";
import optimize from "../../img/optimized.png";
import hancode from "../../img/hancode.png";
import ServiceCards from './ServiceCards';

const Services = (props) => {
  return (
    <div className="services">
      <Navigation/>
      <h1 className="services__header">{props.title}</h1>
      <div className="services__body">
        <div className="services__bodyLeft">
          <h1>Extremely Fast & Optimized Websites</h1>
          <p>
            A fast website is extremely important for your business, you don't
            want a customer to leave your website half way through it loading,
            you've just lost a potential customer! Now imagine this with
            thousands of visitors to your site per day, that is a major loss of
            income just because someone is too impatient to wait a few more
            extra seconds for your site to load. Our websites are built using
            the latest technologies', and premium WordPress themes insuring your
            website has rapid load speeds meaning you won't lose potential
            customers. If you would like to learn more about why we choose the
            MERN stack over other tech stacks, check out this article.
          </p>
        </div>
        <div className="services__bodyRight">
          <img src={optimize} alt="LOGO" />
        </div>
      </div>
    <div className="line-box"></div>
    <div className="line-box-bottom">
    </div>
      <div className="services__body2">
        <div className="services__bodyLeft">
          <img src={hancode} alt="LOGO" />
        </div>
        <div className="services__bodyRight">
        <h1>Authentic Or CMS?</h1>
          <p>
            Although there's a lot of hype around WordPress and over 33% 
            of all the world's websites run on WordPress, this however can 
            create a lot of unoriginality and may make you website look 
            a little bland. 

            So to combat this, I can create a fully customized authentic website
            for you, built from the ground up with nothing but the MERN stack,
            this is generally front-end work only, meaning it's better to keep this 
            option for a brochure website with no server side functionalities. 
          </p>
        </div>
      </div>
      <div className="line-box2"></div>
    <div className="line-box-bottom2"></div>
      <div className="services__body3">
        <div className="services__bodyLeft">
          <h1>Search Engine Optimization</h1>
          <p>
            Although there's a lot of hype around WordPress and over 33% 
            of all the world's websites run on WordPress, this however can 
            create a lot of unoriginality and may make you website look 
            a little bland. 

            So to combat this, I can create a fully customized authentic website
            for you, built from the ground up with nothing but the MERN stack,
            this is generally front-end work only, meaning it's better to keep this 
            option for a brochure website with no server side functionalities. 
          </p>
          <ul>
              <li><i className="fa fa-check-circle"></i>&nbsp;&nbsp;</li>
              <li><i className="fa fa-check-circle"></i>&nbsp;&nbsp;</li>
              <li><i className="fa fa-check-circle"></i>&nbsp;&nbsp;</li>
              <li><i className="fa fa-check-circle"></i>&nbsp;&nbsp;</li>
          </ul>
        </div>
        <div className="services__bodyRight">
            <img src={hancode} alt="LOGO" />
        </div>
      </div>
      <div className="services__bodyChecks">
        <div className="body__heading">
            <h1>
            <span>Lifetime </span>Updates & Maintenence
            </h1>
            <div className="body__logo">
            <p>-------</p>
            <i className="fa fa-archive"></i>
            <p>-------</p>
            </div>
        </div>
        <div className="cards__container">
            <div className="cards__containerInner1">
                <h1>Lifetime Updates For Your Website</h1>
                <p>Google changes it's search alogrithm standards every so often, changing what is important to rank. And web accessibility guidelines for users with screen readers get updated as well. So we also include lifetime updates to your website to make sure it never goes out of date and is always changing with the times.</p>
            </div>
            <div className="cards__containerInner">
                <div>
                    <ServiceCards />
                    <ServiceCards />
                </div>
                <div>
                    <ServiceCards />
                    <ServiceCards />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
