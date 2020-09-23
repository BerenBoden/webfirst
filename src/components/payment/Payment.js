import React from "react";
import "./Payment.scss";
import PaymentCards from "./PaymentCards";

const Payment = () => {
  return (
    <div className="payment">
      <h1>
        choose your <span>plan</span>
      </h1>
          <div className="body__logo">
          <p>-------</p>
          <i className="fa fa-tags"></i>
          <p>-------</p>
        </div>
      <div className="payment__cards">
        <div className="payment__card">
          <PaymentCards />
        </div>
        <div className="payment__card middle">
          <PaymentCards />
        </div>
        <div className="payment__card">
          <PaymentCards />
        </div>
      </div>
    </div>
  );
};

export default Payment;
