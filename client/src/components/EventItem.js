import React, {useState} from "react";
import EventItemPopUp from "./EventItemPopUp";
import getImageFromEvent from "../helpers/getImageFromEvent";

const EventItem = ({ event }) => {

  const [isHidden, setIsHidden] = useState(true)

  const image = getImageFromEvent(event, "small-320");

  return (
    <>
      <div className="event-wrapper" onClick={() => setIsHidden(!isHidden)} >

        <img width="320px" height="180px" src={image.url} />

        <div className="event-wrapper-title-container">
          <span className="event-wrapper-title">{event.title}</span>
          {/* <h2>{event.year}</h2> */}
        </div>
      </div>
      { !isHidden? <EventItemPopUp/> : null }
    </>
  );
};

export default EventItem;
