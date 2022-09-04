import React, { useState } from "react";
import "./BlogItem.css";

import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ModalWindow from "../../../shared/components/UIElements/ModalWindow";

const BlogItem = (props) => {
  const [show, setShow] = useState(false);
  const onCloseHandler = () => setShow(false);
  const onOpenHandler = () => setShow(true);

  return (
    <React.Fragment>
      <ModalWindow
        closeHandler={onCloseHandler}
        openHandler={onOpenHandler}
        show={show}
        title={props.title}
        caption={props.caption}
      ></ModalWindow>

      <li className="li-component">
        <Card>
          <Card.Img variant="top" src={props.image} alt={props.title} />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <h7>{props.location}</h7>
            <Card.Text>{props.text}</Card.Text>

            <Row>
              <Col>
                <Button
                  variant="primary"
                  className="button-component"
                  onClick={onOpenHandler}
                >
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
    </React.Fragment>
  );
};

export default BlogItem;
