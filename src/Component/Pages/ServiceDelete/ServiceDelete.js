import React from "react";
import UseServices from "../../../Hook/UseServices";

const ServiceDelete = () => {
  const [services, setServices] = UseServices();

  const deleteHandler = (id) => {
    const confirm = window.confirm("are you sure");

    if (confirm) {
      const url = `https://quiet-shelf-65814.herokuapp.com/service/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.deletedCount > 0) {
            const newService = services.filter((service) => service._id !== id);
            setServices(newService);
          }
        });
    }
  };
  return (
    <div>
      {services.map((service) => (
        <div key={service._id}>
          <img src={service.img} alt="" />
          {service.name}
          <button onClick={() => deleteHandler(service._id)}>X</button>
        </div>
      ))}
    </div>
  );
};

export default ServiceDelete;
