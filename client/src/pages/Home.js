import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';

function Home() {
  const [listOfUsers, setListOfUsers] = useState([]);
  let navigate = useNavigate();
  const fetchData = async () => {
    try {
      let response = await axios.get('http://localhost:3001/events');
      if (response.status === 200) {
        setListOfUsers(response.data);
      } else {
        console.log('Error fetching event list');
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const deleteEvent = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/events/${id}`);

      await fetchData();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {listOfUsers.map((value, key) => {
        return (
          <div key={value.id} className="event">
            <div className="firstName">{value.userFirstName}</div>
            <div className="secondName">{value.userSecondName}</div>
            <div className="email">{value.userEmail}</div>
            <div className="date">
              {dayjs(value.userDate).format('DD/MM/YYYY')}
            </div>
            <div className="buttons">
              <button
                className="edit"
                onClick={() => {
                  navigate(`/edit-event/${value.id}`);
                }}
              >
                Edit
              </button>
              <button className="delete" onClick={() => deleteEvent(value.id)}>
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
