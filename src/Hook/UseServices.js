import React, { useEffect, useState } from "react";

const UseServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://quiet-shelf-65814.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return [services, setServices];
};

export default UseServices;
