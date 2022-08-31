import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as Yup from 'yup';
import EditEvent from './EditEvent';

export default function EditEventContainer() {
  let { id } = useParams();
  const [initialValues, setInitialValues] = useState(null);
  let navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:3001/events/${id}`);

      if (response.ok) {
        setInitialValues(await response.json());
        return;
      }
      console.error(response);
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

  const validationSchema = Yup.object().shape({
    userFirstName: Yup.string().required(),
    userSecondName: Yup.string().required(),
    userEmail: Yup.string().email().required(),
    userDate: Yup.date().required(),
  });
  return (
    <EditEvent
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    />
  );
}
