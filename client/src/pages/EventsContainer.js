import React from 'react';
import { useEffect, useState } from 'react';
import Home from './Home';

export default function EventsContainer() {
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    const response = await fetch('http://localhost:3001/events');

    if (response.ok) {
      setEvents(await response.json());
      return;
    }

    console.error(response);
  };

  const deleteEvent = async (id) => {
    const response = await fetch(`http://localhost:3001/events/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      await fetchEvents();
      return;
    }

    console.error(response);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return <Home events={events} onDelete={deleteEvent} />;
}
