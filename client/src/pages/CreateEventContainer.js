import React from 'react';
import CreateEvent from './CreateEvent';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function CreateEventContainer() {
  let navigate = useNavigate();
  const initialValues = {
    userFirstName: '',
    userSecondName: '',
    userEmail: '',
    userDate: '',
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
    <CreateEvent
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    />
  );
}
