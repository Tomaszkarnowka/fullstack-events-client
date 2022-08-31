import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export default function EditEvent({
  initialValues,
  onSubmit,
  validationSchema,
}) {
  if (!initialValues) {
    return 'Loading...';
  }
  return (
    <div className="createEventPage" data-testid="editEvent">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <label>First Name:</label>
          <ErrorMessage name="userFirstName" component="span" />
          <Field
            data-testid="firstName"
            id="inputCreateEvent"
            name="userFirstName"
            placeholder="first name"
          />
          <label>Second Name:</label>
          <ErrorMessage name="userSecondName" component="span" />
          <Field
            data-testid="secondName"
            id="inputCreateEvent"
            name="userSecondName"
            placeholder="second name"
          />
          <label>Email:</label>
          <ErrorMessage name="userEmail" component="span" />
          <Field
            data-testid="userEmail"
            id="inputCreateEvent"
            name="userEmail"
            type="email"
            placeholder="email@email.com"
          />
          <label>Date:</label>
          <ErrorMessage name="userDate" component="span" />
          <Field
            data-testid="userDate"
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
