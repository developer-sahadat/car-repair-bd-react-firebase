import React from "react";
import loginImg from "../../../Assets/Images/login.jpg";
import "./login.css";
import googleIcons from "../../../Assets/Icons/icons8-google-48.png";
import { Button, Form } from "react-bootstrap";

const Login = () => {
  return (
    <div className="login-container">
      <div className="container bg-white">
        <div className="row row-cols-md-2 justify-content-center align-items-center">
          <div>
            <img src={loginImg} className="img-fluid" alt="" />
          </div>
          <div>
            <div className=" login">
              <h2>Login</h2>
              <p>See your growth and gets consultation support!</p>
              <div className="social-media-login">
                <button className="googleBtn">
                  <img src={googleIcons} alt="" /> Sign in With Google
                </button>
              </div>
              <div className="orSignByEmail">
                <div></div>
                <span>Or sign in by email</span>
                <div></div>
              </div>

              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="fw-bold">
                    Email
                    <span className="start">*</span>
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    required
                    className="emailInput"
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="fw-bold">
                    Password<span className="start">*</span>
                  </Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    required
                    className="passwordInput"
                  />
                </Form.Group>
                <h6 className="forgetPassword">Forget Password?</h6>
                <Button className="submitBtn" variant="primary" type="submit">
                  Login
                </Button>
              </Form>
              <div className="createNewAccount">
                <span> Not registered yet?</span>
                <button>Create an Account</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
