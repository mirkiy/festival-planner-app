import React from 'react'
import EventItem from './EventItem'
import FestivalDataContext from '../context/FestivalDataContext'

const EventList = () => {
  return (
    <ul>
        <FestivalDataContext.Consumer>
            {({festivalData}) => {
                return(
                    festivalData.map((event, index) => {
                        return <EventItem key={index} event={event} />
                    })
                )
                }}
        </FestivalDataContext.Consumer>
    </ul>
  )
}

export default EventList