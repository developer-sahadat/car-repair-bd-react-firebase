import React from "react";
import loginImg from "../../../Assets/Images/login.jpg";
import googleIcons from "../../../Assets/Icons/icons8-google-48.png";
import facebookIcons from "../../../Assets/Icons/icons8-facebook-48.png";
import twitterIcons from "../../../Assets/Icons/icons8-twitter-48.png";
import githubIcons from "../../../Assets/Icons/icons8-github-48.png";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../Firebase/init";
import Spinners from "../../Spinner/Spinners";

const Signup = () => {
  /*---------all use state----------*/
  const navigate = useNavigate();

  /*---------Create a user----------*/
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  /*---------Google sign in ----------*/
  const [signInWithGoogle, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  /*---------Submit handler Start here ----------*/
  const submitHandle = (e) => {
    e.preventDefault();

    // const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUserWithEmailAndPassword(email, password);
  };

  /*---------Loading and error handle Start here ----------*/
  let emailMessage;
  let googleErrorMessage;
  if (googleError || error) {
    emailMessage = error?.message;
    googleErrorMessage = googleError?.message;
  }
  if (loading || googleLoading) {
    <Spinners />;
  }

  /*---------Private routes handle ----------*/
  if (user) {
    navigate("/profile");
  }

  /*--------- already have an account handle ----------*/
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
                <h6 className="text-danger text-center">
                  {googleErrorMessage}
                </h6>
                <h2>Sign Up</h2>
                <p>See your growth and gets consultation support!</p>
                <div className="text-center mb-3">
                  <button
                    onClick={() => signInWithGoogle()}
                    className="SocialLogin"
                  >
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
                  <span>Or sign Up by email</span>
                  <div></div>
                </div>
                <h6 className="text-danger text-center">{emailMessage}</h6>

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
