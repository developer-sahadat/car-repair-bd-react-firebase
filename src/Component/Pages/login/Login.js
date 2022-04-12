import React from "react";
import loginImg from "../../../Assets/Images/login.jpg";
import "./login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="container">
        <div className="row row-cols-md-2">
          <div></div>
          <div>
            <img src={loginImg} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
