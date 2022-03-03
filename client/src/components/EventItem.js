import React, { useEffect, useState } from "react";
import EventItemPopUp from "./EventItemModal";
import getImageFromEvent from "../helpers/getImageFromEvent";

const EventItem = ({ event, onEventClick }) => {
  // Toggle's render of pop-up modal window
  const [isHidden, setIsHidden] = useState(true);

  // useEffect(() => {
  //   preventFromScrolling();
  // }, [isHidden]);

  const image = getImageFromEvent(event, "small-320");

  const handleClick = () => {
    onEventClick(event);
  };

  const toggleHidden = () => {
    // sets isHidden to opposite value (true-> false, false->true)
    setIsHidden(!isHidden);

    // 
    if (isHidden) {
      const top = document.documentElement.scrollTop;
      document.body.style.position = "fixed";
      document.body.style.overflowY = "scroll";
    }
    // closses modal when clicking on the X
    // allows scroll back
    if (!isHidden) {
      document.body.style.position = "static";
      document.body.style.overflowY = "auto";
    }
  };

  const onClickOutsideCloseModal = (event) => {
    // checks that first child of clicked item exists to prevent error
    if (!event.target.firstChild.classList) return;
    // checks that current clicked item has a child with "modal-wrapper" class
    // if true, means that it's clicking outside of modal
    if (event.target.firstChild.classList.contains("modal-wrapper")) {
      toggleHidden();
    }
  };

  const preventFromScrolling = () => {

  };

  return (
    <>
      <div className="event-wrapper" onClick={() => toggleHidden()}>
        <img width="320px" height="180px" src={image.url} />

        <div className="event-wrapper-title-container">
          <span className="event-wrapper-title">{event.title}</span>
          {/* <h2>{event.year}</h2> */}
          <div style={{ height: "2px", width: "2px"}} onClick={() => handleClick()}>
            <i className="fa far fa-heart" style={{ fontSize: "1.75em" }} />
          </div>
        </div>
      </div>
      {!isHidden ? (
        <EventItemPopUp
          toggleHidden={toggleHidden}
          onClickOutsideCloseModal={onClickOutsideCloseModal}
        />
      ) : null}
    </>
  );
};

export default EventItem;
