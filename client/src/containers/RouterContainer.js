import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AboutPage from '../pages/AboutPage'
import CalendarPage from '../pages/CalendarPage'
import FavouritesPage from '../pages/FavouritesPage'
import FestivalPage from '../pages/FestivalPage'
import FormPage from '../pages/FormPage'
import HomePage from '../pages/HomePage'

const RouterContainer = () => {
  return (
    <>
      <Routes>
        <Route exact path='/' element={ <HomePage/>} />
        <Route path='/about' element={ <AboutPage/> } />
        <Route path='/calendar' element={ <CalendarPage/> } />
        <Route path='/favourites' element={ <FavouritesPage/> } />
        <Route path='/festival' element={ <FestivalPage/> } />
        <Route path='/form' element={ <FormPage/> } />
      </Routes>
    </>
  )
}

export default RouterContainer