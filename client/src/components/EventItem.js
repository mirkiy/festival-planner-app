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

    // adding/removing event to/from local storage still doesn't work :(
    !event.favourited
      ? localStorage.setItem(event.code, JSON.stringify(event))
      : localStorage.removeItem(event.code, JSON.stringify(event));
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

  const shortenTitle = (string, maxLength) => {
    if (string.length < maxLength) return string;

    let arrayOfWords = string.slice(0, maxLength).trim();

    return arrayOfWords + "...";
  }

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
                color: event.favourited ? "rgb(192, 24, 178)" : "white",
              }}
            />
          </div>
          <span className="event-wrapper-title" onClick={() => toggleHidden()}>
            {shortenTitle(event.title, 18)}
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
