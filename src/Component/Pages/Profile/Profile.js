import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
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
    </div>
  );
};

export default Profile;
