import React, { useState, useEffect } from 'react';
import Calendar from '../js/calendar';

const CalendarContainer = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('/Calendar')
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error(error));
  }, []);

  const addEvent = (title, date) => {
    fetch('/Calendar', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, date }),
    })
      .then((response) => response.json())
      .then((data) => setEvents([...events, data]))
      .catch((error) => console.error(error));
  };

  const deleteEvent = (id) => {
    fetch(`/Calendar/${id}`, {
      method: 'DELETE',
    })
      .then(() => setEvents(events.filter((event) => event.id !== id)))
      .catch((error) => console.error(error));
  };

  return <Calendar events={events} addEvent={addEvent} deleteEvent={deleteEvent} />;
};

export default CalendarContainer;