import React from 'react'
import NavBarContainer from './NavBarContainer'
import RouteContainer from './RouteContainer'
import SocialMediaContainer from './SocialMediaContainer'
import { BrowserRouter } from 'react-router-dom'

const MainContainer = () => {
  return (
    <>
        <div>MainContainer</div>
        <NavBarContainer/>
        <SocialMediaContainer/>
        <BrowserRouter>
            <RouteContainer/>
        </BrowserRouter>
    </>
  )
}

export default MainContainer