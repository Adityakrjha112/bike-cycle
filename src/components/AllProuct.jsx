import React from "react";
import { PRODUCTS } from "../products";
import Productdis from "./Productdis";

function AllProuct() {
  return (
    <>
      <div className="bg-white">
        <div>
          <h2 className="text-center mt-3 text-4xl font-bold">Products</h2>
        </div>
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {PRODUCTS.map((product) => (
              <Productdis data={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default AllProuct;
