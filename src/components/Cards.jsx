import React from "react";
import Carousel from "react-elastic-carousel";
import { PRODUCTS } from "../products";
import "./CustomCarousel.css";
import CardsHome from "./CardsHome";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];
function Cards() {
  return (
    <div className="mb-5">
      <h1 className="text-5xl font-bold ml-5 mt-6 mb-5">Products</h1>
      <div>
        <Carousel
          breakPoints={breakPoints}
          enableAutoPlay={true}
          autoPlaySpeed={2000}
          pagination={false}
          transitionMs={500}
        >
          {PRODUCTS.map((product) => (
            <CardsHome data={product} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Cards;
