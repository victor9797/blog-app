import React from "react";

import { NavLink } from "react-router-dom";

import Nav from "react-bootstrap/Nav";

const NavLinks = (props) => {
  return (
    <Nav className="me-auto">
      <Nav.Link>
        <NavLink to={`/u1/blogs`} className="navbar__link-component">
          My blogs
        </NavLink>
      </Nav.Link>
      <Nav.Link>
        <NavLink to={`/blogs/new`} className="navbar__link-component">
          New blog
        </NavLink>
      </Nav.Link>
      <Nav.Link>
        <NavLink to={`/auth`} className="navbar__link-component">
          Login
        </NavLink>
      </Nav.Link>
    </Nav>
  );
};

export default NavLinks;
