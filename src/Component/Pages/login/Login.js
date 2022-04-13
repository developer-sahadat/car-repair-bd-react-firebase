import React, { useRef } from "react";
import loginImg from "../../../Assets/Images/login.jpg";
import "./login.css";
import googleIcons from "../../../Assets/Icons/icons8-google-48.png";
import facebookIcons from "../../../Assets/Icons/icons8-facebook-48.png";
import twitterIcons from "../../../Assets/Icons/icons8-twitter-48.png";
import githubIcons from "../../../Assets/Icons/icons8-github-48.png";
import { Button, Form } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../Firebase/init";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  let location = useLocation();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  let from = location?.state?.from?.pathname || "/profile";
  if (user) {
    navigate(from, { replace: true });
  }
  const submitHandle = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };

  const createNewAccount = () => {
    navigate("/signup");
  };

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
              <div className="text-center mb-3">
                <button className="SocialLogin">
                  <img src={googleIcons} alt="" /> Sign in With Google
                </button>
                <button className="SocialLogin">
                  <img src={facebookIcons} alt="" /> Sign in With Facebook
                </button>
                <button className="SocialLogin">
                  <img src={twitterIcons} alt="" /> Sign in With Twitter
                </button>
                <button className="SocialLogin">
                  <img src={githubIcons} alt="" /> Sign in With GitHub
                </button>
              </div>
              <div className="orSignByEmail">
                <div></div>
                <span>Or sign in by email</span>
                <div></div>
              </div>

              <Form onSubmit={submitHandle}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="fw-bold">
                    Email
                    <span className="start">*</span>
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    required
                    ref={emailRef}
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
                    ref={passwordRef}
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
                <button onClick={createNewAccount}>Create an Account</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
