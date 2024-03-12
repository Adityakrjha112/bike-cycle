// MainComponent.js

import React from "react";
import "./MainComponent.css"; // Import the CSS file for styling
import bike from "../assets/bike5.jpg";
const MainComponent = () => {
  return (
    <div className="container-fluid overflow-hidden mb-5 best-seller">
      <div className="row align-items-center">
        <div className="col-md-9 col-12 ">
          <img src={bike} alt="" className="w-[80%] mt-5 img-best" />
        </div>
        <div className="col-lg-3 col-12 ">
          <h1 className="font-extralight text-4xl text-gray-400">
            Best Seller
          </h1>
          <p className="font-extrabold text-7xl">Earth</p>
          <p>
            It is the perfect e-bike for off-road adventures, city commutes, and
            outdoor exploration.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
