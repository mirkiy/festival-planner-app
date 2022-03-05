import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EventList from "../components/EventList";
import FestivalDataContext from "../context/FestivalDataContext";
import FavouritesDataContext from "../context/FavouritesDataContext";

const FestivalPage = ({ onEventClick }) => {
  // contexts
  const { festivalData, setFestivalData } = useContext(FestivalDataContext);
  const { favouritesData, setFavouritesData } = useContext(
    FavouritesDataContext
  );

  // state
  const [finalFestivalData, setFinalFestivalData] = useState([]);

  // react-router hooks
  const { festival } = useParams(); // gets 'festival' parameter from '/festival/:festival' route

  const fetchData = () => {
    fetch(`http://localhost:8080/festivals?id=${festival}`)
      .then((response) => response.json())
      .then((data) => setFestivalData(data))
      .catch((e) => console.error(e));
  };

  useEffect(() => {
    fetchData();
  }, [festival]);

  useEffect(() => {
    /**
     * BUG: it's not save which ones are in favourites because when we fetch data from another festival
     * the 'favourited' property disappears
     *
     * we need to somehow select data that's already inside the object
     */
    setFinalFestivalData(
      festivalData.length > 0
        ? festivalData.map((event) => {
            // instead of checking if it's inside array we check their event codes which are unique
            // put them inside an array of just the codes
            const favouriteEventCodes = favouritesData.map(
              (favouriteEvent) => favouriteEvent.code
            );

            // we check that event.code is inside favourites codes, if match, attach property
            const property = favouriteEventCodes.includes(event.code);
            event.favourited = property;
            return event;
          })
        : []
    );
  }, [favouritesData]);

  return (
    <EventList
      context={finalFestivalData.length > 0 ? finalFestivalData : festivalData}
      onEventClick={onEventClick}
    />
  );
};

export default FestivalPage;
