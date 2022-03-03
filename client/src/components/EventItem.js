import React from "react";

const EventItem = ({ event, onEventClick }) => {

    const handleClick = () => {
        onEventClick(event);
    }

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
                <div style={{ height: '2px', width: '2px' }} onClick={handleClick} >
                    <i className="fa far fa-heart" style={{ fontSize: "1.75em" }} />
                </div>
            </div>
        </div>
    );
};

export default EventItem;
