import React from "react";
import engineerImg from "../../../Assets/Images/engineer.png";
import "./CarRepairEngineer.css";
import arrayICon from "../../../Assets/Icons/icons8-circled-right-48.png";
const CarRepairEngineer = () => {
  return (
    <div className="m-5 engine">
      <div className="container mx-auto row row-cols-md-2 justify-content-center align-items-center">
        <div>
          <img src={engineerImg} className="img-fluid" alt="" />
        </div>
        <div>
          <h2 className="pb-4">Engine Overhaul</h2>
          <p>
            When a car's engine begins to sound funny, when it idles, while it
            is accelerating, or as it turns off, then you may need an engine
            overhaul. Even smoke billowing from the exhaust pipe, or if your car
            runs too hot, it could spell serious engine damage.
          </p>
          <button className="seeMoreBtn">
            See More <img src={arrayICon} alt="" />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarRepairEngineer;
