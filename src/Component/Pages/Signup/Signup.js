import React from "react";
import loginImg from "../../../Assets/Images/login.jpg";
import googleIcons from "../../../Assets/Icons/icons8-google-48.png";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const submitHandle = (e) => {
    e.preventDefault();
  };

  const navigateLogin = () => {
    navigate("/login");
  };
  return (
    <div>
      <div className="login-container">
        <div className="container bg-white">
          <div className="row row-cols-md-2 justify-content-center align-items-center">
            <div>
              <img src={loginImg} className="img-fluid" alt="" />
            </div>
            <div>
              <div className=" login">
                <h2>Sign Up</h2>
                <p>See your growth and gets consultation support!</p>
                <div className="social-media-login">
                  <button className="googleBtn">
                    <img src={googleIcons} alt="" /> Sign Up With Google
                  </button>
                </div>
                <div className="orSignByEmail">
                  <div></div>
                  <span>Or sign Up by email</span>
                  <div></div>
                </div>

                <Form onSubmit={submitHandle}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="fw-bold">
                      Name
                      <span className="start">*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Name"
                      required
                      className="emailInput"
                      name="name"
                    />
                  </Form.Group>
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
                      name="email"
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
                      name="password"
                    />
                  </Form.Group>
                  <Button className="submitBtn" variant="primary" type="submit">
                    Sign Up
                  </Button>
                </Form>
                <div className="createNewAccount">
                  <span> already have an account?</span>
                  <button onClick={navigateLogin}>Login</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
