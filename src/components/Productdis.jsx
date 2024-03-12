import React, { useContext } from "react";
import { ShopContext } from "../context/shop-context";
import { Link } from "react-router-dom";

function Productdis(props) {
  const { id, productName, productImage, href } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemCount = cartItems[id];

  return (
    <div>
      <Link key={id} to={`/product/${id}`} href={href} className="group">
        <div key={id} className="group relative">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <img
              src={productImage}
              alt="..."
              className="h-full w-full  object-center lg:h-full lg:w-full"
            />
          </div>
          <div className="mt-4 flex justify-between">
            <p className="text-sm font-medium text-gray-900">{productName}</p>
          </div>
        </div>
        {/* <p className="mt-1 text-lg font-medium text-gray-900">{price}</p> */}
      </Link>
      <button
        type="button"
        className="btn btn-primary text-black"
        onClick={() => addToCart(id)}
      >
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
}

export default Productdis;
