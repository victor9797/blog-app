import React from "react";
import "./BlogItem.css";

import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";

const BlogItem = (props) => {
  return (
    <li className="li-component">
      <Card>
        <Card.Img variant="top" src={props.image} alt={props.title} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <h7>{props.location}</h7>
          <Card.Text>{props.text}</Card.Text>

          <Row>
            <Col>
              <Button variant="primary" className="button-component">
                View location
              </Button>
            </Col>

            <Col>
              <Button variant="success" className="button-component">
                Edit
              </Button>
            </Col>

            <Col>
              <Button variant="danger" className="button-component">
                Delete
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </li>
  );
};

export default BlogItem;
