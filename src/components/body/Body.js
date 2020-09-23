import React from "react";
import "./Body.scss";
import logo1 from "../../img/logo-case-1.png";
import logo2 from "../../img/logo-case-2.png";
import logo3 from "../../img/logo-case-3.png";
import shape from "../../img/shap-11.png";
import showcase2 from "../../img/showcase-img-2.png";
import Portfolio from "../portfolio/Portfolio";
import Payment from "../payment/Payment";
import Showcase from "../showcase/Showcase";
import Header from "../header/Header";
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';


const Body = () => {
  return (
    <div className="body">
        <Header />
        <Showcase />
      <div className="body__heading">
        <h1>
          <span>what </span>we do
        </h1>
        <div className="body__logo">
          <p>-------</p>
          <i className="fa fa-archive"></i>
          <p>-------</p>
        </div>
        <p>
          We specialize in small business web design and development. Every line
          of code is written by hand to ensure the best performance, which helps
          bring in more customers to your site and bring more revenue to your
          business.
        </p>
        <a href="/about" style={{textAlign: 'center', textTransform: 'uppercase', color: 'blue', fontWeight: '300', fontSize: '1.6rem', textDecoration: 'none'}}>Learn More...</a>
      </div>
      <div className="body__showcase">
        <div className="body__showcaseLogos">
          <img src={logo1} alt="" />
          <h2>Fully Responsive</h2>
          <p>
            We start building your site for mobile devices first, this is to be
            sure that your website is 100% responsive for every internet user.
          </p>
        </div>
        <div className="body__showcaseLogos">
          <img src={logo2} alt="" />
          <h2>SEO Optimization</h2>
          <p>
            Your website is made with authentic white hat SEO, so it is sure to
            rank to the top of Google when people search for your company.
          </p>
        </div>
        <div className="body__showcaseLogos">
          <img src={logo3} alt="" />
          <h2>Authentic Or CMS</h2>
          <p>
            You can pick between a hand coded authentic website using the MERN
            stack, or a website created with a content management system like
            WordPress.
          </p>
        </div>
      </div>
      <img className="body__shape" src={shape} alt="" />
      <div className="body__priceDisplay">
        <div className="body__priceDisplayImg">
          <img src={showcase2} alt="showcase img" />
        </div>
        <div className="body__priceDisplayText">
          <h1>
            <span>$0</span> Down, <span>Fixed</span> Price Per Month
          </h1>
          <p>
            $0 for the first 30 days for a standard 5 page small business
            website. If you don't like it, you can cancel anytime between those
            30 days.
            <br />
            <br />
            After 30 days, you will be charged a fixed price per month based on
            your budget and the amount of work needed.
            <br />
            <br />
            You own your domain, content, listing, and profiles. Cancel anytime,
            free of charge, and no hassle.
          </p>
        </div>
      </div>
      <div className="body__priceDisplayLogos">
        <div className="body__priceDisplayLogo">
          <h2>
            <i className="fa fa-check-circle"></i>&nbsp;&nbsp;Hosting Fees Included
          </h2>
          <p>Hosting fees are built right into the monthly payment.</p>
        </div>
        <div className="body__priceDisplayLogo">
          <h2>
            <i className="fa fa-check-circle"></i>&nbsp;&nbsp;Unlimited Edits
          </h2>
          <p>
            Change anything you want at anytime and it will be done that day.
          </p>
        </div>
        <div className="body__priceDisplayLogo">
          <h2>
            <i className="fa fa-check-circle"></i>&nbsp;&nbsp;24/7 Customer Service
          </h2>
          <p>
            Call direct anytime day or night, no phone trees or automated
            responses.
          </p>
        </div>
        <div className="body__priceDisplayLogo">
          <h2>
            <i className="fa fa-check-circle"></i>&nbsp;&nbsp;Web Design &
            Development
          </h2>
          <p>Includes over 40 hours of design, development, and testing</p>
        </div>
        <div className="body__priceDisplayLogo">
          <h2>
            <i className="fa fa-check-circle"></i>&nbsp;&nbsp;Citations And Listings
          </h2>
          <p>
            It's important to have your website linked from other websites, like
            directories.
          </p>
        </div>
        <div className="body__priceDisplayLogo">
          <h2>
            &nbsp;&nbsp;Google Analytics
          </h2>
          <p>
            We install Analytics for free so you can monitor your traffic and
            where it comes from.
          </p>
        </div>
      </div>
      <Portfolio />
      <Payment />
      <Contact />
      <Footer />
    </div>
  );
};

export default Body;
