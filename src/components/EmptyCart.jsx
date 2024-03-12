import React from "react";
import "./Empty.css";
import { Link } from "react-router-dom";
function EmptyCart() {
  return (
    <div class="container-fluid  mt-100">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              <h5 className="text-center font-bold text-3xl">Cart</h5>
            </div>
            <div class="card-body cart">
              <div class="col-sm-12 empty-cart-cls text-center">
                <img
                  src="https://i.imgur.com/dCdflKN.png"
                  width="130"
                  height="130"
                  class="img-fluid mb-4 mr-3 inline"
                  alt="emptycart"
                />
                <h3>
                  <strong>Your Cart is Empty</strong>
                </h3>
                <h4>Add something to make me happy :)</h4>
                <Link
                  to="/Allproduct"
                  class="btn btn-primary cart-btn-transform m-3"
                  data-abc="true"
                >
                  continue shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmptyCart;
