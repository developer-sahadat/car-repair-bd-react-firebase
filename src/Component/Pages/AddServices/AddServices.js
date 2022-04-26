import React from "react";
import { useForm } from "react-hook-form";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddServices = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `https://quiet-shelf-65814.herokuapp.com/service`;
    console.log(url);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.acknowledged) {
          toast("Product has been added 😊!");
        }
      });
  };

  return (
    <div>
      <h2 className="text-center">Services Added</h2>
      <form className="mb-3 w-50 mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="form-control m-3"
          type="text"
          placeholder="Title"
          {...register("name")}
        />
        <textarea
          className="form-control m-3"
          placeholder="Description"
          {...register("description")}
        />
        <input
          className="form-control m-3"
          type="text"
          placeholder="Image URL"
          {...register("img")}
        />
        <input
          className="form-control m-3"
          type="number"
          placeholder="Number"
          {...register("price")}
        />
        <input className="form-control m-3 btn-primary" type="submit" />
      </form>
    </div>
  );
};

export default AddServices;
