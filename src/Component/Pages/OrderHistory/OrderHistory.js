import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Firebase/init";

const OrderHistory = () => {
  const [user] = useAuthState(auth);
  const [order, setOrder] = useState([]);
  console.log(order);

  useEffect(() => {
    const url = `https://quiet-shelf-65814.herokuapp.com/order?email=${user.email}`;
    axios(url, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((result) => setOrder(result.data));
  }, [user]);

  return (
    <div>
      <h2 className="text-center py-3 ">Your All order {order.length}</h2>
    </div>
  );
};

export default OrderHistory;
