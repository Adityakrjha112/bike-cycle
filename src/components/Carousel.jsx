import React from "react";
import "./CustomCarousel.css";

import AirDes from "../Assest2/desktop/Air.jpg";
import AirPho from "../Assest2/phone/Air.jpg";
import AirTab from "../Assest2/tab/t6.png";

import AironeDes from "../Assest2/desktop/Airone.jpg";
import AironePho from "../Assest2/phone/Airone.jpg";
import AironeTab from "../Assest2/tab/t6.png";

import EarthDes from "../Assest2/desktop/Earth.jpg";
import EarthPho from "../Assest2/phone/Earth.jpg";
import EarthTab from "../Assest2/tab/t6.png";

import EtherDes from "../Assest2/desktop/Ether.jpg";
import EtherPho from "../Assest2/phone/Ether.jpg";
import EtherTab from "../Assest2/tab/t6.png";

import FireDes from "../Assest2/desktop/Fire.jpg";
import FirePho from "../Assest2/phone/Fire.jpg";
import FireTab from "../Assest2/tab/t6.png";

const Carousel = () => {
  return (
    <>
      <div
        id="carouselExampleAutoplaying"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active  heaight-img">
            <picture>
              <source media="(min-width: 1279px)" srcSet={AirDes} />
              <source media="(max-width: 767px)" srcSet={AirPho} />
              <img
                className="d-block w-100 width-img"
                src={AirTab}
                alt="Flowers"
              />
            </picture>
            <div class="carousel-caption d-md-block"></div>
          </div>
          <div class="carousel-item  heaight-img">
            <picture>
              <source media="(min-width: 1279px)" srcSet={AironeDes} />
              <source media="(max-width: 767px)" srcSet={AironePho} />
              <source
                media="(min-width: 768px) and (max-width: 1278px)"
                srcSet={AironeTab}
              />
              <img
                className="d-block w-100 width-img"
                src={AironeTab}
                alt="Flowers"
              />
            </picture>
            <div class="carousel-caption d-md-block">
              {/* <h1 className="text-2xl">Air</h1>
              <Link to="product/2" class="btn btn-primary">
                See Detail
              </Link> */}
            </div>
          </div>
          <div class="carousel-item  heaight-img">
            <picture>
              <source media="(min-width: 1279px)" srcSet={EarthDes} />
              <source media="(max-width: 767px)" srcSet={EarthPho} />
              <source
                media="(min-width: 768px) and (max-width: 1278px)"
                srcSet={EarthTab}
              />
              <img
                className="d-block w-100 width-img"
                src={EarthTab}
                alt="Flowers"
              />
            </picture>
            <div class="carousel-caption d-md-block">
              {/* <h1 className="text-2xl">Fire</h1>
              <Link to="product/2" class="btn btn-primary">
                See Detail
              </Link> */}
            </div>
          </div>
          <div class="carousel-item  heaight-img">
            <picture>
              <source media="(min-width: 1279px)" srcSet={EtherDes} />
              <source media="(max-width: 767px)" srcSet={EtherPho} />
              <source
                media="(min-width: 768px) and (max-width: 1278px)"
                srcSet={EtherTab}
              />
              <img
                className="d-block w-100 width-img"
                src={EtherTab}
                alt="Flowers"
              />
            </picture>
            <div class="carousel-caption d-md-block">
              {/* <h1 className="text-2xl">Fire</h1>
              <Link to="product/2" class="btn btn-primary">
                See Detail
              </Link> */}
            </div>
          </div>
          <div class="carousel-item  heaight-img">
            <picture>
              <source media="(min-width: 1279px)" srcSet={FireDes} />
              <source media="(max-width: 767px)" srcSet={FirePho} />
              <source
                media="(min-width: 768px) and (max-width: 1278px)"
                srcSet={FireTab}
              />
              <img
                className="d-block w-100 width-img"
                src={FireTab}
                alt="Flowers"
              />
            </picture>
            <div class="carousel-caption d-md-block">
              {/* <h1 className="text-2xl">Fire</h1>
              <Link to="product/2" class="btn btn-primary">
                See Detail
              </Link> */}
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            class="carousel-control-prev-icon to-black bg-black"
            style={{ borderRadius: "25px" }}
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            class="carousel-control-next-icon to-black bg-black"
            style={{ borderRadius: "25px" }}
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Carousel;
