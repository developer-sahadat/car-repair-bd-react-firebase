import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../Firebase/init";
import Spinners from "../../Spinner/Spinners";

const Profile = () => {
  const [user, loading, error] = useAuthState(auth);
  if (loading) {
    return <Spinners />;
  }

  return (
    <div className="m-5 p-5 text-center text-primary">
      <h1> {user?.displayName} </h1>
      <h4 className="pt-5">We welcome you to our Car Repair</h4>
      <Link to="/add-service">
        <button className="btn-primary">Add New Services</button>
      </Link>
      <Link to="/delete-service">
        <button className="btn-primary">Delete Services Services</button>
      </Link>
      <br />
      <br />
      <Link to="/order-history">
        <button className="btn-primary"> Order History</button>
      </Link>
    </div>
  );
};

export default Profile;
