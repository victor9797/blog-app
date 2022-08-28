import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./UserItem.css";

const UserItem = (props) => {
  return (
    <li className="li-component mt-3">
      <Card>
        <Card.Img variant="top" src={props.image} alt={props.name} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur
          </Card.Text>
          <Link to={`/${props.id}/blogs`}>
            <Button variant="primary">
              {"Has posted "}
              {props.blogCount} {props.blogCount === 1 ? " blog" : " blogs"}
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </li>
  );
};

export default UserItem;
