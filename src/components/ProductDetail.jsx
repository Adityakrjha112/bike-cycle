import React, { useContext, useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PRODUCTSD from "../PRODUCTSD";
import { ShopContext } from "../context/shop-context";
import "./ProductDetail.css";

function ProductDetail() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { id } = useParams();
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemCount = cartItems[id];
  const product = PRODUCTSD.find((product) => product.id === parseInt(id));

  const images = product.productImage.map((image) => image.url);
  const [img, setImg] = useState(images[0]);
  const refs = useRef([]);

  if (!product) {
    return <div>Product not found.</div>;
  }
  const hoverHandler = (image, i) => {
    setImg(image);
    refs.current.forEach((ref, j) => {
      ref.classList.toggle("active1", i === j);
    });
  };

  const addRefs = (el) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };

  return (
    <div className="main-class">
      {isMobile ? (
        <div>
          <div
            id="carouselExample"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              {images.map((image, i) => (
                <div
                  key={i}
                  className={i === 0 ? "carousel-item active" : "carousel-item"}
                >
                  <img
                    src={image}
                    alt={`Image ${i}`}
                    className="d-block w-100 custom-carousel-image"
                  />
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon to-black bg-black"
                aria-hidden="true"
                style={{ borderRadius: "25px" }}
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon to-black bg-black"
                aria-hidden="true"
                style={{ borderRadius: "25px" }}
              ></span>
              <span className="visually-hidden ">Next</span>
            </button>
          </div>

          <div>
            <div className="container1">
              <div className="right">
                <div className=" w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                  <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                    {product.productName}
                  </h1>

                  <p className="leading-relaxed">
                    <b>Moter :</b> {product.Motor}
                  </p>
                  <p className="leading-relaxed">
                    <b>Torque :</b> {product.Torque}
                  </p>
                  <p className="leading-relaxed">
                    <b>Speed :</b> {product.Speed}
                  </p>
                  <p className="leading-relaxed">
                    <b>Range :</b> {product.Range}
                  </p>
                  <p className="leading-relaxed">
                    <b>Load Capacity :</b> {product.Load_Capacity}
                  </p>
                  <p className="leading-relaxed">
                    <b>Light :</b> {product.Light}
                  </p>
                  <p className="leading-relaxed">
                    <b>Horn :</b> {product.Horn}
                  </p>
                  <p className="leading-relaxed">
                    <b>Key :</b> {product.Key}
                  </p>
                  <p className="leading-relaxed">
                    <b>Key :</b> {product.Saddle}
                  </p>
                  <p className="leading-relaxed">
                    <b>Carrier :</b> {product.Carrier}
                  </p>
                  <p className="leading-relaxed">
                    <b>Reflector :</b> {product.Reflector}
                  </p>
                  <p className="leading-relaxed">
                    <b>Battery :</b> {product.Battery}
                  </p>
                  <p className="leading-relaxed">
                    <b>Battery Life :</b> {product.Battery_Life}
                  </p>
                  <p className="leading-relaxed">
                    <b>Charger :</b> {product.Charger}
                  </p>
                  <p className="leading-relaxed">
                    <b>Voltage :</b> {product.Voltage}
                  </p>
                  <p className="leading-relaxed">
                    <b>Controller :</b> {product.Controller}
                  </p>
                  <p className="leading-relaxed">
                    <b>Mode :</b> {product.Mode}
                  </p>
                  <p className="leading-relaxed">
                    <b>Display :</b> {product.Display}
                  </p>
                  <p className="leading-relaxed">
                    <b>Delivery Option :</b> {product.Delivery_Option}
                  </p>
                  <p className="leading-relaxed">
                    <b>Service :</b> {product.Service}
                  </p>
                  <p className="leading-relaxed">
                    <b>Manual Handbook :</b> {product.Manual_Handbook}
                  </p>

                  <div className="flex mt-4">
                    <button
                      className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded"
                      onClick={() => addToCart(id)}
                    >
                      Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="container1">
            <div className="left">
              <div className="left_1 h-96  overflow-scroll">
                {images.map((image, i) => (
                  <div
                    className={i === 0 ? "img_wrap active1" : "img_wrap"}
                    key={i}
                    onMouseOver={() => hoverHandler(image, i)}
                    ref={addRefs}
                  >
                    <img src={image} alt="" />
                  </div>
                ))}
              </div>
              <div className="left_2 w-[37rem]">
                {/* <ReactImageMagnify
              {...{
                smallImage: {
                  alt: "Product Image",
                  isFluidWidth: true,
                  src: img,
                },
                largeImage: {
                  src: img,
                  width: 1800,
                  height: 2200,
                },
                enlargedImageContainerDimensions: {
                  width: "200%",
                  height: "150%",
                },
              }}
            /> */}
                <img src={img} alt="o" />
              </div>
            </div>
            <div className="right">
              <div className=" w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {product.productName}
                </h1>

                <p className="leading-relaxed">
                  <b>Moter :</b> {product.Motor}
                </p>
                <p className="leading-relaxed">
                  <b>Torque :</b> {product.Torque}
                </p>
                <p className="leading-relaxed">
                  <b>Speed :</b> {product.Speed}
                </p>
                <p className="leading-relaxed">
                  <b>Range :</b> {product.Range}
                </p>
                <p className="leading-relaxed">
                  <b>Load Capacity :</b> {product.Load_Capacity}
                </p>
                <p className="leading-relaxed">
                  <b>Light :</b> {product.Light}
                </p>
                <p className="leading-relaxed">
                  <b>Horn :</b> {product.Horn}
                </p>
                <p className="leading-relaxed">
                  <b>Key :</b> {product.Key}
                </p>
                <p className="leading-relaxed">
                  <b>Key :</b> {product.Saddle}
                </p>
                <p className="leading-relaxed">
                  <b>Carrier :</b> {product.Carrier}
                </p>
                <p className="leading-relaxed">
                  <b>Reflector :</b> {product.Reflector}
                </p>
                <p className="leading-relaxed">
                  <b>Battery :</b> {product.Battery}
                </p>
                <p className="leading-relaxed">
                  <b>Battery Life :</b> {product.Battery_Life}
                </p>
                <p className="leading-relaxed">
                  <b>Charger :</b> {product.Charger}
                </p>
                <p className="leading-relaxed">
                  <b>Voltage :</b> {product.Voltage}
                </p>
                <p className="leading-relaxed">
                  <b>Controller :</b> {product.Controller}
                </p>
                <p className="leading-relaxed">
                  <b>Mode :</b> {product.Mode}
                </p>
                <p className="leading-relaxed">
                  <b>Display :</b> {product.Display}
                </p>
                <p className="leading-relaxed">
                  <b>Delivery Option :</b> {product.Delivery_Option}
                </p>
                <p className="leading-relaxed">
                  <b>Service :</b> {product.Service}
                </p>
                <p className="leading-relaxed">
                  <b>Manual Handbook :</b> {product.Manual_Handbook}
                </p>

                <div className="flex mt-4">
                  <button
                    className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded"
                    onClick={() => addToCart(id)}
                  >
                    Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;
