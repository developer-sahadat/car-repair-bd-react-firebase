import React from "react";
import { Link } from "react-router-dom";
import "./service.css";

const Service = ({ service }) => {
  const { _id, name, img, description } = service;

  return (
    <div>
      <div className="service">
        <div>
          <img src={img} alt="" />
        </div>
        <h4>{name}</h4>
        <p>{description}</p>
        <Link to={`/order-page/${_id}`}>
          <button className="bookBtn">Book Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Service;
