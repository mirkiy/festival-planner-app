import React from "react";

const EventItem = ({ event }) => {
  return (

    <div className="event-wrapper">
      {/* <img
        src="https://images.api.edinburghfestivalcity.com/18/45/80/184580a0463f6b993a6216672742f20fa1874e61-square-150.jpg"
        alt="jazz band"
      /> */}
      <img src="https://images.api.edinburghfestivalcity.com/18/45/80/184580a0463f6b993a6216672742f20fa1874e61-small-320.jpg" />

      <div className="event-wrapper-title-container">
        <span className="event-wrapper-title">{event.title}</span>
        {/* <h2>{event.year}</h2> */}
      </div>
    </div>
  );
};

export default EventItem;
