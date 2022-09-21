import './App.css';
import { Calendar, dateFnsLocalizer, datefnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-bigcalendar.css";
import React, { useState } from "react";
import DatePicker from "react-datepicker";


const locales{ 
"en-US": require("date-fns/locale/en-US")
}
const localizer = dateFnsLocalizer({
format, 
parse, 
startOfWeek,
getDay,
locales
})


const events = [
  {
    title: "Big Meeting",
    allDay: true,
    start: new Date(2022,9,13)
    end: new Date(2022,9,13)
  }
  {
    title: "Test",
    allDay: true,
    start: new Date(2022,9,13)
    end: new Date(2022,9,13)
  }
  {
    title: "Date",
    allDay: true,
    start: new Date(2022,9,13)
    end: new Date(2022,9,13)
  }
]


function App() {
  return (
    <div className="App">
      <Calendar localizer = {localizer} events = {events} 
      startAccessor = "start" endAccessor = "end" style = {{height: 500, margin: "50px"}} />
    </div>
  );
}

export default App;
