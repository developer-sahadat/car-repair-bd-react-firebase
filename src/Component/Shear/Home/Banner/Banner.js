import React from "react";
import banner from "../../../../Assets/Images/banner.jpg";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="banner">
      <div className="container mt-5 pt-3">
        <div className="row row-cols-lg-2 justify-content-center align-items-center">
          <div>
            <h1>
              Auto Care Car <br></br>Maintenance
            </h1>
            <p>
              Avoid Costly Repairs with Preventative Maintenance. <br /> One of
              the most costly repairs is engine replacement.
              <br /> Handled by certified technicians
            </p>
          </div>
          <div>
            <img src={banner} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
