import React, { useContext } from "react";
import EventItem from "./EventItem";
import FestivalDataContext from "../context/FestivalDataContext";

const EventList = () => {
  let { festivalData } = useContext(FestivalDataContext);

  const eventListNodes = festivalData.map((event, index) => {
    return <EventItem key={index} event={event} />;
  });

  return <section className="event-gallery">{eventListNodes}</section>;
};

export default EventList;
