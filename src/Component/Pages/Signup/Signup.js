import React, { useState } from "react";
import loginImg from "../../../Assets/Images/login.jpg";
import googleIcons from "../../../Assets/Icons/icons8-google-48.png";
import facebookIcons from "../../../Assets/Icons/icons8-facebook-48.png";
import twitterIcons from "../../../Assets/Icons/icons8-twitter-48.png";
import githubIcons from "../../../Assets/Icons/icons8-github-48.png";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../Firebase/init";
import Spinners from "../../Spinner/Spinners";

const Signup = () => {
  /*---------all use state----------*/
  const navigate = useNavigate();
  const [agree, setAgree] = useState(false);

  /*---------Create a user----------*/
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [sendEmailVerification, sending] = useSendEmailVerification(auth);

  /*---------Google sign in ----------*/
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  console.log(googleUser?.user?.email);

  /*---------Facebook sign in ----------*/
  const [signInWithFacebook, facebookUser, facebookLoading, facebookError] =
    useSignInWithFacebook(auth);

  /*---------GitHub sign in ----------*/
  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);

  /*---------Update Profile----------*/
  const [updateProfile] = useUpdateProfile(auth);

  /*---------Submit handler Start here ----------*/
  const submitHandle = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (agree) {
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName: name });
      navigate("/profile");
      await sendEmailVerification();
    } else {
      alert("Please check the term and condition");
    }
  };

  /*---------Loading and error handle Start here ----------*/
  if (loading || googleLoading || facebookLoading || githubLoading) {
    return <Spinners />;
  }
  let emailMessage;
  let socialErrorMessage;
  if (googleError || error || facebookError || githubError) {
    emailMessage = error?.message;
    socialErrorMessage = googleError?.message
      ? googleError?.message
      : facebookError.message
      ? facebookError.message
      : githubError.message;
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
                  {socialErrorMessage}
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
                  <button
                    onClick={() => signInWithFacebook()}
                    className="SocialLogin"
                  >
                    <img src={facebookIcons} alt="" /> Sign in With Facebook
                  </button>
                  <button className="SocialLogin">
                    <img src={twitterIcons} alt="" /> Sign in With Twitter
                  </button>
                  <button
                    onClick={() => signInWithGithub()}
                    className="SocialLogin"
                  >
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
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                      onClick={(e) => setAgree(e.target.checked)}
                      type="checkbox"
                      label="Car repair terms and conditions"
                      className={agree ? "text-primary" : "text-danger"}
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
