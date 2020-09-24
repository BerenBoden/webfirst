import React from "react";
import "./Payment.scss";
import "./PaymentCards.scss";

const Payment = (props) => {
  return (
    <div className="payment">
      <h1 className="payment__logo">
        choose your <span>plan</span>
      </h1>
      <div className="body__logo">
        <p>-------</p>
        <i className="fa fa-tags"></i>
        <p>-------</p>
      </div>
      <div className="payment__cards">
        <div className="payment__card">
          <div className="paymentCards">
            <div className="paymentCards__top">
              <div className="paymentCards__bar">
                <h1>Basic</h1>
              </div>
              <div className="paymentCards__price">
                <h1>$25/M</h1>
                <small>Or $200 UpFront</small>
              </div>
            </div>
            <div className="paymentCards__bottom">
              <div className="paymentCards__list">
                <h2>Best For Brochure And Advertising Websites</h2>
                <ul>
                  <li>Premium Theme</li>
                  <li>Upto 5 Pages</li>
                  <li>Professional Design</li>
                  <li>Responsive/Mobile Friendly</li>
                  <li>Search Engine Optimization</li>
                  <li>Track Your Analytics</li>
                  <li>Your Own Desgin</li>
                  <li>Handcoded Or Wordpress</li>
                  <li>Secure Site (SSL)</li>
                  <li>Custom Domain</li>
                </ul>
              </div>
              <button>
                <p>Contact Us</p>
              </button>
            </div>
          </div>
        </div>
        <div className="payment__card">
          <div className="paymentCards">
            <div className="paymentCards__top">
              <div className="paymentCards__bar">
                <h1>Standard</h1>
              </div>
              <div className="paymentCards__price">
                <h1>$50/M</h1>
                <small>Or $400 UpFront</small>
              </div>
            </div>
            <div className="paymentCards__bottom">
              <div className="paymentCards__list">
                <h2>Best For Blogging & Content Producing Websites</h2>
                <ul>
                  <li>
                    <span>Everything From Basic Plan + </span>
                  </li>
                  <li>Mailing/Subscription Service</li>
                  <li>Custom Email Domain</li>
                  <li>Extra Blogging Page</li>
                  <li>Content Writing 2 Posts/Week</li>
                  <li>Unlimited plugins</li>
                </ul>
              </div>
              <small
                style={{
                  margin: "0 10%",
                  padding: "5px 0",
                  fontSize: "1.1rem",
                }}
              >
                Price Drops to $300 or $35/M without Content Writting
              </small>
              <button style={{ marginTop: "100px", marginBottom: "20px" }}>
                <p>Contact Us</p>
              </button>
            </div>
          </div>
        </div>
        <div className="payment__card">
          <div className="paymentCards">
            <div className="paymentCards__top">
              <div className="paymentCards__bar">
                <h1>Premium</h1>
              </div>
              <div
                className="paymentCards__price"
                style={{ marginLeft: "10%" }}
              >
                <h1>$120/M</h1>
                <small>Or $1000 UpFront</small>
              </div>
            </div>
            <div className="paymentCards__bottom">
              <div className="paymentCards__list">
                <h2 style={{ marginLeft: "10%" }}>
                  Best For E-commerce Websites
                </h2>
                <ul style={{ marginLeft: "10%" }}>
                  <li>
                    <span>Everything From Standard & Basic Plan + </span>
                  </li>
                  <li>Upto 8 Pages</li>
                  <li>Add To Cart Functionality</li>
                  <li>Payment Gateway</li>
                  <li>Products + Product Info Page</li>
                  <li>Upto 18 Products</li>
                  <li>Sign Up/Sign in Features</li>
                </ul>
              </div>
              <button style={{ marginTop: "100px", marginBottom: "20px" }}>
                <p>Contact Us</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
