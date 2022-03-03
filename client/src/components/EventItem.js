import React, {useState} from "react";
import EventItemPopUp from "./EventItemPopUp";
import getImageFromEvent from "../helpers/getImageFromEvent";

const EventItem = ({ event, onEventClick }) => {

  // Toggle's render of pop-up modal window
  const [isHidden, setIsHidden] = useState(true)

  const image = getImageFromEvent(event, "small-320");

   const handleClick = () => {
        onEventClick(event);
    }

  return (
    <>
      <div className="event-wrapper" onClick={() => setIsHidden(!isHidden)} >

        <img width="320px" height="180px" src={image.url} />

        <div className="event-wrapper-title-container">
          <span className="event-wrapper-title">{event.title}</span>
          {/* <h2>{event.year}</h2> */}
          <div style={{ height: '2px', width: '2px' }} onClick={handleClick} >
                    <i className="fa far fa-heart" style={{ fontSize: "1.75em" }} />
                </div>
        </div>
      </div>
      {/* { !isHidden? <EventItemPopUp/> : null } */}
    </>
  );

};

export default EventItem;
