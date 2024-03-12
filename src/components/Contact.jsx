import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      <div className="container my-24 mx-auto md:px-6">
        <section className="mb-32">
          <div
            className="block rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
            style={{ background: "#DBDBDB" }}
          >
            <div className="flex flex-wrap items-center">
              <div className="block w-full shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
                <div className="h-[500px] w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14062.158047335044!2d76.5610879!3d28.2213!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d5b2ae77061f5%3A0xca4671fc29cd98db!2sWEREV%20PVT.%20LTD.!5e0!3m2!1sen!2sin!4v1693993183434!5m2!1sen!2sin"
                    className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
                <div className="flex flex-wrap px-3 pt-12 pb-12 md:pb-0 lg:pt-0">
                  {/* <div className="mb-12 w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:w-6/12 xl:px-12"> */}
                  <div className="mb-10">
                    <h1 className="font-bold text-2xl">
                      WEREV PRIVATE LIMITED
                    </h1>
                    <p className="text-lg mb-2">
                      CO KAMLA WO BHOLA RAM, Balawas, Boria Kamalpur, Gokalgarh,
                      Rewari – 123401, Haryana, India
                    </p>
                    <p className="text-lg mb-2">
                      <span className="font-semibold">CIN </span>
                      U29109HR2023PTC113632
                    </p>
                  </div>

                  <div className="mb-12 w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:mb-0 xl:w-6/12 xl:px-12">
                    <div className="align-start flex">
                      <div className="shrink-0">
                        <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="h-6 w-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-6 grow">
                        <p className="font-bold text-black">Contact</p>
                        <p className="text-black">
                          <Link to="mailto:info@werev.co.in">
                            info@werev.co.in
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <i className="fab fa-whatsapp text-lg"></i>
                    <Link
                      to="https://api.whatsapp.com/send?phone=919896126184"
                      className="text-lg"
                    >
                      +919896126184
                    </Link>
                  </div>
                  {/* <div className="w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:w-6/12 xl:px-12">
                    <div className="align-start flex">
                      <div className="shrink-0">
                        <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="h-6 w-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-6 grow">
                        <p className="mb-2 font-bold text-black">Contact</p>
                        <p className="text-black">vikashyadav002@yahoo.com</p>
                        <p className="text-black">+919896126184</p>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Contact;
