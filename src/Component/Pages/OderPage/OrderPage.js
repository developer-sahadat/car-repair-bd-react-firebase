import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../Firebase/init";

const OrderPage = () => {
  const { id } = useParams();
  const [user] = useAuthState(auth);

  const [service, setService] = useState({});

  useEffect(() => {
    const url = `https://quiet-shelf-65814.herokuapp.com/service/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [id]);

  const submitHandler = (e) => {
    e.preventDefault();
    const orderDetails = {
      email: user.email,
      name: service.name,
      address: e.target.address.value,
      userId: id,
    };

    axios
      .post("https://quiet-shelf-65814.herokuapp.com/order", orderDetails)
      .then((result) => {
        console.log();
        if (result.data.acknowledged) {
          toast("Order completed");
        }
      });
  };

  return (
    <div>
      <h1 className="text-center">Welcome To Order Page</h1>
      <div className="w-50 mx-auto my-5">
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={user.displayName}
              placeholder="Enter name"
              name="name"
              readOnly
              disabled
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={user.email}
              readOnly
              disabled
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Food Items</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter food items"
              name="items"
              readOnly
              disabled
              value={service.name}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>address</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="address"
              name="address"
            />
          </Form.Group>

          <Button className="d-block w-100" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default OrderPage;
