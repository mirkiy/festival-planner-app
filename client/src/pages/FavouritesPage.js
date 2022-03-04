import React, { useContext } from 'react'
import FavouritesDataContext from '../context/FavouritesDataContext'
import EventList from '../components/EventList';

const FavouritesPage = ({ onEventClick }) => {

  const { favouritesData, setFavouritesData } = useContext(FavouritesDataContext);

  console.log(favouritesData)


  return (
    <EventList context={favouritesData} onEventClick={onEventClick} />
  )
}

export default FavouritesPage