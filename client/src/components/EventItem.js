import React from 'react'

const EventItem = ({event}) => {
  return (
    <li>
        <h1>{event.title}</h1>
        <h2>{event.year}</h2>
    </li>
  )
}

export default EventItem