import React from "react";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const EventItemModal = ({
  currentEvent,
  toggleHidden,
  onClickOutsideCloseModal,
}) => {
  const formatDate = (start, end) => {
    // separate event day from event starting time
    let [day, startTime] = start.split(" ");

    // removes the seconds (from 20:00:00 to 20:00 by removing 3 last indexes which are ":00")
    startTime = startTime.slice(0, -3);

    // this does the same as with startTime but in one line
    const endTime = end.split(" ")[1].slice(0, -3);

    return {
      day: day,
      start: startTime,
      end: endTime,
    };
  };

  const { day, start, end } = formatDate(
    currentEvent.performances[0].start,
    currentEvent.performances[0].end
  );

  return (
    <div
      className="modal-container"
      onClick={(event) => onClickOutsideCloseModal(event)}
    >
      <Modal.Dialog className="modal-wrapper">
        <Modal.Header>
          <Modal.Title>{currentEvent.title}</Modal.Title>
          <div style={{ width: "36px", height: "36px" }}>
            <span
              onClick={() => toggleHidden()}
              style={{ fontSize: "1.75em", color: "grey", cursor: "pointer" }}
            >
              &#10060;
            </span>
          </div>
        </Modal.Header>

        <Modal.Body>
          <Container fluid>
            <Row>
              <Col xs={9}>
                <p>
                  <b>{day}</b>
                </p>
                <p>
                  From <b>{start}</b> till <b>{end}</b>
                </p>
              </Col>
              <Col>
                <p>£{currentEvent.performances[0].price}</p>
              </Col>
            </Row>
            <hr />
            <div
              dangerouslySetInnerHTML={{ __html: currentEvent.description }}
            ></div>{" "}
          </Container>
        </Modal.Body>

        <Modal.Footer>
          <a
            href={currentEvent.website}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i>Go to official website.</i>
          </a>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default EventItemModal;
