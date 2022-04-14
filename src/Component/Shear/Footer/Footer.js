import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationArrow,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import facebook from "../../../Assets/Icons/icons8-facebook-48.png";
import twitter from "../../../Assets/Icons/icons8-twitter-48.png";
import instagram from "../../../Assets/Icons/icons8-instagram-48.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="container bottom_border">
          <div className="row">
            <div className=" col-sm-4 col-md col-sm-4  col-12 col">
              <h5 className="headin5_amrc col_white_amrc pt2">Contact us</h5>
              {/* <!--headin5_amrc--> */}
              <p className="mb10">
                car repaire is a Professional car repaire Platform. Here we will
                provide you only interesting content, which you will like very
                much. We're dedicated to providing you the best of car repaire,
                with a focus on dependability and car repaire.
              </p>
              <p>
                <FontAwesomeIcon icon={faLocationArrow} /> Savar, Dhaka-1344
              </p>
              <p>
                <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>{" "}
                +8801998839126
              </p>
              <p>
                <FontAwesomeIcon icon={faEnvelope} /> mdridoysikder862@gmail.com
              </p>
            </div>

            <div className=" col-sm-4 col-md  col-6 col">
              <h5 className="headin5_amrc col_white_amrc pt2">Service</h5>
              {/* <!--headin5_amrc--> */}
              <ul className="footer_ul_amrc">
                <li>
                  <a href="/">Oil Change</a>
                </li>
                <li>
                  <a href="/">Windshield</a>
                </li>
                <li>
                  <a href="/">Air and Cabin</a>
                </li>
                <li>
                  <a href="/">Scheduled Maintenance</a>
                </li>
                <li>
                  <a href="/">Tire Replacement</a>
                </li>
                <li>
                  <a href="/">Battery Replacement.</a>
                </li>
              </ul>
              {/* <!--footer_ul_amrc ends here--> */}
            </div>

            <div className=" col-sm-4 col-md  col-6 col">
              <h5 className="headin5_amrc col_white_amrc pt2">About US</h5>
              {/* <!--headin5_amrc--> */}
              <ul className="footer_ul_amrc">
                <li>
                  <a href="/">Spark Plug replacement</a>
                </li>
                <li>
                  <a href="/">Fuel Cap tightening</a>
                </li>
                <li>
                  <a href="/">Oxygen Sensor replacement.</a>
                </li>
                <li>
                  <a href="/">Brake work.</a>
                </li>
                <li>
                  <a href="/">Oil changes.</a>
                </li>
                <li>
                  <a href="/">Tire repairs </a>
                </li>
              </ul>
              {/* <!--footer_ul_amrc ends here--> */}
            </div>

            <div className=" col-sm-4 col-md  col-12 col">
              <h5 className="headin5_amrc col_white_amrc pt2">Follow us</h5>
              {/* <!--headin5_amrc ends here--> */}

              <ul className="footer_ul2_amrc">
                <li>
                  <a href="https://www.facebook.com/DeveloperShahadatHossain/">
                    <img src={facebook} alt="" style={{ width: "20px" }} />
                  </a>
                  <p>Our Facebook account please joint...</p>
                </li>
                <li>
                  <a href="https://twitter.com/wd_shahadat">
                    <img src={twitter} alt="" style={{ width: "20px" }} />
                  </a>
                  <p>Our Twitter account please joint...</p>
                </li>
                <li>
                  <a href="https://www.instagram.com/developershahadat/">
                    <img src={instagram} alt="" style={{ width: "20px" }} />
                  </a>
                  <p>Our Instagram account please joint...</p>
                </li>
              </ul>
              {/* <!--footer_ul2_amrc ends here--> */}
            </div>
          </div>
        </div>

        <div className="container">
          <ul className="foote_bottom_ul_amrc">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>

            <li>
              <Link to="contact">Contacts</Link>
            </li>
          </ul>
          {/* <!--foote_bottom_ul_amrc ends here--> */}
          <p className="text-center">
            Copyright @2022 | Designed With by Junior Developer Shahadat
          </p>

          <ul className="social_footer_ul">
            <li>
              <a href="https://www.facebook.com/DeveloperShahadatHossain/">
                <img src={facebook} alt="" style={{ width: "30px" }} />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/wd_shahadat">
                <img src={twitter} alt="" style={{ width: "30px" }} />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/developershahadat/">
                <img src={instagram} alt="" style={{ width: "30px" }} />
              </a>
            </li>
          </ul>
          {/* <!--social_footer_ul ends here--> */}
        </div>
      </footer>
    </div>
  );
};

export default Footer;
