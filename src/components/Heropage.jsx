import React from "react";
import bikeBackground from "../assets/bike4-removebg-preview.png";
function Heropage() {
  return (
    <div className="flex">
      <div className="flex w-[1100px] mt-4">
        <img src={bikeBackground} alt="bike" />
      </div>
      <div className="flex">
        <h2 className="block">Bike</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          rem nihil optio voluptas fuga pariatur repudiandae, consectetur non
          explicabo? Eum vero architecto natus dignissimos voluptates, deleniti
          illo id culpa et!
        </p>
      </div>
    </div>
  );
}

export default Heropage;
