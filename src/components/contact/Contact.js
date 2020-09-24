import React from "react";
import emailjs from "emailjs-com";
import "./Contact.scss";
import contactImg from "../../img/contact_img.png";
import Footer from "../footer/Footer";

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_71xyb1h",
        e.target,
        "user_UbO2fdiEpLffF0OdcXUY3"
      )
      .then(
        (result) => {
          alert("Message sent succesfully :)");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <>
      <div className="body__heading__contact">
        <h1>
          get in <span>touch</span>
        </h1>
        <div className="body__logo">
          <p>-------</p>
          <i className="fa fa-envelope"></i>
          <p>-------</p>
        </div>
      </div>
      <div className="contact">
        <div className="contact__formRight">
          <div className="contact__options">
            <img src={contactImg} alt="contact me" />
            <div className="contact__option">
              <a href="mailto:support@webfirst.co.nz">
                Email: support@webfirst.co.nz
              </a>
            </div>
            <div className="contact__option">Phone: 64+ 212089217</div>
          </div>
        </div>
        <div className="contact__formLeft">
          <form className="contact__form" onSubmit={sendEmail}>
            <h1>
              <span>drop</span> us a line...
            </h1>
            <div className="contact__formItem">
              <label>Name</label>
              <input
                type="text"
                name="from_name"
                placeholder="Your name..."
                required
              />
            </div>
            <div className="contact__formItem">
              <label>Email</label>
              <input
                type="email"
                name="user_email"
                placeholder="Your email..."
                required
              />
            </div>
            <div className="contact__formItem">
              <label>Business</label>
              <input
                type="text"
                name="user_business"
                placeholder="Your business..."
                required
              />
            </div>
            <div className="contact__formItem">
              <label>Phone</label>
              <input
                type="text"
                name="user_phone"
                placeholder="Your phone..."
              />
            </div>
            <div className="contact__formItem">
              <label>Message</label>
              <textarea name="message" placeholder="Your message..." required />
            </div>
            <button type="submit" value="Send">
              Send Email
            </button>
          </form>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
}
