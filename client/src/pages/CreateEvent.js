import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateEvent() {
  let navigate = useNavigate();
  const initialValues = {
    userFirstName: '',
    userSecondName: '',
    userEmail: '',
    userDate: new Date(),
  };

  const validationSchema = Yup.object().shape({
    userFirstName: Yup.string().required(),
    userSecondName: Yup.string().required(),
    userEmail: Yup.string().email().required(),
    userDate: Yup.date().required(),
  });

  const onSubmit = async (data) => {
    try {
      await axios.post('http://localhost:3001/events', data);
      navigate('/');
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="createEventPage">
      <Formik
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

export default CreateEvent;
