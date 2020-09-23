import React from "react";
import './Footer.scss';
import footer from '../../img/footer-bg.png';
import logo from '../../img/logo.png';
import {Link} from 'react-router-dom';

const Footer = () => {
  return( 
  <div className="footer">
    <img className="footer__background" src={footer} alt="footer"/>
    <div className="footer__container">
      <div className="footer__content">
          <h2>Contact <br />Infromation -</h2>
          <p>Feel free to get in touch with me...</p>
          <p>E: <span><a href="mailto:beren.boden@gmail.com">beren.boden@gmail.com</a></span></p>
          <p>P: <span>64+ 21 208 9217</span></p>
      </div>
      <div className="footer__content">
          <h2>Quick Links -</h2>
          <a href="/">Home</a><br />
          <a href="/projects">Projects</a><br />
          <a href="/contact">About</a><br />
          <a href="/contact">Contact</a>
      </div>
      <div className="footer__content">
          <h2>Follow Me On -</h2>
          <i className="fa fa-github"></i><a target="_blank" rel="noopener noreferrer" href="https://github.com/BerenBoden">&nbsp; GitHub</a><br />
          <i className="fa fa-youtube"></i><a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCoNZkBNKW6bI-luin6TdhpA?view_as=subscriber">&nbsp; Youtube</a><br />
          <i className="fa fa-linkedin"></i><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/beren-boden-5766ba1a0/">&nbsp; LinkedIn</a><br />
          <i className="fa fa-stack-overflow"></i><a target="_blank" rel="noopener noreferrer" href="https://stackoverflow.com/users/12826492/berenboden">&nbsp; StackOverflow</a><br />
      </div>
      <div className="footer__content">
          <h2>Availabillity -</h2>
          <p>I am available for any type of work. <br />
          Please get in touch with me so we can<br /> 
          discuss this further.</p>
      </div>
    </div>
  </div>
  )
};

export default Footer;
                      