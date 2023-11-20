import React from "react";
import ReactDOM from "react-dom";
function Hero() {
  return (
    <div className="hero">
      <img src="https://images.unsplash.com/photo-1554998171-706e730d721d?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <div className="hero-content">
        <h2> Its all about good food & taste</h2>
        <p>
          {" "}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  );
}
export default Hero;
