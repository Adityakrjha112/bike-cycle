import React from "react";
import { PRODUCTS } from "../products";

import CardsHome from "./CardsHome";
function Card() {
  return (
    <>
      {PRODUCTS.map((product) => (
        <CardsHome data={product} />
      ))}
    </>
  );
}

export default Card;
