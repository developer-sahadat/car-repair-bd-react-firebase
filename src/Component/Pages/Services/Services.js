import React, { useEffect, useState } from "react";
import UseServices from "../../../Hook/UseServices";
import Service from "../Service/Service";
import "./Service.css";
const Services = () => {
  const [services, setServices] = UseServices();

  return (
    <div className="pt-5 services pb-5" id="services">
      <div className="container p-5">
        <div className="row row-cols-lg-3 g-5 row-cols-md-2">
          {services.map((service) => (
            <Service service={service} key={service._id}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
