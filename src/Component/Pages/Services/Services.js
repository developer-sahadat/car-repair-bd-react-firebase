import React from "react";
import engine from "../../../Assets/Icons/engine.png";
import tune from "../../../Assets/Icons/tune.png";
import paint from "../../../Assets/Icons/paint.png";
import Service from "../Service/Service";
import "./Service.css";
const Services = () => {
  const services = [
    {
      name: "Engine Service",
      id: 1,
      img: engine,
      description:
        "Avoid Costly Repairs Maintenance. One of the most costly repairs is engine replacement.",
    },
    {
      name: "Tune Up",
      id: 2,
      img: tune,
      description:
        "Denotes the routine servicing of the engine to meet the manufacturer's specifications.",
    },
    {
      name: "Car Paint",
      id: 3,
      img: paint,
      description:
        "Automotive paint is paint used on automobiles for both protection and decoration purposes.",
    },
  ];

  return (
    <div className="pt-5 services pb-5" id="services">
      <div className="container p-5">
        <div className="row row-cols-lg-3 g-5 row-cols-md-2">
          {services.map((service) => (
            <Service service={service} key={service.id}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
