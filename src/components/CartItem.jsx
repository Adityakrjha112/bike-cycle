import React, { useContext } from "react";
import { ShopContext } from "../context/shop-context";
function CartItem(props) {
  const { id, productName, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);
  return (
    <>
      <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
        <img src={productImage} class="w-full rounded-lg sm:w-40" />
        <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
          <div class="mt-5 sm:mt-0">
            <h2 class="text-lg font-bold text-gray-900">{productName}</h2>
            {/* <p class="mt-1 text-xs text-gray-700">{price}</p> */}
          </div>
          <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
            <div class="flex items-center border-gray-100">
              <button
                class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                onClick={() => removeFromCart(id)}
              >
                {" "}
                -{" "}
              </button>
              <input
                class="h-8 w-8 border bg-white text-center text-xs outline-none"
                type="number"
                value={cartItems[id]}
                onChange={(e) =>
                  updateCartItemCount(Number(e.target.value), id)
                }
              />
              <button
                class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                onClick={() => addToCart(id)}
              >
                {" "}
                +{" "}
              </button>
            </div>
            <div class="flex items-center space-x-4">
              {/* <p class="text-base">₹{price}</p> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartItem;
