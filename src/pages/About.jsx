import React from "react";
import donotuse from "../newassests1/donotuse.jpg";
import earth from "../newassests1/earth.jpg";
import electric from "../newassests1/electric.jpg";
import noco from "../newassests1/noco.jpg";
import "./About.css";
function About() {
  return (
    <div>
      <div className="m-7 shadow-sm mb-9">
        <h1 className="font-bold text-2xl mb-2">About Us:-</h1>
        <p className="text-lg">
          WEREV PRIVATE LIMITED is a haryana based ebike startup company. We R
          ev is an electric vehicle company that provide ebikes at an affordable
          price for future society and consumers.
        </p>
      </div>
      <div className="m-7 shadow-sm mb-9">
        <h1 className="font-bold text-2xl mb-2">Our Aim (उद्देश्य)</h1>
        <p className="text-lg">
          Our Aim is ZERO for Our universe. One Day, our body become ash when
          soul is move to another new body. कर्म , Make In India, Vocal for
          Local, Made for the World.
        </p>
      </div>
      <div className="m-7 shadow-sm mb-9">
        <h1 className="font-bold text-2xl mb-2">Our Core Values (संस्कार)</h1>
        <p className="text-lg">
          Honesty, Truth, Deciplain, 5'S, Dedication, Respect, Time,
          Punctuality, Sacrifice and Last one is a Clean Heart & True Soul with
          Worship of God. जय श्री कृष्ण
        </p>
      </div>

      <div className="m-7 shadow-sm mb-9">
        <h1 className="font-bold text-2xl mb-2">Our Vision </h1>
        <p className="text-lg">
          Become No.1 Professional e Bike Manufacturer in the world.
        </p>
      </div>
      <div className="m-7 shadow-sm mb-9">
        <h1 className="font-bold text-2xl mb-2">Our Mission</h1>
        <p className="text-lg">
          Save Energy, Save Environment, Clean Air Quality, Healthy Society with
          Sustainable Future.
        </p>
      </div>
      <div className="flex gap-5 meadia-for-ml justify-center">
        <div className="flex">
          <img className="w-52 h-52" src={noco} alt="" />
        </div>
        <div className="flex">
          <img className="w-52 h-52" src={earth} alt="" />
        </div>
        <div className="flex">
          <img className="w-52 h-52" src={electric} alt="" />
        </div>
        <div className="flex">
          <img className="w-52 h-52" src={donotuse} alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;
