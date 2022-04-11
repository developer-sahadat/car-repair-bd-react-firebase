import React from "react";
import "./service.css";

const Service = ({ service }) => {
  const { name, img, description } = service;

  return (
    <div>
      <div className="service">
        <div>
          <img src={img} alt="" />
        </div>
        <h4>{name}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Service;
