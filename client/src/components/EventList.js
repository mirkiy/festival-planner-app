import React, { useContext } from "react";
import EventItem from "./EventItem";

const EventList = ({ context, onEventClick }) => {

    const eventListNodes = context.map((event, index) => {
        return <EventItem key={index} event={event} onEventClick={onEventClick} />;
    });

    return <section className="event-gallery">{eventListNodes}</section>;
};

export default EventList