// import React, { useContext, useEffect, useState } from 'react'
// import EventList from '../components/EventList'
// import FestivalDataContext from "../context/FestivalDataContext";
// import FavouritesDataContext from '../context/FavouritesDataContext';

// const FestivalPage = ({ onEventClick }) => {

//   const { festivalData, setFestivalData } = useContext(FestivalDataContext);
//   const { favouritesData, setFavouritesData } = useContext(FavouritesDataContext);

//   const [finalFestivalData, setFinalFestivalData] = useState([])

//   useEffect(() => {
//     setFinalFestivalData(festivalData.length > 0 ? festivalData.map((event) => {
//       const property = favouritesData.includes(event);
//       event.favourited = property;
//       return event;
//     }) : [])
//   }, [favouritesData])

//   return (
//     <EventList context={finalFestivalData.length > 0 ? finalFestivalData : festivalData} onEventClick={onEventClick} />
//   )
// }

// export default FestivalPage

// my test code:

import React, { useContext, useEffect, useState } from "react";
import EventList from "../components/EventList";
import FestivalDataContext from "../context/FestivalDataContext";
import FavouritesDataContext from "../context/FavouritesDataContext";
import FilteredEvents from "../components/FilteredEvents";

const FestivalPage = ({ onEventClick }) => {
  const { festivalData, setFestivalData } = useContext(FestivalDataContext);
  const { favouritesData, setFavouritesData } = useContext(
    FavouritesDataContext
  );

  const [finalFestivalData, setFinalFestivalData] = useState([]);

  const [search, setSearch] = useState("");

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
    <>
      <FilteredEvents setSearch={setSearch} />
      <EventList
        context={
          finalFestivalData.length > 0 ? finalFestivalData : festivalData
        }
        onEventClick={onEventClick}
        search={search}
      />
    </>
  );
};

export default FestivalPage;
