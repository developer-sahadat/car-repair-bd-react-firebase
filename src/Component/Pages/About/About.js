import React from "react";
import "./about.css";
import aboutPic from "../../../Assets/Images/about.jpg";

const About = () => {
  return (
    <div>
      <div className="container p-5 about ">
        <h2>
          About <span>Us!</span>{" "}
        </h2>
        <div className="row  row-cols-md-2 justify-content-center align-items-center">
          <div>
            <h3>Welcome To car repair</h3>
            <p>
              car repaire is a Professional car repaire Platform. Here we will
              provide you only interesting content, which you will like very
              much. We're dedicated to providing you the best of car repaire,
              with a focus on dependability and car repaire. We're working to
              turn our passion for car repaire into a booming online website. We
              hope you enjoy our car repaire as much as we enjoy offering them
              to you.
            </p>
            <p>
              I will keep posting more important posts on my Website for all of
              you. Please give your support and love.
            </p>
            <h6>Thanks For Visiting Our Site</h6>
            <h5>Have a nice day !</h5>
          </div>
          <div>
            <img src={aboutPic} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
