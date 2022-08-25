import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function Event() {
  let { id } = useParams();
  const [eventObject, setEventObject] = useState({});
  let navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get(`http://localhost:3001/events/${id}`);
        if (response.status === 200) {
          setEventObject(response.data);
        } else {
          console.log('Error fetching event');
        }
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, [id]);

  const onSubmit = async (data) => {
    try {
      await axios.put(`http://localhost:3001/events/${id}`, data);
      navigate('/');
    } catch (err) {
      console.log(err.message);
    }
  };

  const initialValues = {
    userFirstName: eventObject.userFirstName,
    userSecondName: eventObject.userSecondName,
    userEmail: eventObject.userEmail,
    userDate: eventObject.data,
  };

  const validationSchema = Yup.object().shape({
    userFirstName: Yup.string().required(),
    userSecondName: Yup.string().required(),
    userEmail: Yup.string().email().required(),
    userDate: Yup.date().required(),
  });

  return (
    <div className="createEventPage">
      <Formik
        enableReinitialize
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <label>First Name:</label>
          <ErrorMessage name="userFirstName" component="span" />
          <Field
            id="inputCreateEvent"
            name="userFirstName"
            placeholder="first name"
          />
          <label>Second Name:</label>
          <ErrorMessage name="userSecondName" component="span" />
          <Field
            id="inputCreateEvent"
            name="userSecondName"
            placeholder="second name"
          />
          <label>Email:</label>
          <ErrorMessage name="userEmail" component="span" />
          <Field
            id="inputCreateEvent"
            name="userEmail"
            type="email"
            placeholder="email@email.com"
          />
          <label>Date:</label>
          <ErrorMessage name="userDate" component="span" />
          <Field
            id="inputCreateEvent"
            name="userDate"
            type="date"
            placeholder="Date"
          />
          <button type="submit">Create Event</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Event;
