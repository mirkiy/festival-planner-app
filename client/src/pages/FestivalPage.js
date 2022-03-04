import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import EventList from '../components/EventList'
import FestivalDataContext from "../context/FestivalDataContext";
import FavouritesDataContext from '../context/FavouritesDataContext';


const FestivalPage = ({ onEventClick }) => {

  const { festivalData, setFestivalData } = useContext(FestivalDataContext);
  const { favouritesData, setFavouritesData } = useContext(FavouritesDataContext);

  const [finalFestivalData, setFinalFestivalData] = useState([])

  const currentSearch = useLocation().search.split("=")[1]; // gets current search parameter, takes value after equal signs

  const fetchData = () => {
    fetch(`http://localhost:8080/festivals?id=${currentSearch}`)
      .then((response) => response.json())
      .then((data) => setFestivalData(data))
      .catch((e) => console.error(e));
  };

  useEffect(() => {
    fetchData()
  }, []);

  useEffect(() => {
    setFinalFestivalData(festivalData.length > 0 ? festivalData.map((event) => {
      const property = favouritesData.includes(event);
      event.favourited = property;
      return event;
    }) : [])
  }, [favouritesData])


  return (
    <EventList context={finalFestivalData.length > 0 ? finalFestivalData : festivalData} onEventClick={onEventClick} />
  )
}

export default FestivalPage