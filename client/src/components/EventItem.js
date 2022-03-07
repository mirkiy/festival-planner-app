import React, { useEffect, useState } from "react";
import EventItemModal from "./EventItemModal";

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

  const maxCharacterCount = (string, max) => {
    // ADDED THIS
    if (string.length <= max) {
      return string;
    }

    return string.slice(0, max) + "...";
  };

  return (
    <>
      <div className="event-wrapper">
        <img
          className="rounded shadow"
          width="320px"
          height="180px"
          src={image.url}
          onClick={() => toggleHidden()}
        />

        <div className="event-wrapper-title-container">
          <div className="hover-heart" onClick={handleClick}>
            <i
              className="fa far fa-heart"
              style={{
                fontSize: "1.75em",
                color: event.favourited ? "red" : "white",
              }}
            />
          </div>
          <span className="event-wrapper-title" onClick={() => toggleHidden()}>
            {maxCharacterCount(event.title, 58)}
          </span>
          {/* <h2>{event.year}</h2> */}
        </div>
      </div>
      {shows ? (
        <EventItemModal
          currentEvent={event}
          toggleHidden={toggleHidden}
          onClickOutsideCloseModal={onClickOutsideCloseModal}
        />
      ) : null}
    </>
  );
};

export default EventItem;
