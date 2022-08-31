import React from 'react';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';

export default function Home({ events, onDelete }) {
  if (events.length === 0) {
    return <div>No events</div>;
  }

  return (
    <div>
      {events.map((event) => {
        return (
          <div key={event.id} className="event" data-testid="event">
            <div className="firstName" data-testid="firstName">
              {event.userFirstName}
            </div>
            <div className="secondName" data-testid="secondName">
              {event.userSecondName}
            </div>
            <div className="email" data-testid="userEmail">
              {event.userEmail}
            </div>
            <div className="date" data-testid="userDate">
              {dayjs(event.userDate).format('DD/MM/YYYY')}
            </div>
            <div className="buttons">
              <Link
                element="button"
                className="edit"
                to={`/edit-event/${event.id}`}
              >
                Edit
              </Link>
              <button
                className="delete"
                data-testid={event.id}
                onClick={() => onDelete(event.id)}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
