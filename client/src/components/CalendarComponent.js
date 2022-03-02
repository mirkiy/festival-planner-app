import React, { useContext } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import 'react-big-calendar/lib/css/react-big-calendar.css'
import moment from 'moment';
import FestivalDataContext from '../context/FestivalDataContext'

const CalendarComponent = () => {
    const localizer = momentLocalizer(moment);

    let { festivalData } = useContext(FestivalDataContext)

    const myEvents = festivalData.flatMap(event => {
        return event.performances.map(performance => {
            return {
                title: event.title,
                start: performance.start,
                end: performance.end,
                allDay: false
            }
        })
    }
    )

    console.log(myEvents);

    return (
        <Calendar
            localizer={localizer}
            events={myEvents}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
        />
    )
}

export default CalendarComponent