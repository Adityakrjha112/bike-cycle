import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const topscroll = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <footer
        className="relative bg-blueGray-200 pt-8 pb-6"
        style={{ background: "#DBDBDB" }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl fonat-semibold text-blueGray-700">
                Let's keep in touch!
              </h4>
              <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                OUR RESPONSE TIME IS 24x7.
              </h5>
              <div className="mt-6 lg:mb-0 mb-6">
                <button
                  className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <a href="https://www.linkedin.com/company/werev-india-pvt-ltd/">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </button>
                <button
                  className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <a href="https://www.instagram.com/werev_private_limited">
                    <i className="fab fa-instagram"></i>
                  </a>
                </button>
                <button
                  className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <a href="https://x.com/vy23051988?t=gP9uN_QBugQxs_W2WdJquw&s=09">
                    <i className="fab fa-twitter"></i>
                  </a>
                </button>
                <button
                  className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <a href="https://www.facebook.com/profile.php?id=100093453655458&mibextid=ZbWKwL">
                    <i className="fab fa-facebook-square"></i>
                  </a>
                </button>
                <button
                  className="bg-white  shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <a href="https://youtube.com/@werevebike?si=zqoKeUTa7-xyS_pg">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </button>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <ul className="list-unstyled">
                    <li>
                      <Link
                        onClick={topscroll}
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        to="/"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={topscroll}
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        to="/about"
                      >
                        About us
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={topscroll}
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        to="/media"
                      >
                        Media
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={topscroll}
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        to="/team"
                      >
                        Team
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={topscroll}
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        to="/Allproduct"
                      >
                        Products
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={topscroll}
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        to="/Contact"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="sm:flex sm:justify-center">
            <div className="sm:flex ml-20">
              Copyright © <span id="get-current-year">2023</span> WeRev
            </div>

            <div className="flex ml-4">
              <div className="flex ml-16">
                <ul className="block sm:flex gap-9">
                  <li>
                    <Link to="/term-condition" onClick={topscroll}>
                      Term & Condition
                    </Link>
                  </li>
                  <li>
                    <Link to="/privacy-policy" onClick={topscroll}>
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/shipping-policy" onClick={topscroll}>
                      Shipping Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/refunds-cancellation" onClick={topscroll}>
                      Refund & Cancellation
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
