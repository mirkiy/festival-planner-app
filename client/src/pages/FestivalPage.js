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
    setFinalFestivalData(
      festivalData.length > 0
        ? festivalData.map((event) => {
            const property = favouritesData.includes(event);
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
