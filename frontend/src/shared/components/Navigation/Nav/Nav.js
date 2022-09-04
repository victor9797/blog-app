import React from "react";
import { NavLink } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import Header from "../Header/Header";
import "./Nav.css";
import NavLinks from "../NavLinks/NavLinks";

const Nav = (props) => {
  return (
    <Header>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <NavLink to={`/`} className="navbar__link-component">
              Blog App
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <NavLinks />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Header>
  );
};

export default Nav;
