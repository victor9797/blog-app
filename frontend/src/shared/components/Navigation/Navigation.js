import React from "react";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Header from "./Header";
import "./Navigation.css";

const Navigation = (props) => {
  return (
    <Header>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to={`/`} className="navbar__link-component">
              Blog App
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to={`/`} className="navbar__link-component">
                  Profile
                </Link>
              </Nav.Link>
              <Nav.Link href="#link">
                <Link to={`/`} className="navbar__link-component">
                  Login
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Header>
  );
};

export default Navigation;
