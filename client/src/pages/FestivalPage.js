import React, { useContext } from 'react'
import EventList from '../components/EventList'
import FestivalDataContext from "../context/FestivalDataContext";
import FavouritesDataContext from '../context/FavouritesDataContext';


const FestivalPage = ({onEventClick}) => {

  const { festivalData, setFestivalData } = useContext(FestivalDataContext);
  const { favouritesData, setFavouritesData } = useContext(FavouritesDataContext);

  return (
    <EventList context={festivalData} onEventClick={onEventClick} />
  )
}

export default FestivalPage