import React, { useContext } from 'react'
import FavouritesDataContext from '../context/FavouritesDataContext'
import EventList from '../components/EventList';

const FavouritesPage = () => {

  const { favouritesData, setFavouritesData } = useContext(FavouritesDataContext);

  console.log(favouritesData)

  const onEventClick = (newFavourite) => {
    setFavouritesData(favouritesData => favouritesData.push(newFavourite))
  }

  return (
    <EventList context={favouritesData} onEventClick={onEventClick} />
  )
}

export default FavouritesPage