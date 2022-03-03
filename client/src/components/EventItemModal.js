import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const EventItemPopUp = ({ toggleHidden, onClickOutsideCloseModal }) => {
  
  return (
    <div
      className="modal-container"
      onClick={(event) => onClickOutsideCloseModal(event)}
    >
      <Modal.Dialog className="modal-wrapper">
        <Modal.Header>
          <Modal.Title>Modal title</Modal.Title>
          {/* below is the CROSS MARK. needs to be changed to icon */}
          <div style={{width: "36px", height: "36px"}}>
            <span onClick={() => toggleHidden()} style={{fontSize: "1.75em", color:"grey", cursor:"pointer"}} >
            &#10060;
            </span>
          </div>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default EventItemPopUp;
