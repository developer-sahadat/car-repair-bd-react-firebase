import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../../../Firebase/init";
import "./Header.css";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);

  return (
    <div>
      <div className="container p-3">
        <Navbar bg="white" expand="lg">
          <Container>
            <NavLink className="logo" to="/">
              Car Repair
            </NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="m-auto">
                <NavLink className="link" to="/">
                  Home
                </NavLink>
                <NavLink className="link" to="/about">
                  About
                </NavLink>
                <NavLink className="link" to="/contact">
                  Contact
                </NavLink>
                <NavLink className="link" to="/services">
                  Services
                </NavLink>
                {user && (
                  <NavLink className="link" to="/profile">
                    {user && "Profile"}
                  </NavLink>
                )}
              </Nav>
              {user ? (
                <button onClick={() => signOut(auth)} className="nav-btn">
                  Sign Out
                </button>
              ) : (
                <Link to="/login">
                  <button className="nav-btn">Login</button>
                </Link>
              )}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
