import React, { useEffect, useState } from "react";
import EventItemPopUp from "./EventItemModal";
import getImageFromEvent from "../helpers/getImageFromEvent";
import { preventScroll, allowScroll } from "../helpers/scrollBehaviours";

const EventItem = ({ event, onEventClick }) => {
  // pop-up modal visibility state
  const [shows, setShows] = useState(false);

  // image from event object
  const image = getImageFromEvent(event, "small-320");

  const handleClick = () => {
    // add to favs / remove from favs
    onEventClick(event);
  };

  const toggleHidden = () => {
    setShows(!shows);

    // helper functions to toggle scroll behaviour
    !shows ? preventScroll() : allowScroll();
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

  return (
    <>
      <div className="event-wrapper" onClick={() => toggleHidden()}>
        <img width="320px" height="180px" src={image.url} />

        <div className="event-wrapper-title-container">
          <span className="event-wrapper-title">{event.title}</span>
          {/* <h2>{event.year}</h2> */}

          <div
            style={{ height: "2px", width: "2px" }}
            onClick={() => handleClick()}
          >
            <i className="fa far fa-heart" style={{ fontSize: "1.75em" }} />
          </div>
        </div>
      </div>
      {shows ? (
        <EventItemPopUp
          toggleHidden={toggleHidden}
          onClickOutsideCloseModal={onClickOutsideCloseModal}
        />
      ) : null}
    </>
  );
};

export default EventItem;
