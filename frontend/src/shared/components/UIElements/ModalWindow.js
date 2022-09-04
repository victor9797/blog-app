import React from "react";
import ReactDOM from "react-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalWindow = (props) => {
  const content = (
    <Modal show={props.show}>
      <Modal.Header>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.caption}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.closeHandler}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );

  return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
};

export default ModalWindow;
