import React from "react";
import './Footer.scss';
import logo from '../../img/logo.png';

const Footer = () => {
  return( 
  <div className="footer">
    <div className="footer__container">
      <div className="footer__content">
          <img src={logo} alt="logo" />
          <p>New Zealand, Taranaki</p>
          <p>E: <span><a href="mailto:beren.boden@gmail.com">beren.boden@gmail.com</a></span></p>
          <p>P: <span>(64+) 21 208 9217</span></p>
      </div>
      <div className="footer__content">
          <h1>Navigation</h1>
          <a href="/">Home</a><br />
          <a href="/services">Services</a><br />
          <a href="/portfolio">Portfolio</a><br />
          <a href="/blog">Blog</a><br />
          <a href="/about">About</a>
      </div>
      <div className="footer__content">
          <h1>Follow Us On</h1>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/BerenBoden"><i className="fa fa-github"></i>&nbsp; GitHub</a><br />
          <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCoNZkBNKW6bI-luin6TdhpA?view_as=subscriber"><i className="fa fa-youtube"></i>&nbsp; Youtube</a><br />
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/beren-boden-5766ba1a0/"><i className="fa fa-linkedin"></i>&nbsp; LinkedIn</a><br />
          <a target="_blank" rel="noopener noreferrer" href="https://stackoverflow.com/users/12826492/berenboden"><i className="fa fa-stack-overflow"></i>&nbsp; StackOverflow</a><br />
      </div>
      <div className="footer__content">
          <h1>Services</h1>
          <a href="/">Web Development</a><br />
          <a href="/">Web Design</a><br />
          <a href="/services">Website Maintenance</a><br />
          <a href="/portfolio">SEO Services</a><br />
          <a href="/blog">Content Creation</a><br />
      </div>
    </div>
  </div>
  )
};

export default Footer;
                      