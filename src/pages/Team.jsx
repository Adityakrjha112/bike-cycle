import React from "react";
import founder from "../Assest2/founder.jpg";
import co_founder from "../Assest2/co-founder.jpg";
import { Link } from "react-router-dom";
function Team() {
  return (
    <div>
      <div className="container my-24 mx-auto md:px-6">
        <section className="mb-32 text-center">
          <h2 className="mb-12 text-4xl font-bold">Our Team</h2>

          <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
            <div className="mb-6 lg:mb-0">
              <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div className="relative overflow-hidden bg-cover bg-no-repeat">
                  <img
                    src={founder}
                    className="w-full h-72 rounded-t-lg"
                    alt=".."
                  />
                  <Link to="#">
                    <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"></div>
                  </Link>
                </div>
                <div className="p-6">
                  <h5 className="mb-4 text-lg font-bold">
                    Capt. B.R Yadav (Retd.)
                  </h5>
                  <p className="mb-4 font-semibold">Founder</p>
                  <p className="mb-4">
                    Distinguished 30 years service in Indian Army. Awarded Army
                    Commander & VCOAS Commendation Card, President Commission &
                    Appreciation Award.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-6 lg:mb-0">
              <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div className="relative overflow-hidden bg-cover bg-no-repeat">
                  <img
                    src={co_founder}
                    className="w-full h-72 rounded-t-lg"
                    alt=".."
                  />
                  <Link to="https://x.com/vy23051988?t=gP9uN_QBugQxs_W2WdJquw&s=09">
                    <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"></div>
                  </Link>
                </div>
                <div className="p-6">
                  <h5 className="mb-4 text-lg font-bold">Vikash Yadav</h5>
                  <p className="mb-4  font-semibold">Co-Founder</p>
                  <p className="mb-4 ">
                    Engineer with 16 years of experience with automotive
                    Industry (India/Japan/China/Thailand/Taiwan <br />
                    /S.Korea)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Team;
